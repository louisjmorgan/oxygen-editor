/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import Node from "./Components/Node";
import createNode from "./Components/createNode";

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
		height: '2em',
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
		marginLeft: '6em',
	},

	editableNameField: {
	},

  

  collapseAll: {
    position: "fixed",
    top: "5%",
    right: "10%",
  },
};

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [tree, setTree] = useState({});

	// functions to parse nodes to/from strings

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

	// function to manipulate node tree

  function getNodeFromTree(address, node) {
    const search = [...address];
    if (search.length > 1) {
      const result = node.children.get(search[1]);
      search.shift();
      return getNodeFromTree(search, result);
    } else {
      return node;
    }
  }

  function updateNodeInTree(node, newNode, address) {
		// create empty node to populate from old version
    const newTree = createNode(address[0]);
    const search = [...address];

		// copy old tree structure, performing recursive deep copy only when address matches update
    if (search.length > 2) {
      node.children.forEach((child) => {
        if (child.name === search[1]) {
          search.shift();
          newTree.children.set(
            child.name,
            updateNodeInTree(child, newNode, search)
          );
        } else {
          newTree.children.set(child.name, child);
        }
      });

		// insert new node as child of parent, updating existing node if necessary
    } else if (search.length === 2) {

			let shouldUpdate = false
			
			// update existing node
			node.children.forEach((child) => {
				if (child.name === search[1]) {
					shouldUpdate = true;
					search.shift();
					newTree.children.set(
						newNode.name,
						newNode
					);
				} else {
					newTree.children.set(child.name, child);
				}
			})
			
			// add new node if address doesn't match existing node
			if (!shouldUpdate) {
				search.shift();
				newTree.children.set(newNode.name, newNode);
			}
		}
    return newTree;
  }

	// data update event handlers 

	const updateNode = (node, address) => {
		const newTree = updateNodeInTree(tree, node, address);
		setTree(() => newTree);
	}

  const updateNodeName = (node, address, newName) => {
    const newNode = createNode(newName);
    node.children.forEach((child) =>
      newNode.children.set(child.name, child)
    );
    updateNode(newNode, address);
  };

	const insertNodeAsString = (address, input) => {
		const newNode = parseNodes(`${input}`).children.values().next().value;
		address.push(newNode.name)
		console.log(address)
		const newTree = updateNodeInTree(tree, newNode, address);
		setTree(() => newTree);
	}

	// ui handlers

	const [collapsed, setCollapse] = useState(false);

	function collapseAll() {
    setCollapse((prev) => !prev);
  }

	// initialize from string

	useEffect(() => {
    const tree = parseNodes(code);
    console.log(tree);
    setTree(() => tree);
    setLoaded(true);
  }, []);


  return (
    <div className="App">
      <main className="App-main">
        {e(
          "button",
          { onClick: collapseAll, style: styles.collapseAll },
          "collapse all"
        )}
        {isLoaded
          ? e(Node, {
              node: tree,
              address: ["root"],
              active: true,
              collapsed: collapsed,
              nodeToString: nodeToString,
              updateNode: updateNode,
							insertNodeAsString: insertNodeAsString,
							tabIndex: 1,
            })
          : ""}
      </main>
    </div>
  );
}

export default App;
