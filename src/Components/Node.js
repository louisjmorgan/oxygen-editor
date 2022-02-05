import React, { useEffect, useState } from "react";
import NameField from "./NameField";
import InsertNodeField from "./InsertNodeField";
import createNode from "./createNode";

const e = React.createElement;

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

  collapseChildren: {
    width: "1.5em",
    cursor: "pointer",
    padding: "0 0",
    display: "inline",
    alignContent: "center",
    marginRight: "0.5em",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    backgroundColor: "#282c34",
    border: "none",
    borderRadius: "2px",
  },
};

const Node = ({
  node,
  address,
  active,
  collapsed,
  nodeToString,
  updateNode,
  insertNodeAsString,
  deleteFromParent,
  tabIndex,
}) => {
  const [childActive, setChildActive] = useState(true);
  const [tools, setTools] = useState(false);
  const [insert, setInsert] = useState(false);

  useEffect(() => {
    if (collapsed === true) setChildActive(false);
    if (collapsed === false) setChildActive(true);
  }, [collapsed]);

  const toggleChildren = (e) => {
    setChildActive((prev) => !prev);
  };

	const keyHandler = (e) => {
		if ((e.key) === " ") {
			e.preventDefault();
			toggleChildren();
			console.log('space')
		}
	}

  const deleteChild = (child) => {
    const newNode = createNode(node.name);
    node.children.forEach((child) =>
        newNode.children.set(child.name, child)
        );
    node.children.delete(child.name);
    updateNode(node, address)
    }

  const displayTools = (e) => {
    setTools(true);
  };

  const hideTools = (e) => {
    setTools(false);
  };

  const displayInsert = (e) => {
    setInsert(true);
  };

  const hideInsert = (e) => {
    setInsert(false);
  };

  const deleteSelf = (e) => {
      deleteFromParent(node);
  }

  const updateNodeName = (input) => {
    const newNode = createNode(input);
    node.children.forEach((child) =>
      newNode.children.set(child.name, child)
    );
    updateNode(newNode, address);
  };

  const submitInsert = (input) => {
    if (!input) {
      hideInsert();
      return;
    }
    console.log(address)
    insertNodeAsString(address, input);
    hideInsert();
  };

  const childNodes = [];
  node.children.forEach((child) => {
    childNodes.push(
      e(
        Node,
        {
          node: child,
          address: [...address, child.name],
          key: child.name,
          active: childActive,
          collapsed: collapsed,
          nodeToString: nodeToString,
          updateNode: updateNode,
          deleteFromParent: deleteChild,
          insertNodeAsString: insertNodeAsString,
          tabIndex: tabIndex + 1,
        },
        null
      )
    );
  });
  return active
    ? e(
        "div",
        { style: styles.node, },
        e(
          "div",
          {
            style: styles.flex,
            onMouseEnter: displayTools,
            onMouseLeave: hideTools,
            tabIndex: tabIndex,
						onKeyDown: (e) => keyHandler(e),
          },
          e(
            "button",
            {
              onClick: toggleChildren,
              style: {
                opacity: node.children.size > 0 ? 1 : 0,
                ...styles.collapseChildren,
              },
            },
            childActive ? "-" : "+"
          ),
          e(NameField, {
            node: node,
            address: address,
            showTools: tools,
            submitEdit: updateNodeName,
            submitInsert: submitInsert,
            nodeToString: nodeToString,
            deleteSelf: deleteSelf,
            displayInsert: displayInsert,
          })
        ),
        e(InsertNodeField, {
          active: insert,
          submitInsert: submitInsert,
        }),
        childNodes
      )
    : "";
};

export default Node;
