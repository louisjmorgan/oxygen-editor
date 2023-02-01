import {
  copyNodeWithChildren,
  createNode,
  deleteChild,
  getNodeFromTree,
  getParentAddress,
  nodeToString,
  parseNodes,
  parseRoot,
  parseTokens,
  updateAddresses,
  updateNodeInTree,
} from "./Tree";
import { ACTIONTYPE, AddressMap, AddressMapItem, Node, State } from "./Types";

function createAddressMap(node: Node, map: AddressMap, previous?: AddressMap) {
  const initial: AddressMapItem = {
    display: true,
    editName: false,
    editNode: false,
    insertTarget: "sibling",
    inputName: node.name,
    inputNode: "",
  };
  map.set(node.address.toString(), initial);
  node.children.forEach((child) => {
    createAddressMap(child, map);
  });

  if (previous) {
    map.forEach((value, address) => {
      const prev = previous.get(address);
      if (prev) map.set(address, { ...prev });
    });
  }

  return map;
}

function initializeState(code: string): State {
  const tree = parseRoot(code);
  const addressMap = createAddressMap(tree, new Map());
  const [[firstChild]] = [...tree.children];
  const state = {
    tree: tree,
    addressMap: addressMap,
    focus: [["root", firstChild]],
    editing: {
      name: false,
      node: false,
      modal: false,
    },
    collapsed: false,
    clipboard: "",
    user: "",
    fetched: {
      current: -1,
      trees: [],
    },
    errorDialog: {
      isOpen: false,
      content: {
        title: "",
        text: "",
        buttonTrue: "",
        buttonFalse: null,
      },
      action: (shouldAct: boolean) => null,
    },
  };
  return state;
}

function collapseChildren(node: Node, addressMap: AddressMap) {
  const prev = addressMap.get(node.address.toString());
  if (prev) {
    addressMap.set(node.address.toString(), {
      ...prev,
      display: false,
    });
    if (node.children.size > 0) {
      node.children.forEach((child) => {
        addressMap = collapseChildren(child, addressMap);
      });
    }
  }
  return addressMap;
}

