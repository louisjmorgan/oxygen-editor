/* eslint-disable default-case */
// functions to parse nodes to/from strings

import { Node, Token } from "./Types";

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

function parseNodes(
  tokens: Token[],
  rootName: string = "root",
  depth: number = 0
) {
  const nodes = new Map();
  let orderIndex = 0;
  tokens.forEach((token, index) => {
    if (token.x === depth) {
      const node = parseRecursive(token, tokens, [rootName], index + 1);
      node.address = [rootName, token.value];
      node.index = orderIndex;
      orderIndex++;
      nodes.set(token.value, node);
    }
  });
  return nodes;
}

function parseRoot(code: string, rootName: string = "root"): Node {
  const tokens = parseTokens(code);
  const nodes = createNode(rootName, ["root"]);
  if (tokens.length !== 1) nodes.children = parseNodes(tokens, "root");
  return nodes;
}

function nodeToString(node: Node, depth = 0, output = "") {
  const tab = "\t";
  let indent = "";
  let newDepth = depth;
  if (depth > 0) {
    indent = tab.repeat(depth - 1);
  }
  if (node.address.toString() !== "root") {
    output += indent + node.name;
    output += "\n";
  }
  newDepth = depth + 1;
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
  insertionIndex = 0
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

function deleteChild(parent: Node, child: Node, tree: Node) {
  const newNode = copyNodeWithoutChildren(parent);
  const parentKeys = [...parent.children.keys()];
  const toRemove = parentKeys.indexOf(child.name);

  const parentArray = [...parent.children];
  parentArray.splice(toRemove, 1);
  parentArray.forEach((entry, index) => {
    const newChild = { ...entry[1] };
    newChild.index = index;
    newNode.children.set(entry[0], newChild);
  });
  return updateNodeInTree(tree, newNode, parent.address);
}

function copyNodeWithoutChildren(prev: Node) {
  const newNode = createNode(prev.name, [...prev.address], prev.index);
  return newNode;
}

function copyNodeWithChildren(prev: Node) {
  const newNode = createNode(prev.name, [...prev.address], prev.index);
  prev.children.forEach((child: Node) => {
    newNode.children.set(child.name, copyNodeWithChildren(child));
  });
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

export {
  createNode,
  parseRoot,
  parseTokens,
  parseNodes,
  copyNodeWithoutChildren,
  copyNodeWithChildren,
  getNodeFromTree,
  updateNodeInTree,
  updateAddresses,
  deleteChild,
  getParentAddress,
  getNextParent,
  nodeToString,
};
