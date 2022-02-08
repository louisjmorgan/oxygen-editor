/* eslint-disable default-case */
// functions to parse nodes to/from strings

function createNode(name) {
  const children = new Map();
	const displayChildren = true;
  return { name, children, displayChildren };
}

function parseNodes(code, rootName = "root") {
  const nodes = createNode(rootName);

  const tokens = parseTokens(code);
  tokens.forEach((token, index) => {
    if (token.x === 0) {
      const node = parseRecursive(token, tokens, index + 1);
      nodes.children.set(token.value, node);
    }
  });
  return nodes;
}

function parseRecursive(superToken, tokens, index) {
  const node = createNode(superToken.value);
  for (let i = index; i < tokens.length; i++) {
    const token = tokens[i];
    if (token.x <= superToken.x) break;
    if (token.x === superToken.x + 1) {
      const sub = parseRecursive(token, tokens, i + 1);
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

function updateChildrenVisibility(node, visible) {
  const newNode = createNode(node.name);
	newNode.displayChildren = visible;
  node.children.forEach((child) => {
    newNode.children.set(child.name, updateChildrenVisibility(child, visible));
  });
  return newNode;
}

function updateNodeInTree(node, newNode, address) {
  
  const search = [...address];
  if (search.length === 1) return newNode;

  // create empty node to populate from old version
  const newTree = createNode(address[0]);

  // copy old tree structure, performing recursive deep copy only when address matches update
  if (search.length > 1) {
    let shouldUpdate = false;

    node.children.forEach((child) => {
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

function treeReducer(tree, action) {
  switch (action.type) {

    case "delete child": {
      const newNode = createNode(action.node.name);
      action.node.children.forEach((child) =>
        newNode.children.set(child.name, child)
      );
      newNode.children.delete(action.child.name);
      return updateNodeInTree(tree, newNode, action.address);
    }

    case "update name": {
      const newNode = createNode(action.newName);
      action.node.children.forEach((child) =>
        newNode.children.set(child.name, child)
      );
      return updateNodeInTree(tree, newNode, action.address);
    }

    case "copy node": {
      navigator.clipboard.writeText(nodeToString(action.node));
      return tree;
    }

		case "copy address": {
			navigator.clipboard.writeText(action.address);
			return tree;
		}

    case "paste node": {
			if (!action.nodeString) return tree;
      const newNode = parseNodes(`${action.nodeString}`)
        .children.values()
        .next().value;
      console.log(newNode);
      action.address.push(newNode.name);
      console.log(action.address);
      return updateNodeInTree(tree, newNode, action.address);
    }

    case "set collapse all": {
      const newTree = updateChildrenVisibility(tree, action.displayChildren);
      return newTree;
    }

    case "set children visible": {
			console.log(action.address)
			const newNode = updateChildrenVisibility(action.node, action.displayChildren);
			return updateNodeInTree(tree, newNode, action.address);
    }
  }
}

export { parseNodes, treeReducer };