function treeReducer(state: State, action: ACTIONTYPE): State {
  switch (action.type) {
    case "initialize": {
      const newState = initializeState(action.code);
      return newState;
    }

    case "load tree": {
      const tree = parseRoot(action.tree.content, action.tree.title);
      const addressMap = createAddressMap(tree, new Map());
      const [[firstChild]] = [...tree.children];
      return {
        ...state,
        tree,
        focus: [["root", firstChild]],
        addressMap,
        fetched: {
          ...state.fetched,
          current: action.index,
        },
      };
    }

    case "set fetched trees": {
      return {
        ...state,
        fetched: {
          current: action.trees.length === 0 ? -1 : 0,
          trees: action.trees || [],
        },
      };
    }

    case "set user": {
      return {
        ...state,
        user: action.user,
      };
    }

    case "replace state": {
      return {
        ...action.newState,
        editing: {
          modal: false,
          name: false,
          node: false,
        },
      };
    }

    case "set error dialog": {
      return {
        ...state,
        errorDialog: action.dialog,
      };
    }

    case "set modal": {
      return {
        ...state,
        editing: {
          ...state.editing,
          modal: action.isOpen,
        },
      };
    }

    case "copy node": {
      let newClipBoard = "";
      state.focus.forEach((address) => {
        newClipBoard +=
          nodeToString(getNodeFromTree(address, state.tree), 1) + "\n";
      });
      try {
        navigator.clipboard.writeText(newClipBoard);
      } catch (err) {
        console.error("Unable to copy", err);
      }
      return {
        ...state,
        clipboard: newClipBoard,
      };
    }

    case "copy address": {
      try {
        navigator.clipboard.writeText(state.focus[0].toString());
      } catch (err) {
        console.error("Unable to copy", err);
      }
      return state;
    }

    case "focus node": {
      if (action.address.toString() === "root") return state;
      // set new focus
      const newFocus = [...state.focus];
      newFocus.unshift(action.address);

      // display if collapsed
      const parentAddress = getParentAddress(action.address);
      const parent = state.addressMap.get(parentAddress.toString());
      let newAddressMap = new Map(state.addressMap);
      if (!parent?.display) {
        if (parent) {
          newAddressMap.set(parentAddress.toString(), {
            ...parent,
            display: true,
          });
        }
      }
      return {
        ...state,
        addressMap: newAddressMap,
        focus: newFocus,
      };
    }

    case "unfocus node": {
      const newFocus = [...state.focus];
      const index = newFocus.findIndex(
        (f) => f.toString() === action.address.toString()
      );
      if (index > -1) newFocus.splice(index, 1);
      return {
        ...state,
        focus: newFocus,
      };
    }

    case "unfocus all": {
      const address = state.focus[0];
      if (address.toString() === "root") return state;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(address.toString());
      if (prev) {
        newAddressMap.set(address.toString(), {
          ...prev,
          editName: false,
          editNode: false,
          // inputNode: "",
          // inputName: "",
        });
      }

      return {
        ...state,
        focus: [],
        addressMap: newAddressMap,
        editing: {
          ...state.editing,
          name: false,
          node: false,
        },
      };
    }

    case "toggle display children": {
      let newAddressMap = new Map(state.addressMap);
      let collapsed = false;

      action.addresses.forEach((address) => {
        const node = getNodeFromTree(address, state.tree);
        const isDisplay = !state.addressMap.get(address.toString())?.display;

        if (isDisplay === false) {
          newAddressMap = collapseChildren(node, newAddressMap);
        } else {
          const prev = newAddressMap.get(address.toString());
          if (prev) {
            newAddressMap.set(address.toString(), {
              ...prev,
              display: isDisplay,
            });
          }
        }

        if (node.address.toString() === "root") collapsed = true;
      });

      return {
        ...state,
        collapsed: collapsed,
        addressMap: newAddressMap,
      };
    }

    case "set collapse all": {
      const newAddressMap = new Map(state.addressMap);
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev) {
          newAddressMap.set(address, {
            ...prev,
            display: state.collapsed,
          });
        }
      });
      const [[firstChild]] = [...state.tree.children];
      return {
        ...state,
        focus: [["root", firstChild]],
        collapsed: !state.collapsed,
        addressMap: newAddressMap,
      };
    }

    case "edit name": {
      const address = state.focus[0];
      if (address.toString() === "root") return state;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(address.toString());
      if (prev) {
        newAddressMap.set(address.toString(), {
          ...prev,
          editName: action.isEditing,
        });
      }

      return {
        ...state,
        addressMap: newAddressMap,
        editing: {
          ...state.editing,
          name: action.isEditing,
        },
      };
    }

    // TODO add check for editing mode
    case "input name": {
      const newInput = action.input;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      if (prev) {
        newAddressMap.set(action.address.toString(), {
          ...prev,
          inputName: newInput,
        });
      }
      return {
        ...state,
        addressMap: newAddressMap,
      };
    }

    case "edit node": {
      const address = state.focus[0];
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(address.toString());
      if (prev) {
        newAddressMap.set(address.toString(), {
          ...prev,
          editNode: action.isEditing,
          inputNode: "",
        });
      }

      return {
        ...state,
        addressMap: newAddressMap,
        editing: {
          ...state.editing,
          node: action.isEditing,
        },
      };
    }

    case "input node": {
      const newInput = action.input;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      if (prev) {
        newAddressMap.set(action.address.toString(), {
          ...prev,
          inputNode: newInput,
        });
      }
      return {
        ...state,
        addressMap: newAddressMap,
      };
    }

    case "change insert target": {
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());

      if (prev) {
        newAddressMap.set(action.address.toString(), {
          ...prev,
          insertTarget: action.target,
        });
      }

      return {
        ...state,
        addressMap: newAddressMap,
      };
    }

    case "edit root name": {
      const newRoot = createNode(action.name, ["root"]);
      state.tree.children.forEach((child) =>
        newRoot.children.set(child.name, child)
      );
      const newAddressMap = createAddressMap(newRoot, new Map());
      return {
        ...state,
        addressMap: newAddressMap,
        tree: newRoot,
      };
    }

    case "submit name": {
      const newName = state.addressMap.get(action.node.address.toString())
        ?.inputName as string;
      const parentAddress = getParentAddress(action.node.address);
      const newAddress = [...parentAddress];
      newAddress.push(newName);

      const newNode = createNode(newName, newAddress, action.node.index);
      action.node.children.forEach((child) =>
        newNode.children.set(child.name, child)
      );

      const newTree = updateNodeInTree(
        state.tree,
        updateAddresses(newNode, newAddress),
        action.node.address
      );

      const prev = state.addressMap.get(action.node.address.toString());
      if (prev) {
        state.addressMap.set(action.node.address.toString(), {
          ...prev,
          editName: false,
        });
      }

      const newAddressMap = createAddressMap(newTree, new Map());
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev) newAddressMap.set(address, { ...prev });
      });

      return {
        ...state,
        focus: [newAddress],
        addressMap: newAddressMap,
        tree: newTree,
        editing: {
          ...state.editing,
          name: false,
        },
      };
    }

    case "delete": {
      let newAddressMap: AddressMap = new Map(state.addressMap);
      let newFocus = [...state.focus];
      const toDelete = [...state.focus];
      let newTree = state.tree;
      toDelete.forEach((address) => {
        if (address.toString() === "root") return;
        // get nodes from focus
        const child = getNodeFromTree(address, state.tree);
        const parentAddress = getParentAddress(address);
        const parent = getNodeFromTree(parentAddress, state.tree);
        // generate new tree and address map
        newTree = deleteChild(parent, child, state.tree);
        newAddressMap = createAddressMap(newTree, new Map(), newAddressMap);

        // get new focus
        const newParent = getNodeFromTree(parentAddress, newTree);
        if (newParent.children.size === 0) {
          newFocus = [parentAddress];
        } else {
          const siblings = [...newParent.children];
          if (child.index === 0) newFocus = [siblings[0][1].address];
          else newFocus = [siblings[child.index - 1][1].address];
        }
      });

      return {
        ...state,
        focus: newFocus,
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

    case "submit node": {
      if (!action.nodeString) return state;
      const parent = copyNodeWithChildren(
        getNodeFromTree(
          action.target === "sibling"
            ? getParentAddress(action.node.address)
            : action.node.address,
          state.tree
        )
      );
      const tokens = parseTokens(action.nodeString);
      if (tokens.length === 0) return state;
      const parsedNodes = parseNodes(tokens, parent.name, 0);
      const search = [...parent.address];
      let nodeIndex = parent.children.size;
      parsedNodes.forEach((node, name) => {
        parent.children.set(name, {
          ...node,
          index: nodeIndex,
        });
        nodeIndex++;
      });

      const newNode = updateAddresses(parent, parent.address);
      const newTree = updateNodeInTree(
        state.tree,
        newNode,
        parent.address,
        parent.index
      );

      const prev = state.addressMap.get(action.node.address.toString());
      if (prev) {
        state.addressMap.set(action.node.address.toString(), {
          ...prev,
          editNode: false,
        });
      }

      const newAddressMap = createAddressMap(newTree, new Map());
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev)
          newAddressMap.set(address, {
            ...prev,
            inputNode: "",
            editNode: false,
          });
      });

      return {
        ...state,
        focus: [[...search, tokens[0].value]],
        editing: {
          ...state.editing,
          node: false,
        },
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

    case "shift sibling": {
      if (action.node.index === 0) return state;

      const parent = getNodeFromTree(
        getParentAddress(action.node.address),
        state.tree
      );
      const sibling = { ...[...parent.children][action.node.index - 1] };

      const newAddress = [...sibling[1].address, action.node.name];
      const tempNode = createNode(action.node.name, newAddress);
      action.node.children.forEach((child) => {
        tempNode.children.set(child.name, child);
      });

      const newNode = updateAddresses(tempNode, newAddress);
      let newTree = deleteChild(parent, action.node, state.tree);
      newTree = updateNodeInTree(
        newTree,
        newNode,
        newAddress,
        sibling[1].children.size
      );

      const newAddressMap = createAddressMap(newTree, new Map());
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev) newAddressMap.set(address, { ...prev });
      });

      if (
        state.addressMap.get(sibling[1].address.toString())?.display === false
      ) {
        const prev = state.addressMap.get(sibling[1].address.toString());
        if (prev) {
          newAddressMap.set(sibling[1].address.toString(), {
            ...prev,
            display: true,
          });
        }
      }

      return {
        ...state,
        focus: [newAddress],
        tree: newTree,
        addressMap: newAddressMap,
      };
    }

    case "shift order": {
      if (action.direction === -1 && action.node.index === 0) return state;

      const parent = getNodeFromTree(
        getParentAddress(action.node.address),
        state.tree
      );

      if (
        action.direction === 1 &&
        action.node.index >= parent.children.size - 1
      )
        return state;

      const newIndex = action.node.index + action.direction;
      const oldIndex = action.node.index;

      const sibling = [...parent.children][newIndex];

      const search = [...parent.address].slice(
        parent.address.length - 1,
        parent.address.length
      );

      // replace sibling with temporary node
      search.push(sibling[1].name);
      const tempNode = createNode("temp");
      let tempParent = updateNodeInTree(parent, tempNode, search);

      // replace focussed node with sibling
      search.pop();
      search.push(action.node.name);
      const newSibling = createNode(sibling[0], sibling[1].address, oldIndex);
      sibling[1].children.forEach((child) => {
        newSibling.children.set(child.name, child);
      });
      tempParent = updateNodeInTree(tempParent, newSibling, search);

      // replace temporary node with focussed node
      search.pop();
      search.push("temp");
      const newNode = createNode(
        action.node.name,
        action.node.address,
        newIndex
      );
      action.node.children.forEach((child) => {
        newNode.children.set(child.name, child);
      });
      const newParent = updateNodeInTree(tempParent, newNode, search);

      const newTree = updateNodeInTree(state.tree, newParent, parent.address);
      const newAddressMap = createAddressMap(newTree, new Map());

      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev) newAddressMap.set(address, { ...prev });
      });

      return {
        ...state,
        tree: newTree,
        focus: [action.node.address],
        addressMap: newAddressMap,
      };
    }

    case "shift parent": {
      const parent = getNodeFromTree(
        getParentAddress(action.node.address),
        state.tree
      );

      if (parent.address.toString() === "root") return state;

      const newAddress = [...parent.address];
      newAddress.pop();
      newAddress.push(action.node.name);

      const tempNode = createNode(action.node.name, newAddress);
      action.node.children.forEach((child) => {
        tempNode.children.set(child.name, child);
      });

      const newNode = updateAddresses(tempNode, newAddress);
      let newTree = deleteChild(parent, action.node, state.tree);
      newTree = updateNodeInTree(
        newTree,
        newNode,
        newAddress,
        parent.index + 1
      );

      const newAddressMap = createAddressMap(newTree, new Map());
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev) newAddressMap.set(address, { ...prev });
      });

      return {
        ...state,
        focus: [newAddress],
        tree: newTree,
        addressMap: newAddressMap,
      };
    }
    default: {
      return state;
    }
  }
}

export { createAddressMap, treeReducer };
