/* eslint-disable default-case */
// functions to parse nodes to/from strings

import {
  Node,
  Token,
  AddressMapItem,
  AddressMap,
  State,
  ACTIONTYPE,
} from "./Types";

function createNode(name: string, address: string[] = [], index = 0): Node {
  const children: Map<string, Node> = new Map();
  return { name, children, index, address };
}

function countRepeatedCharacter(line: string, character: string) {
  let x = 0;
  for (; x < line.length; x++) {
    const c = line.charAt(x);
    if (c !== character) break;
  }
  return x;
}

function parseTokens(code: string): Token[] {
  const lines = code.split("\n");
  const tokens: Token[] = [];
  lines.forEach((line, index) => {
    const token: Token = {
      y: index,
      x: countRepeatedCharacter(line, "\t"),
      value: line.replace(/[\t\r\n]+/g, ""),
    };
    if (token.value !== "") tokens.push(token);
  });
  return tokens;
}

function parseRecursive(
  superToken: Token,
  tokens: Token[],
  address: string[],
  index: number
): Node {
  const node = createNode(superToken.value);
  node.address = [...address, superToken.value];
  let orderIndex = 0;
  for (let i = index; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.x <= superToken.x) break;
    if (token.x === superToken.x + 1) {
      const sub = parseRecursive(token, tokens, node.address, i + 1);
      sub.address = [...node.address, token.value];
      sub.index = orderIndex;
      orderIndex++;
      node.children.set(token.value, sub);
    }
  }
  return node;
}

function parseNodes(tokens: Token[], rootName: string = "root", depth: number = 0) {
  const nodes = new Map()
  let orderIndex = 0
  tokens.forEach((token, index) => {
    if (token.x === depth) {
      const node = parseRecursive(token, tokens, [rootName], index + 1);
      node.address = [rootName, token.value];
      node.index = orderIndex;
      orderIndex++
      nodes.set(token.value, node);
    }
  });
  return nodes;
}

function parseRoot(code: string, rootName: string = 'root'): Node {
  const tokens = parseTokens(code)
  const nodes = createNode(rootName, ['root'])
  if (tokens.length !== 1) nodes.children = parseNodes(tokens, 'root')
  return nodes;
}

function nodeToString(node: Node, depth = 0, output = "") {
  const tab = "\t";
  const indent = tab.repeat(depth);
  output += "\n";
  let newDepth = depth
  if (node.address.toString() !== 'root') {
    newDepth = depth + 1
    output += indent + node.name;
  }
  node.children.forEach((child) => {
    output = nodeToString(child, newDepth, output);
  });
  return output;
}

// functions to manipulate node tree

function getNodeFromTree(address: string[], node: Node): Node {
  const search = [...address];
  if (search.length > 1) {
    search.shift();
    const result = node.children.get(search[0]);
    if (result) return getNodeFromTree(search, result);
    else return node;
  } else {
    return node;
  }
}

function updateAddresses(node: Node, address: string[]) {
  const newNode = createNode(node.name, address, node.index);
  node.children.forEach((child) => {
    newNode.children.set(
      child.name,
      updateAddresses(child, [...address, child.name])
    );
  });
  return newNode;
}

function updateNodeInTree(
  node: Node,
  newNode: Node,
  address: string[],
  insertionIndex = 0,
  rootName: string = 'root'
) {
  const search = [...address];
  if (search.length === 1) return newNode;

  const newTree = createNode(node.name, [...node.address], node.index);

  if (search.length === 2) {
    let shouldUpdate = [...node.children].reduce((prev, child) => {
      return (child[0] === search[1] && child[0] !== search[0]) || prev;
    }, false);

    if (node.children.size === 0) {
      newNode.index = 0;
      newTree.children.set(newNode.name, newNode);
    }

    let insertOffset = 0;
    [...node.children].forEach((child, index) => {
      if (index === insertionIndex && !shouldUpdate) {
        newNode.index = insertionIndex;
        newTree.children.set(newNode.name, newNode);
        insertOffset = 1;
      }
      if (child[0] === search[1]) {
        child[1].index = index + insertOffset;
        const newSearch = [...search];
        newSearch.shift();
        newTree.children.set(
          newNode.name,
          updateNodeInTree(child[1], newNode, newSearch, insertionIndex)
        );
      } else {
        child[1].index = index + insertOffset;
        newTree.children.set(child[0], child[1]);
      }
    });

    if (insertionIndex === node.children.size) {
      newNode.index = insertionIndex;
      newTree.children.set(newNode.name, newNode);
    }
  }

  // copy old tree structure, performing recursive deep copy only when address matches update
  if (search.length > 2) {
    [...node.children].forEach((child, index) => {
      if (child[0] === search[1]) {
        const newSearch = [...search];
        newSearch.shift();
        child[1].index = index;
        newTree.children.set(
          child[0],
          updateNodeInTree(child[1], newNode, newSearch, insertionIndex)
        );
      } else {
        child[1].index = index;
        newTree.children.set(child[0], child[1]);
      }
    });
  }
  return newTree;
}

