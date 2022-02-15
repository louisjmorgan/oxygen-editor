/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState, useEffect, useRef, useReducer } from "react";
import Node from "./Components/Node";
import commands from "./Settings/commands";
import {
  treeReducer,
  getNodeFromTree,
  getParentAddress,
  getNextParent,
} from "./Model/Tree";

const e = React.createElement;

const code =
  "views\n\tbuy\n\t\thome\n\t\t\ttickets\n\t\t\t\ticon\n\t\t\t\t\tticket\n\t\t\t\tmy tickets\n\t\t\t\t\ttype\n\t\t\t\t\t\tbutton\n\t\t\t\t\taction\n\t\t\t\t\t\t. nav\n\t\t\t\t\t\t\tusers tickets\n\t\t\tevents\n\t\t\t\ticon\n\t\t\t\t\tusers\n\t\t\t\t. map\n\t\t\t\t\titems\n\t\t\t\t\t\t. sort\n\t\t\t\t\t\t\titems\n\t\t\t\t\t\t\t\t. data, events\n\t\t\t\t\t\t\tfunc\n\t\t\t\t\t\t\t\ta date\n\t\t\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t\t\t. a, $1, date\n\t\t\t\t\t\t\t\tb date\n\t\t\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t\t\t. b, $1, date\n\t\t\t\t\t\t\t\tout\n\t\t\t\t\t\t\t\t\t. smaller\n\t\t\t\t\t\t\t\t\t\t. a date\n\t\t\t\t\t\t\t\t\t\t. b date\n\t\t\t\t\tfunc\n\t\t\t\t\t\tevent date\n\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t. in, $1, date\n\t\t\t\t\t\tcurrent date\n\t\t\t\t\t\t\t. date to number\n\t\t\t\t\t\t\t\t. now date\n\t\t\t\t\t\tout\n\t\t\t\t\t\t\t. if\n\t\t\t\t\t\t\t\tis\n\t\t\t\t\t\t\t\t\t. and\n\t\t\t\t\t\t\t\t\t\t. not\n\t\t\t\t\t\t\t\t\t\t\t. in, $1, private\n\t\t\t\t\t\t\t\t\t\t. >=\n\t\t\t\t\t\t\t\t\t\t\t. event date\n\t\t\t\t\t\t\t\t\t\t\t. current date\n\t\t\t\t\t\t\t\t\t\t. data, sellers, . data,events,. in,seller , verified\n\t\t\t\t\t\t\t\tthen\n\t\t\t\t\t\t\t\t\t. event preview\n\t\t\t\t\t\t\t\t\t\tevent id\n\t\t\t\t\t\t\t\t\t\t\t. in";

const styles = {
  node: {
    display: "block",
    marginLeft: "3em",
    textAlign: "left",
    transition: "0.3s ease-in",
  },

  flex: {
    display: "flex",
    height: "2em",
    alignItems: "center",
  },

  token: {
    display: "inline",
  },

  tools: {
    display: "inline",
  },

  toolButton: {
    width: "1.5em",
    cursor: "pointer",
    padding: "0 0",
    display: "inline",
    alignContent: "center",
    marginLeft: "0.5em",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    backgroundColor: "#282c34",
    border: "none",
    borderRadius: "2px",
    fontFamily: "Segoe UI Symbol",
  },

  insertNode: {
    marginLeft: "6em",
  },

  editableNameField: {},

  collapseAll: {
    position: "fixed",
    top: "5%",
    right: "10%",
  },
};

const ALLOWED_KEYS = []
Object.values(commands).forEach(command => {
 const array = command.split(",")
  array.forEach(entry => ALLOWED_KEYS.push(entry))
})


