import { getNextParent, getNodeFromTree, getParentAddress } from "../Model/Tree";
import { ACTIONTYPE, State } from "../Model/Types";
import commands from "./commands";

const keyHandler = (dispatch: (action: ACTIONTYPE) => void, pressedKeys: string[], state: State, collapseAll: () => void) => {
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
        if (
          state.focus[0].toString() === "root" &&
          input &&
          input.insertTarget === "sibling"
        )
          return;
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
        )?.insertTarget;
        let newTarget: "sibling" | "child" = "sibling";
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
    if (
      pressedKeys[1] &&
      pressedKeys[1].toString() !== pressedKeys[0].toString()
    )
      condition = pressedKeys.slice(0, 2).toString();
    else condition = pressedKeys[0];

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
          )?.display;
          if (displayChildren === false) {
            dispatch({
              type: "set display children",
              node: node,
              display: true,
            });
          }
          dispatch({
            type: "unfocus all",
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
        const parentAddress = getParentAddress(state.focus[0]);
        if (parentAddress.toString() === 'root') return;
        dispatch({
          type: "unfocus all",
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
            type: "unfocus all",
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
            type: "unfocus all",
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
            )?.display;
            if (displayChildren === false) {
              dispatch({
                type: "set display children",
                node: node,
                display: true,
              });
            }
            dispatch({
              type: "unfocus all",
            });
            dispatch({
              type: "focus node",
              address: node.children.values().next().value.address,
            });
          } else {
            if (parent.index < superParent.children.size - 1) {
              dispatch({
                type: "unfocus all",
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
        const parentAddress = getParentAddress(state.focus[0])
        if (parentAddress.toString() === "root") return;
        const parent = getNodeFromTree(
          parentAddress,
          state.tree
        );
        if (node.index > 0) {
          dispatch({
            type: "unfocus all",
          });
          dispatch({
            type: "focus node",
            address: [...parent.children][node.index - 1][1].address,
          });
        } else {
          dispatch({
            type: "unfocus all",
          });
          dispatch({
            type: "focus node",
            address: parent.address,
          });
        }
        return;
      }
      

      case commands.addFocusAbove: {
        if (state.focus[0].toString() === "root") return;
        const node = getNodeFromTree(state.focus[0], state.tree);
        const parentAddress = getParentAddress(state.focus[0])
        if (parentAddress.toString() === "root") return;
        const parent = getNodeFromTree(
          parentAddress,
          state.tree
        );

        if (node.index > 0) {
          dispatch({
            type: "focus node",
            address: [...parent.children][node.index - 1][1].address,
          });
        }
        return;
      }

      case commands.addFocusBelow: {
        if (state.focus[0].toString() === "root") return;
        const node = getNodeFromTree(state.focus[0], state.tree);
        const parent = getNodeFromTree(
          getParentAddress(state.focus[0]),
          state.tree
        );
        if (node.index < parent.children.size - 1) {
          dispatch({
            type: "focus node",
            address: [...parent.children][node.index + 1][1].address,
          });
        }
        return;
      }

      case commands.showHide: {
        state.focus.forEach((address) => {    
          const node = getNodeFromTree(address, state.tree);
          const prev = state.addressMap.get(address.toString())?.display;
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
        const toDelete = [...state.focus]
        toDelete.forEach((address) => {
          if (address.toString() === "root") return;
          const node = getNodeFromTree(address, state.tree);
          const parent = getNodeFromTree(getParentAddress(address),state.tree);
          dispatch({
            type: "delete child",
            child: node,
            node: parent,
          });
        });
        return;
      }

      case commands.paste: {
        state.focus.forEach((address) => {
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
          dispatch({
            type: "copy node",
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
}

export default keyHandler

