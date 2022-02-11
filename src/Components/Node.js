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
  dispatch,
  addressMap,
  findFocusIndex,
  parentRef,
  focussed,
  visible,
  displayChildren,
  deleteFromParent,
}) => {
  const [tools, setTools] = useState(false);

  const ref = useRef();

  useEffect(() => {
    if (focussed && parentRef) {
      // parentRef.current.focus()
    //   const y = parentRef.current.getBoundingClientRect().top;
    //   window.scrollTo({top: y, behavior: "smooth"});
    // }
    // ref.current.scrollIntoView()
    }
  }, [focussed])
  

  const toggleDisplayChildren = (e) => {
    console.log(node.address);
    dispatch({
      type: "set display children",
      address: node.address,
      display: !displayChildren,
    });
  };

  const deleteChild = (child) => {
    dispatch({
      type: "delete child",
      node: node,
      child: child,
    });
  };

  const displayTools = (e) => {
    setTools(true);
  };

  const hideTools = (e) => {
    setTools(false);
  };

  const deleteSelf = (e) => {
    deleteFromParent(node);
  };

  const updateNodeName = () => {
    dispatch({
      type: "submit name",
      node: node,
    });
    dispatch({
      type: "edit name",
      address: node.address,
      edit: false,
    });
  };

  const submitInsert = (input) => {
    if (!input) {
      dispatch({
        type: "edit node",
        address: node.address,
        edit: false,
      });
      return;
    }
    dispatch({
      type: "paste node",
      nodeString: input,
      address: node.address,
    });
    dispatch({
      type: "edit node",
      address: node.address,
      edit: false,
    });
  };

  const childNodes = [];
  node.children.forEach((child) => {
    childNodes.push(
      e(
        Node,
        {
          node: child,
          dispatch: dispatch,
          addressMap: addressMap,
          visible: displayChildren,
          parentRef: ref,
          displayChildren: addressMap.get(child.address.toString()).display,
          key: child.name,
          focussed: findFocusIndex(child.address),
          findFocusIndex: findFocusIndex,
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
            ref: ref,
            style: {
              ...styles.flex,
              outline: focussed > -1 ? "solid white 1px" : "none",
            },
            onMouseEnter: displayTools,
            onMouseLeave: hideTools,
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
            displayChildren ? "-" : "+"
          ),
          e(NameField, {
            node: node,
            dispatch: dispatch,
            showTools: tools,
            edit: addressMap.get(node.address.toString()).editName,
            submitEdit: (e) => updateNodeName(),
            submitInsert: submitInsert,
            deleteSelf: deleteSelf,
          })
        ),
        e(InsertNodeField, {
          node: node,
          dispatch: dispatch,
          active: addressMap.get(node.address.toString()).editNode,
          submitInsert: submitInsert,
        }),
        childNodes
      )
    : "";
};

export default Node;
