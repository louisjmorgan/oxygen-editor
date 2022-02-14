/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState, useEffect, useRef, useReducer } from "react";
import Node from "./Components/Node";
import {
  treeReducer,
  getNodeFromTree,
  getParentAddress,
  getNextParent,
} from "./Utils/Tree";
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

const ALLOWED_KEYS = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Backspace",
  "Enter",
  "Escape",
  "Tab",
  " ",
  "c",
  "C",
  "v",
  "V",
  "a",
  "A",
  "e",
  "E",
  "i",
  "E",
  "Shift",
  "Control",
  "Alt",
];

function App() {
  const [state, dispatch] = useReducer(treeReducer, {
    tree: null,
    addressMap: null,
    focus: null,
    editing: null,
  });

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
      console.log(e.key);
      console.log(state.editing)
      if (key === "Enter") e.preventDefault();
      if (key === "Tab" || key === "Enter" || (
        (state.editing.name !== true && state.editing.node !== true) &&
        (key === " " ||
        key === "ArrowUp" ||
        key === "ArrowDown")
      )) {
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
          case "Enter": {
            const node = getNodeFromTree(state.focus[0], state.tree);
            dispatch({
              type: "submit name",
              node: node,
            });
            return;
          }

          case "Escape": {
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
          case "Enter": {
            const node = getNodeFromTree(state.focus[0], state.tree);
            const input = state.addressMap.get(state.focus[0].toString())
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
            }
            else if (input.insertTarget === "child") {
              dispatch({
                type: "paste child",
                nodeString: input.inputNode,
                address: node.address,
              });
            }
            dispatch({
              type: "edit node",
              address: node.address,
              edit: false,
            });
            return;
          };
          
          case "Escape": {
            dispatch({
              type: "edit node",
              address: state.focus[0],
              edit: false,
            });
            return;
          }
          case "Tab": {
            const prev = state.addressMap.get(state.focus[0].toString()).insertTarget;
            let newTarget;
            if (prev === "child") newTarget = "sibling";
            if (prev === "sibling") newTarget = "child";
            dispatch({
              type: "change insert target",
              address: state.focus[0],
              target: newTarget,
            })
            return;
          }
        }
      } else {
        // key combinations
        if (pressedKeys[1]) {
          switch (pressedKeys.slice(0, 2).toString()) {
            case "Alt,ArrowUp": {
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

            case "Alt,ArrowDown": {
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

            case "Alt,ArrowLeft": {
              const node = getNodeFromTree(state.focus[0], state.tree);
              const parentAddress = getParentAddress(state.focus[0]);
              if (parentAddress.toString() === "root") return;
              dispatch({
                type: "shift parent",
                node: node,
              });
              return;
            }

            case "Alt,ArrowRight": {
              const node = getNodeFromTree(state.focus[0], state.tree);
              if (node.index !== 0) {
                dispatch({
                  type: "shift sibling",
                  node: node,
                });
              }
              return;
            }
          }
        }

        // single keys
        switch (pressedKeys[0].toString()) {
          case "ArrowRight": {
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

          case "ArrowLeft": {
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

          case "ArrowDown": {
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
              console.log(parent);
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

          case "ArrowUp": {
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

          case "Backspace": {
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

          case " ": {
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

          case "c": {
            state.focus.forEach((address) => {
              const node = getNodeFromTree(address, state.tree);
              dispatch({
                type: "copy node",
                node: node,
              });
            });
            return;
          }

          case "v": {
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

          case "a": {
            state.focus.forEach((address) => {
              dispatch({
                type: "copy address",
                address: address,
              });
            });
            return;
          }

          case "e": {
            dispatch({
              type: "edit name",
              address: state.focus[0],
              edit: true,
            });
            return;
          }

          case "Enter": {
            dispatch({
              type: "edit node",
              address: state.focus[0],
              edit: true,
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
