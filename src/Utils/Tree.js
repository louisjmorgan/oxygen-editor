/* eslint-disable default-case */
// functions to parse nodes to/from strings

function createNode(name, address = [], index = 0) {
  const children = new Map();
  return { name, children, index, address };
}

function parseNodes(code, rootName = "root") {
  const nodes = createNode(rootName);
  nodes.address.push(rootName);
  const tokens = parseTokens(code);
  tokens.forEach((token, index) => {
    if (token.x === 0) {
      const node = parseRecursive(token, tokens, nodes.address, index + 1);
      node.address = [...nodes.address, token.value];

      nodes.children.set(token.value, node);
    }
  });
  return nodes;
}

function parseRecursive(superToken, tokens, address, index) {
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

function parseTokens(code) {
  const lines = code.split("\n");
  const tokens = [];
  lines.forEach((line, index) => {
    const token = {
      y: index,
      x: countRepeatedCharacter(line, "\t"),
      value: line.trim("\t\n\r"),
    };
    if (token.value !== "") tokens.push(token);
  });
  return tokens;
}

function countRepeatedCharacter(line, character) {
  let x = 0;
  for (; x < line.length; x++) {
    const c = line.charAt(x);
    if (c !== character) break;
  }
  return x;
}

function nodeToString(node, depth = 0, output = "") {
  const tab = "\t";
  const indent = tab.repeat(depth);
  if (depth !== 0) output += "\n";
  output += indent + node.name;
  node.children.forEach((child) => {
    output = nodeToString(child, depth + 1, output);
  });
  return output;
}

// functions to manipulate node tree

function getNodeFromTree(address, node) {
  const search = [...address];
  if (search.length > 1) {
    search.shift();
    const result = node.children.get(search[0]);
    return getNodeFromTree(search, result);
  } else {
    return node;
  }
}

function updateAddresses(node, address) {
  const newNode = createNode(node.name, address, node.index);
  node.children.forEach((child) => {
    newNode.children.set(
      child.name,
      updateAddresses(child, [...address, child.name])
    );
  });
  return newNode;
}

function updateNodeInTree(node, newNode, address, insertionIndex = 0) {
  const search = [...address];
  if (search.length === 1) return newNode;

  // create empty node to populate from old version
  const newTree = createNode(address[0], [...node.address], node.index);

  if (search.length === 2) {
    let shouldUpdate = [...node.children].reduce((prev, child) => {
      return (child[0] === search[1] && child[0] !== search[0]) || prev;
    }, false);
    console.log(shouldUpdate);

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
        console.log(child);
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

function updateNodesInTree(tree, newNodes) {
  const newTree = newNodes.reduce((prevTree, newNode) => {
    return updateNodeInTree(prevTree, newNode, newNode.address);
  }, tree);
  return newTree;
}

function copyNode(prev) {
  const newNode = createNode(prev.name, [...prev.address], prev.index);
  return newNode;
}

function getParentAddress(address) {
  const length = address.length;
  if (length > 1) {
    const newAddress = address.filter((elem, i) => i !== length - 1);
    return newAddress;
  } else {
    return null;
  }
}

function getNextParent(node, tree) {
  console.log(node);
  const parent = getNodeFromTree(getParentAddress(node.address), tree);
  if (parent.address.toString() === "root") return [parent, node];
  if (node.index < parent.children.size - 1) return [parent, node];
  else return getNextParent(parent, tree);
}

function createAddressMap(node, map) {
  const initial = {
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

  return map;
}

function initializeState(code) {
  const tree = parseNodes(code);
  console.log(tree);
  const addressMap = createAddressMap(tree, new Map());
  console.log(addressMap);
  const state = {
    tree: tree,
    addressMap: addressMap,
    focus: [["root"]],
    editing: {
      name: false,
      node: false,
    },
    collapsed: false,
  };
  return state;
}

function deleteChild(parent, child, tree) {
  const newNode = copyNode(parent);

  const parentKeys = [...parent.children.keys()];
  const toRemove = parentKeys.indexOf(child.name);

  const parentArray = [...parent.children];
  parentArray.splice(toRemove, 1);

  parentArray.forEach((entry, index) => {
    entry[1].index = index;
    console.log(entry);
    newNode.children.set(entry[0], entry[1]);
  });
  return updateNodeInTree(tree, newNode, parent.address);
}

function collapseChildren(node, addressMap) {
  const prev = addressMap.get(node.address.toString());
  addressMap.set(node.address.toString(), {
    ...prev,
    display: false,
  });
  if (node.children.size > 0) {
    node.children.forEach((child) => {
      addressMap = collapseChildren(child, addressMap);
    });
  }
  return addressMap;
}

function treeReducer(state, action) {
  switch (action.type) {
    case "initialize": {
      const newState = initializeState(action.code);
      return newState;
    }

    case "focus node": {
      const newFocus = [...state.focus];
      newFocus.unshift(action.address);
      return {
        ...state,
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

    case "set display children": {
      let newAddressMap = new Map(state.addressMap);
      if (action.display === false) {
        newAddressMap = collapseChildren(action.node, newAddressMap);
      } else {
        const prev = state.addressMap.get(action.node.address.toString());
        newAddressMap.set(action.node.address.toString(), {
          ...prev,
          display: action.display,
        });
      }
      console.log(newAddressMap);
      let collapsed = false;
      if (action.node.address.toString()  === "root") collapsed = true;
      return {
        ...state,
        collapsed: collapsed,
        addressMap: newAddressMap,
      };
    }

    case "set collapse all": {
      console.log("collapse");
      const newAddressMap = new Map(state.addressMap);
      newAddressMap.forEach((value, address) => {
        newAddressMap.set(address, {
          ...state.addressMap.get(address),
          display: state.collapsed,
        });
      });
      console.log(state.collapsed);
      return {
        ...state,
        collapsed: !state.collapsed,
        addressMap: newAddressMap,
      };
    }

    case "delete child": {
      const newTree = deleteChild(action.node, action.child, state.tree);
      const newAddressMap = createAddressMap(newTree, new Map());
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev)
          newAddressMap.set(address, { ...state.addressMap.get(address) });
      });
      return {
        ...state,
        focus: [action.node.address],
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

    case "edit name": {
      if (action.address.toString() === "root") return state;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      newAddressMap.set(action.address.toString(), {
        ...prev,
        editName: action.edit,
      });

      return {
        ...state,
        addressMap: newAddressMap,
        editing: {
          ...state.editing,
          name: action.edit,
        },
      };
    }

    case "input name": {
      const newInput = action.input;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      newAddressMap.set(action.address.toString(), {
        ...prev,
        inputName: newInput,
      });
      console.log(newInput);
      return {
        ...state,
        addressMap: newAddressMap,
        editing: {
          ...state.editing,
          name: true,
        },
      };
    }

    case "submit name": {
      const newName = state.addressMap.get(
        action.node.address.toString()
      ).inputName;
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
      console.log(newTree);
      const newAddressMap = createAddressMap(newTree, new Map());

      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev)
          newAddressMap.set(address, { ...state.addressMap.get(address) });
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
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      newAddressMap.set(action.address.toString(), {
        ...prev,
        editNode: action.edit,
        inputNode: "",
      });

      return {
        ...state,
        addressMap: newAddressMap,
        editing: {
          ...state.editing,
          node: action.edit,
        },
      };
    }

    case "input node": {
      const newInput = action.input;
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      newAddressMap.set(action.address.toString(), {
        ...prev,
        inputNode: newInput,
      });
      return {
        ...state,
        addressMap: newAddressMap,
        editing: {
          ...state.editing,
          node: true,
        },
      };
    }

    case "copy node": {
      navigator.clipboard.writeText(nodeToString(action.node));
      return state;
    }

    case "copy address": {
      navigator.clipboard.writeText(action.address);
      return state;
    }

    case "change insert target": {
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      newAddressMap.set(action.address.toString(), {
        ...prev,
        insertTarget: action.target,
      });

      return {
        ...state,
        addressMap: newAddressMap,
      };
    }

    case "paste sibling": {
      if (!action.nodeString) return state;
      const parsedNodes = parseNodes(`${action.nodeString}`)
        .children.values()
        .next().value;
      const search = [...action.node.address];
      search.pop();
      search.push(parsedNodes.name);

      const newNode = updateAddresses(parsedNodes, search);
      const newTree = updateNodeInTree(
        state.tree,
        newNode,
        search,
        action.node.index + 1
      );

      const newAddressMap = createAddressMap(newTree, new Map());
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev)
          newAddressMap.set(address, { 
            ...state.addressMap.get(address),
            inputNode: "", 
          });
      });

      console.log(newAddressMap);
      return {
        ...state,
        focus: [search],
        editing: {
          ...state.editing,
          node: false,
        },
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

    case "paste child": {
      if (!action.nodeString) return state;
      const parsedNodes = parseNodes(`${action.nodeString}`)
        .children.values()
        .next().value;

      const search = [...action.address];
      search.push(parsedNodes.name);
      const newNode = updateAddresses(parsedNodes, search);
      const newTree = updateNodeInTree(state.tree, newNode, search);
      console.log(newTree);

      const newAddressMap = createAddressMap(newTree, new Map());
      newAddressMap.forEach((value, address) => {
        const prev = state.addressMap.get(address);
        if (prev)
          newAddressMap.set(address, { 
            ...state.addressMap.get(address),
            inputNode: "", 
          });
      });
   
      if (state.addressMap.get(action.address.toString()).display === false) {
        const prev = state.addressMap.get(action.address.toString());
        newAddressMap.set(action.address.toString(), {
          ...prev,
          inputNode: "",
          display: true,
        })
      }

      return {
        ...state,
        focus: [search],
        editing: {
          ...state.editing,
          node: false,
        },
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

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
        if (prev)
          newAddressMap.set(address, { ...state.addressMap.get(address) });
      });
      
      if (state.addressMap.get(
        sibling[1].address.toString()
      ).display === false) {
        const prev = state.addressMap.get(sibling[1].address.toString())
        newAddressMap.set(sibling[1].address.toString(), {...prev, display: true});
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
        if (prev)
          newAddressMap.set(address, { ...state.addressMap.get(address) });
      });

      return {
        ...state,
        tree: newTree,
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
        if (prev)
          newAddressMap.set(address, { ...state.addressMap.get(address) });
      });

      return {
        ...state,
        focus: [newAddress],
        tree: newTree,
        addressMap: newAddressMap,
      };
    }
  }
}

export {
  initializeState,
  getNodeFromTree,
  getParentAddress,
  getNextParent,
  treeReducer,
};
