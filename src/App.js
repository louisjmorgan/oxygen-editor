/* eslint-disable default-case */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useState, useEffect, useRef, useReducer } from "react";
import Node from "./Components/Node";
import { treeReducer, getNodeFromTree, initializeState } from "./Utils/Tree";
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
  " ",
  "c",
  "C",
  "v",
  "V",
  "a",
  "A",
  "e",
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

      if (key === " " || key === "ArrowUp" || key === "ArrowDown") e.preventDefault();

      if (ALLOWED_KEYS.includes(key) && !pressedKeys.includes(key)) {
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
  }, [pressedKeys]);

  function getParentAddress(address) {
    const length = address.length;
    if (length > 1) {
      const newAddress = address.filter((elem, i) => i !== length - 1);
      return newAddress;
    } else {
      return null;
    }
  }

  function findFocusIndex(address) {
    let index = -1;
    state.focus.forEach((item, i) => {
      if (item.toString() === address.toString()) index = i;
    });
    return index;
  }

  useEffect(() => {
    console.log(pressedKeys);


    if (state.editing) {
      switch(pressedKeys.toString()) {
        case "Enter": {
          const node = getNodeFromTree(state.focus[0], state.tree)
          const parent = getNodeFromTree(getParentAddress(state.focus[0]), state.tree)
          dispatch({
            type: "submit name",
            node: node,
            parent: parent,
          })
          return;
        }

        case "Escape": {
          dispatch({
            type: "edit name",
            address: state.focus[0],
            edit: false,
          })
          return;
        }
      }
    } else {
      switch (pressedKeys.toString()) {
        case "ArrowRight": {
          const node = getNodeFromTree(state.focus[0], state.tree);
          
          if (node.children.size !== 0 ) {
            const displayChildren = state.addressMap.get(node.address.toString()).display;
            if (displayChildren === false) {
              dispatch({
                type: "set display children",
                address: node.address,
                display: true,
              })
            }
            dispatch({
              type: "unfocus node",
              address: state.focus[0],
            });
            dispatch({
              type: "focus node",
              address: node.children.values().next().value.address,
            });
          }
          return;
        }

        case "ArrowLeft": {
          const parentAddress = getParentAddress(state.focus[0]);
          if (parentAddress) {
            dispatch({
              type: "unfocus node",
              address: state.focus[0],
            });
            dispatch({
              type: "focus node",
              address: parentAddress,
            });
          }
          return;
        }

        case "Backspace": {
          state.focus.forEach((address) => {
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
            const prev = state.addressMap.get(address.toString()).display
            dispatch({
              type: "set display children",
              address: address,
              display: !prev,
            })
          })
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
                type: "paste node",
                address: address,
                nodeString: text,
              })
            );
          })
          return;
        }

        case "a": {
          state.focus.forEach((address) => {
            dispatch({
              type: "copy address",
              address: address,
            })
          })
          return;
        }

        case "e": {
          dispatch({
            type: "edit name",
            address: state.focus[0],
            edit: true,
          })
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

  // function updateDisplay(address, display) {
  //   console.log(display)

  //   return;
  // }

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
            displayChildren: state.addressMap.get(state.tree.address.toString()).display,
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
