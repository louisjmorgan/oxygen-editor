import { getNextParent, getNodeFromTree, getParentAddress } from "../Model/Tree";
import { ACTIONTYPE, State } from "../Model/Types";
import shortcuts from "./shortcuts";

const keyHandler = (dispatch: (action: ACTIONTYPE) => void, pressedKeys: string[], state: State, collapseAll: () => void) => {
if (pressedKeys[0]) {
  if (state.editing.name) {
    switch (pressedKeys[0].toString()) {
      // while editing name
      case shortcuts.submit: {
        const node = getNodeFromTree(state.focus[0], state.tree);
        dispatch({
          type: "submit name",
          node: node,
        });
        return;
      }

      case shortcuts.cancel: {
        dispatch({
          type: "edit name",
          isEditing: false,
        });
        return;
      }
    }
  } else if (state.editing.node) {
    switch (pressedKeys[0].toString()) {
      // while inserting nodes
      case shortcuts.submit: {
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
            isEditing: false,
          });
          return;
        }
        dispatch({
          type: "paste node",
          nodeString: input.inputNode,
          node: node,
          target: input.insertTarget,
        });
        return;
      }

      case shortcuts.cancel: {
        dispatch({
          type: "edit node",
          isEditing: false,
        });
        return;
      }

      case shortcuts.indent: {
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
      case shortcuts.undo: {
        dispatch({ type: "undo" });
        return;
      }

      case shortcuts.collapseAll: {
        collapseAll();
        return;
      }

      // moving nodes around
      case shortcuts.shiftUp: {
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

      case shortcuts.shiftDown: {
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

      case shortcuts.shiftLeft: {
        const node = getNodeFromTree(state.focus[0], state.tree);
        const parentAddress = getParentAddress(state.focus[0]);
        if (parentAddress.toString() === "root") return;
        dispatch({
          type: "shift parent",
          node: node,
        });
        return;
      }

      case shortcuts.shiftRight: {
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
      case shortcuts.focusChild: {
        const node = getNodeFromTree(state.focus[0], state.tree);

        if (node.children.size > 0) {
          const nextFocus = node.children.values().next().value.address
          dispatch({
            type: "unfocus all",
          });
          dispatch({
            type: "focus node",
            address: nextFocus,
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

      case shortcuts.focusParent: {
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

      case shortcuts.focusBelow: {
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
            const nextFocus = node.children.values().next().value.address;
            dispatch({
              type: "unfocus all",
            });
            dispatch({
              type: "focus node",
              address: nextFocus,
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

      case shortcuts.focusAbove: {
        if (state.focus[0].toString() === "root") return;
        const node = getNodeFromTree(state.focus[0], state.tree);
        const parentAddress = getParentAddress(state.focus[0])
        if (parentAddress.toString() === "root" && node.index === 0) return;
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
      

      case shortcuts.addFocusAbove: {
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

      case shortcuts.addFocusBelow: {
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

      case shortcuts.showHide: {
        dispatch({
          type: "toggle display children",
          addresses: state.focus,
        });
        return;
      }

      // deleting, editing and inserting nodes
      case shortcuts.delete: {
        dispatch({
          type: 'delete'
        })

        return;
      }

      case shortcuts.paste: {
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

      case shortcuts.editNode: {
        dispatch({
          type: "edit name",
          isEditing: true,
        });
        return;
      }

      case shortcuts.newNode: {
        dispatch({
          type: "edit node",
          isEditing: true,
        });
        return;
      }

      //copying
      case shortcuts.copyNode: {
        state.focus.forEach((address) => {
          dispatch({
            type: "copy node",
          });
        });
        return;
      }

      case shortcuts.copyAddress: {
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

