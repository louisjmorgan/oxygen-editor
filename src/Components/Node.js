import React, { useEffect, useState, useRef } from "react";
import NameField from "./NameField";
import InsertNodeField from "./InsertNodeField";

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
	dispatch,
	visible,
	deleteFromParent,
}) => {
  const [tools, setTools] = useState(false);
  const [insert, setInsert] = useState(false);

	const toggleDisplayChildren = (e) => {
		setDisplayChildren(!node.displayChildren);
	}

	const setDisplayChildren = (displayChildren) => {
		dispatch({
			type: "set children visible",
			node: node,
			address: address,
			displayChildren: displayChildren,
		})	
	}

  const deleteChild = (child) => {
    dispatch({
			type: "delete child",
			node: node,
			address: address,
			child: child,
		})
  };

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
  };

  const updateNodeName = (input) => {
    dispatch({
			type: "update name",
			node: node,
			address: address,
			newName: input,
			})
		};

  const submitInsert = (input) => {
    if (!input) {
      hideInsert();
      return;
    }
		console.log(input)
		dispatch({
			type: "paste node",
			address: address,
			nodeString: input,
		})
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
					visible: node.displayChildren,
					dispatch: dispatch,
          deleteFromParent: deleteChild,
        },
        null
      )
    );
  });
  return visible
    ? e(
        "div",
        { style: styles.node },
        e(
          "div",
          {
            style: styles.flex,
            onMouseEnter: displayTools,
            onMouseLeave: hideTools,
            tabIndex: -1,	          
          },
          e(
            "button",
            {
              onClick: (e) => toggleDisplayChildren(),
              style: {
                opacity: node.children.size > 0 ? 1 : 0,
                ...styles.collapseChildren,
              },
							tabIndex: -1,
            },
            node.displayChildren ? "-" : "+"
          ),
          e(NameField, {
            node: node,
            address: address,
						dispatch: dispatch,
            showTools: tools,
						submitEdit: updateNodeName,
            submitInsert: submitInsert,
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
