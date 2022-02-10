/* eslint-disable default-case */
// functions to parse nodes to/from strings

function createNode(name, address = []) {
  const children = new Map();
  return { name, children, address };
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
  for (let i = index; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.x <= superToken.x) break;
    if (token.x === superToken.x + 1) {
      const sub = parseRecursive(token, tokens, node.address, i + 1);
      sub.address = [...node.address, token.value];
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
  const newNode = createNode(node.name, address);
  node.children.forEach((child) => {
    newNode.children.set(
      child.name,
      updateAddresses(child, [...address, child.name])
    );
  });
  return newNode;
}

function updateNodeInTree(node, newNode, address) {
  const search = [...address];
  if (search.length === 1) return newNode;

  // create empty node to populate from old version
  const newTree = createNode(address[0], node.address);

  // copy old tree structure, performing recursive deep copy only when address matches update
  if (search.length > 1) {
    let shouldUpdate = false;

    node.children.forEach((child, index) => {
      if (child.name === search[1] && child.name !== search[0]) {
        shouldUpdate = true;
        search.shift();
        newTree.children.set(
          child.name,
          updateNodeInTree(child, newNode, search)
        );
      } else {
        newTree.children.set(child.name, child);
      }
    });

    if (!shouldUpdate) {
      search.shift();
      newTree.children.set(newNode.name, newNode);
    }
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
  const newNode = createNode(prev.name, prev.address);
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

function createAddressMap(node, map) {
  const initial = {
    display: true,
    editName: false,
    inputName: node.name,
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
    editing: false,
  };
  return state;
}

function deleteChild(parent, child, tree) {
  const newNode = copyNode(parent);

  parent.children.forEach((c) => newNode.children.set(c.name, c));
  newNode.children.delete(child.name);
  console.log(newNode)
  return updateNodeInTree(tree, newNode, parent.address);
}

function treeReducer(state, action) {
  switch (action.type) {
    case "initialize": {
      const newState = initializeState(action.code);
      return newState;
    }

    case "set display children": {
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      newAddressMap.set(action.address.toString(), {
        ...prev,
        display: action.display,
      });
      return {
        ...state,
        addressMap: newAddressMap,
      };
    }

    case "delete child": {
      const newTree = deleteChild(action.node, action.child, state.tree);
      console.log(newTree)
      const newAddressMap = createAddressMap(newTree, new Map());
      return {
        focus: [action.node.address],
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

    case "edit name": {
      const newAddressMap = new Map(state.addressMap);
      const prev = state.addressMap.get(action.address.toString());
      newAddressMap.set(action.address.toString(), {
        ...prev,
        editName: action.edit,
      });

      return {
        ...state,
        addressMap: newAddressMap,
        editing: action.edit,
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
        editing: true,
      };
    }

    case "submit name": {
      const newName = state.addressMap.get(
        action.node.address.toString()
      ).inputName;

      const newAddress = [...action.parent.address];
      newAddress.push(newName);

      const newNode = createNode(newName, newAddress);
      action.node.children.forEach((child) =>
        newNode.children.set(child.name, child)
      );

      const tempTree = deleteChild(action.parent, action.node, state.tree)
      console.log(tempTree)
      const newTree = updateNodeInTree(
        tempTree,
        updateAddresses(newNode, newAddress),
        newAddress
      );
      const newAddressMap = createAddressMap(newTree, new Map());
      // console.log(newTree);
      console.log(newAddressMap);

      return {
        ...state,
        focus: [newAddress],
        addressMap: newAddressMap,
        tree: newTree,
        editing: false,
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

    case "paste node": {
      if (!action.nodeString) return state;
      const parsedNodes = parseNodes(`${action.nodeString}`)
        .children.values()
        .next().value;

      const search = [...action.address];
      search.push(parsedNodes.name);
      console.log(search);
      const newNode = updateAddresses(parsedNodes, search);
      const newTree = updateNodeInTree(state.tree, newNode, search);
      const newAddressMap = createAddressMap(newTree, new Map());
      return {
        ...state,
        addressMap: newAddressMap,
        tree: newTree,
      };
    }

    // case "set collapse all": {
    //   const newTree = updateChildrenVisibility(tree, action.displayChildren);
    //   return newTree;
    // }

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
  }
}

export { initializeState, getNodeFromTree, treeReducer };