function copyNode(prev: Node) {
  const newNode = createNode(prev.name, [...prev.address], prev.index);
  return newNode;
}

function getParentAddress(address: string[]) {
  const length = address.length;
  if (length > 1) {
    const newAddress = address.filter((elem, i) => i !== length - 1);
    return newAddress;
  } else return address;
}

function getNextParent(node: Node, tree: Node): [parent: Node, node: Node] {
  const parent = getNodeFromTree(getParentAddress(node.address), tree);
  if (parent.address.toString() === "root") return [parent, node];
  if (node.index < parent.children.size - 1) return [parent, node];
  else return getNextParent(parent, tree);
}

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
  const tree = parseRoot(code)
  const addressMap = createAddressMap(tree, new Map());
  const [[firstChild]] = [...tree.children]
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
    user: '',
    fetched: {
      current: -1 ,
      trees: []
    },
    errorDialog: {
      isOpen: false,
      content: {
        title: '',
        text: '',
        buttonTrue: '',
        buttonFalse: null,
      },
      action: (shouldAct: boolean) => null,
    }
  };
  return state;
}

function deleteChild(parent: Node, child: Node, tree: Node) {
  const newNode = copyNode(parent);

  const parentKeys = [...parent.children.keys()];
  const toRemove = parentKeys.indexOf(child.name);

  const parentArray = [...parent.children];
  parentArray.splice(toRemove, 1);

  parentArray.forEach((entry, index) => {
    entry[1].index = index;
    newNode.children.set(entry[0], entry[1]);
  });

  return updateNodeInTree(tree, newNode, parent.address);
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
      const tree = parseRoot(action.tree.content, action.tree.title)
      const addressMap = createAddressMap(tree, new Map())
      const [[firstChild]] = [...tree.children]
      return {
        ...state,
        tree,
        focus: [['root', firstChild]],
        addressMap,
        fetched: {
          ...state.fetched,
          current: action.index
        }
      }
    }

    case "set fetched trees": {
      return {
        ...state,
        fetched: {
          current: action.trees.length === 0 ? -1 : 0,
          trees: action.trees || [],
        },
      }
    }

    case "set user": {
      return {
        ...state,
        user: action.user,
      }
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
      }
    }


    case "focus node": {
      if (action.address.toString() === 'root') return state
      // set new focus
      const newFocus = [...state.focus];
      newFocus.unshift(action.address);

      // display if collapsed
      const parentAddress = getParentAddress(action.address)
      const parent = state.addressMap.get(parentAddress.toString())
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
      const index = newFocus.indexOf(action.address);
      if (index > -1) newFocus.splice(index, 1);
      return {
        ...state,
        focus: newFocus,
      };
    }

    case "unfocus all": {
      const address = state.focus[0]
      if (address.toString() === "root") return state;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(address.toString());
      if (prev) {
        newAddressMap.set(address.toString(), {
          ...prev,
          editName: false,
          editNode: false,
          inputNode: "",
          inputName: "",
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
      
      })

      
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
      const [[firstChild]] = [...state.tree.children]
      return {
        ...state,
        focus: [["root", firstChild]],
        collapsed: !state.collapsed,
        addressMap: newAddressMap,
      };
    }

    case "delete": {
      let newTree = state.tree
      let newAddressMap = new Map(state.addressMap)
      let newFocus = [...state.focus]
      const toDelete = [...state.focus]
      toDelete.forEach((address) => {
          if (address.toString() === "root") return;
          // get nodes from focus
          const child = getNodeFromTree(address, newTree);
          const parentAddress = getParentAddress(address)
          const parent = getNodeFromTree(parentAddress, newTree);

          // generate new tree and address map
          newTree = deleteChild(parent, child, newTree);
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
      })
     
      return {
        ...state,
        focus: newFocus,
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

    case "edit name": {
      const address = state.focus[0]
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

    case "set modal": {
      return {
        ...state,
        editing: {
          ...state.editing,
          modal: action.isOpen,
        },
      };
    }

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

    case "edit root name": {
      const newRoot = createNode(action.name, ['root'])
      state.tree.children.forEach((child) =>
        newRoot.children.set(child.name, child)
      );
      const newAddressMap = createAddressMap(newRoot, new Map());
      return {
        ...state,
        addressMap: newAddressMap,
        tree: newRoot,
      }
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

    case "edit node": {
      const address = state.focus[0]
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

    case "copy node": {
      let newClipBoard = "";
      state.focus.forEach((address) => {
        newClipBoard +=
          nodeToString(getNodeFromTree(address, state.tree)) + "\n";
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
        navigator.clipboard.writeText(action.address.toString());
      } catch (err) {
        console.error("Unable to copy", err);
      }
      return state;
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

    case "paste node": {
      if (!action.nodeString) return state;
      const parent = getNodeFromTree(
        action.target === "sibling" ? getParentAddress(action.node.address) : action.node.address,
        state.tree
      );
      const tokens = parseTokens(action.nodeString);
      const parsedNodes = parseNodes(tokens, parent.name, 0)
      
      const search = [...parent.address];
      parsedNodes.forEach((node, name) => {
      
        parent.children.set(name, node)
      })

      const newNode = updateAddresses(parent, parent.address)
      const newTree = updateNodeInTree(
        state.tree,
        newNode,
        parent.address,
        parent.index,
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

    // case "paste child": {
    //   if (!action.nodeString) return state;
    //   const tokens = parseTokens(action.nodeString);
    //   const parsedNodes = parseRoot(action.nodeString, tokens[0].value);

    //   const search = [...action.address];
    //   search.push(parsedNodes.name);

    //    const newNode = updateAddresses(parsedNodes, search);
    //   console.log(newNode)
    //   const newTree = updateNodeInTree(
    //     state.tree,
    //     newNode,
    //     search,
    //     action.node.index + 1
    //   );

    //   console.log(newTree)
    //   const prev = state.addressMap.get(action.node.address.toString());
    //   if (prev) {
    //     state.addressMap.set(action.node.address.toString(), {
    //       ...prev,
    //       editNode: false,
    //     });
    //   }

    //   const newAddressMap = createAddressMap(newTree, new Map());
    //   newAddressMap.forEach((value, address) => {
    //     const prev = state.addressMap.get(address);
    //     if (prev)
    //       newAddressMap.set(address, {
    //         ...prev,
    //         inputNode: "",
    //         editNode: false,
    //       });
    //   });

    //   if (prev?.display === false) {
    //     const prev = state.addressMap.get(action.address.toString());
    //     if (prev) {
    //       newAddressMap.set(action.address.toString(), {
    //         ...prev,
    //         display: true,
    //       });
    //     }
    //   }

    //   return {
    //     ...state,
    //     focus: [search],
    //     editing: {
    //       ...state.editing,
    //       node: false,
    //     },
    //     addressMap: newAddressMap,
    //     tree: newTree,
    //   };
    // }

    case "shift sibling": {
      const parent = getNodeFromTree(
        getParentAddress(action.node.address),
        state.tree
      );
      const sibling = [...parent.children][action.node.index - 1];

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
      const newIndex = action.node.index + action.direction;
      const oldIndex = action.node.index;

      const parent = getNodeFromTree(
        getParentAddress(action.node.address),
        state.tree
      );
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
      sibling[1].children.forEach((child: Node) => {
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

export {
  createNode,
  initializeState,
  getNodeFromTree,
  getParentAddress,
  getNextParent,
  treeReducer,
  nodeToString,
};