function App() {
  const [state, dispatchTree] = useReducer(treeReducer, {
    tree: null,
    addressMap: null,
    focus: null,
    editing: null,
  });

  const [history, setHistory] = useState([]);
  const [undos, setUndos] = useState(0)

  const dispatch = (action) => {
    if (action.type === "undo") {
      if (history[0].tree && history.length > undos + 1) {
        console.log(undos)
        const newState = history[undos];
        setUndos((prev) => prev + 1)
        dispatchTree({
          type: "replace state",
          newState: newState,
        });
      }
      return;
    } else {
      
      if (
        action.type !== "focus node" &&
        action.type !== "unfocus node" &&
        action.type !== "input name" &&
        action.type !== "edit name" &&
        action.type !== "edit node" &&
        action.type !== "input node" &&
        action.type !== "set display children" &&
        action.type !== "set collapse all" &&
        action.type !== "copy node" &&
        action.type !== "copy address" &&
        action.type !== "change insert target"
      ) {
        if (undos > 0) {
          const newHistory = history.splice(0, undos)
          console.log(newHistory) 
          setHistory(() => newHistory)
          setUndos(() => 0)
        }
        setHistory((prev) => [state, ...prev]);
      }

      dispatchTree(action);
    }
  };

  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    dispatch({
      type: "initialize",
      code: code,
    });
    setLoaded(() => true);
  }, []);

  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const key = e.key;
      if (key === "Enter") e.preventDefault();
      if (
        key === "Tab" ||
        key === "Enter" ||
        (state.editing.name !== true &&
          state.editing.node !== true &&
          (key === " " || key === "ArrowUp" || key === "ArrowDown"))
      ) {
        e.preventDefault();
      }
      // && !pressedKeys.includes(key)
      if (ALLOWED_KEYS.includes(key)) {
        setPressedKeys((previousPressedKeys) => [...previousPressedKeys, key]);
      }
    };

    const onKeyUp = (e) => {
      const key = e.key;
      if (ALLOWED_KEYS.includes(key)) {
        setPressedKeys((previousPressedKeys) =>
          previousPressedKeys.filter((k) => k !== key)
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
    };
  }, [state.editing]);

  useEffect(() => {
    console.log(pressedKeys);

    if (pressedKeys[0]) {
      if (state.editing.name) {
        switch (pressedKeys[0].toString()) {
          // while editing name
          case commands.submit: {
            const node = getNodeFromTree(state.focus[0], state.tree);
            dispatch({
              type: "submit name",
              node: node,
            });
            return;
          }

          case commands.cancel: {
            dispatch({
              type: "edit name",
              address: state.focus[0],
              edit: false,
            });
            return;
          }
        }
      } else if (state.editing.node) {
        switch (pressedKeys[0].toString()) {
          // while inserting nodes
          case commands.submit: {
            const node = getNodeFromTree(state.focus[0], state.tree);
            const input = state.addressMap.get(state.focus[0].toString());
            if (state.focus[0].toString() === 'root' && input.insertTarget === "sibling") return;
            if (!input) {
              dispatch({
                type: "edit node",
                address: node.address,
                edit: false,
              });
              return;
            }
            if (input.insertTarget === "sibling") {
              dispatch({
                type: "paste sibling",
                nodeString: input.inputNode,
                node: node,
              });
            } else if (input.insertTarget === "child") {
              dispatch({
                type: "paste child",
                nodeString: input.inputNode,
                address: node.address,
              });
            }
            return;
          }

          case commands.cancel: {
            dispatch({
              type: "edit node",
              address: state.focus[0],
              edit: false,
            });
            return;
          }

          case commands.indent: {
            const prev = state.addressMap.get(
              state.focus[0].toString()
            ).insertTarget;
            let newTarget;
            if (prev === "child") newTarget = "sibling";
            if (prev === "sibling") newTarget = "child";
            dispatch({
              type: "change insert target",
              address: state.focus[0],
              target: newTarget,
            });
            return;
          }
        }
      } else {

        let condition;
        if (pressedKeys[1] && (pressedKeys[1].toString() !== pressedKeys[0].toString()) )
            condition = pressedKeys.slice(0, 2).toString()
        else condition = pressedKeys[0]
      
        switch (condition) {
          // global functionality
          case commands.undo: {
            dispatch({ type: "undo" });
            return;
          }

          case commands.collapseAll: {
            collapseAll();
            return;
          }

          // moving nodes around
          case commands.shiftUp: {
            const node = getNodeFromTree(state.focus[0], state.tree);
            if (node.index > 0) {
              dispatch({
                type: "shift order",
                node: node,
                direction: -1,
              });
            }
            return;
          }

          case commands.shiftDown: {
            if (state.focus[0].toString() === "root") return;
            const node = getNodeFromTree(state.focus[0], state.tree);
            const parent = getNodeFromTree(
              getParentAddress(state.focus[0]),
              state.tree
            );
            if (node.index < parent.children.size - 1) {
              dispatch({
                type: "shift order",
                node: node,
                direction: 1,
              });
            }
            return;
          }

          case commands.shiftLeft: {
            const node = getNodeFromTree(state.focus[0], state.tree);
            const parentAddress = getParentAddress(state.focus[0]);
            if (parentAddress.toString() === "root") return;
            dispatch({
              type: "shift parent",
              node: node,
            });
            return;
          }

          case commands.shiftRight: {
            const node = getNodeFromTree(state.focus[0], state.tree);
            if (node.index !== 0) {
              dispatch({
                type: "shift sibling",
                node: node,
              });
            }
            return;
          }

          
          // ui
          case commands.focusChild: {
            const node = getNodeFromTree(state.focus[0], state.tree);

            if (node.children.size > 0) {
              const displayChildren = state.addressMap.get(
                node.address.toString()
              ).display;
              if (displayChildren === false) {
                dispatch({
                  type: "set display children",
                  node: node,
                  display: true,
                });
              }
              dispatch({
                type: "unfocus node",
                address: state.focus[0],
              });
              dispatch({
                type: "focus node",
                address: node.children.values().next().value.address,
              });
            } else {
              const [superParent, parent] = getNextParent(node, state.tree);
              if (parent.index < superParent.children.size - 1) {
                dispatch({
                  type: "unfocus node",
                  address: state.focus[0],
                });
                dispatch({
                  type: "focus node",
                  address: [...superParent.children][parent.index + 1][1]
                    .address,
                });
              }
            }
            return;
          }

          case commands.focusParent: {
            if (state.focus[0].toString() === "root") return;
            const parentAddress = getParentAddress(state.focus[0]);
            dispatch({
              type: "unfocus node",
              address: state.focus[0],
            });
            dispatch({
              type: "focus node",
              address: parentAddress,
            });
            return;
          }

          case commands.focusBelow: {
            const node = getNodeFromTree(state.focus[0], state.tree);
            if (state.focus[0].toString() === "root") {
              dispatch({
                type: "unfocus node",
                address: state.focus[0],
              });
              dispatch({
                type: "focus node",
                address: node.children.values().next().value.address,
              });
              return;
            }
            const parent = getNodeFromTree(
              getParentAddress(state.focus[0]),
              state.tree
            );
            if (node.index < parent.children.size - 1) {
              dispatch({
                type: "unfocus node",
                address: state.focus[0],
              });
              dispatch({
                type: "focus node",
                address: [...parent.children][node.index + 1][1].address,
              });
            } else {
              const [superParent, parent] = getNextParent(node, state.tree);
              if (node.children.size > 0) {
                const displayChildren = state.addressMap.get(
                  node.address.toString()
                ).display;
                if (displayChildren === false) {
                  dispatch({
                    type: "set display children",
                    node: node,
                    display: true,
                  });
                }
                dispatch({
                  type: "unfocus node",
                  address: state.focus[0],
                });
                dispatch({
                  type: "focus node",
                  address: node.children.values().next().value.address,
                });
              } else {
                if (parent.index < superParent.children.size - 1) {
                  dispatch({
                    type: "unfocus node",
                    address: state.focus[0],
                  });
                  dispatch({
                    type: "focus node",
                    address: [...superParent.children][parent.index + 1][1]
                      .address,
                  });
                }
              }
            }
            return;
          }

          case commands.focusAbove: {
            if (state.focus[0].toString() === "root") return;
            const node = getNodeFromTree(state.focus[0], state.tree);
            const parent = getNodeFromTree(
              getParentAddress(state.focus[0]),
              state.tree
            );
            if (node.index > 0) {
              dispatch({
                type: "unfocus node",
                address: state.focus[0],
              });
              dispatch({
                type: "focus node",
                address: [...parent.children][node.index - 1][1].address,
              });
            } else {
              dispatch({
                type: "unfocus node",
                address: state.focus[0],
              });
              dispatch({
                type: "focus node",
                address: parent.address,
              });
            }
            return;
          }

          case commands.showHide: {
            state.focus.forEach((address) => {
              const node = getNodeFromTree(address, state.tree);
              const prev = state.addressMap.get(address.toString()).display;
              dispatch({
                type: "set display children",
                node: node,
                display: !prev,
              });
            });
            return;
          }

          // deleting, editing and inserting nodes
          case commands.delete: {
            state.focus.forEach((address) => {
              if (address.toString() === "root") return;
              const node = getNodeFromTree(address, state.tree);
              const parentAddress = getParentAddress(address);
              dispatch({
                type: "delete child",
                child: node,
                node: getNodeFromTree(parentAddress, state.tree),
              });
            });
            return;
          }

          case commands.paste: {
            state.focus.forEach((address) => {
              const node = getNodeFromTree(address, state.tree);
              navigator.clipboard.readText().then((text) =>
                dispatch({
                  type: "paste child",
                  address: address,
                  nodeString: text,
                })
              );
            });
            return;
          }

          case commands.editNode: {
            dispatch({
              type: "edit name",
              address: state.focus[0],
              edit: true,
            });
            return;
          }

          case commands.newNode: {
            dispatch({
              type: "edit node",
              address: state.focus[0],
              edit: true,
            });
            return;
          }

          //copying
          case commands.copyNode: {
            state.focus.forEach((address) => {
              const node = getNodeFromTree(address, state.tree);
              dispatch({
                type: "copy node",
                node: node,
              });
            });
            return;
          }

          case commands.copyAddress: {
            state.focus.forEach((address) => {
              dispatch({
                type: "copy address",
                address: address,
              });
            });
            return;
          }

          
        }
      }
    }
  }, [pressedKeys]);

  // ui handlers

  const [collapsed, setCollapse] = useState(true);

  function collapseAll() {
    dispatch({
      type: "set collapse all",
      displayChildren: !collapsed,
    });
    setCollapse(!collapsed);
  }

  function undo() {
    dispatch({
      type: "undo",
    });
  }

  function findFocusIndex(address) {
    let index = -1;
    state.focus.forEach((item, i) => {
      if (item.toString() === address.toString()) index = i;
    });
    return index;
  }

  return (
    <div className="App">
      {isLoaded ? (
        <main className="App-main">
          {e(
            "button",
            { onClick: collapseAll, style: styles.collapseAll },
            "collapse all"
          )}
          {e("button", { onClick: undo, style: {...styles.collapseAll, marginRight: "7em" }}, "undo")}
          {e(Node, {
            node: state.tree,
            key: "root",
            focussed: findFocusIndex(state.tree.address),
            findFocusIndex: findFocusIndex,
            addressMap: state.addressMap,
            displayChildren: state.addressMap.get(state.tree.address.toString())
              .display,
            visible: true,
            dispatch: dispatch,
          })}
        </main>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
