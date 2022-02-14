import React, { useState } from "react";

const e = React.createElement;

const styles = {
  insertNode: {
    marginTop: "0.5em",
  },

  saveButton: {
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
};

const InsertNodeField = ({ node, dispatch, input, active, target, submitInsertChild, submitInsertSibling }) => {

  const handleSubmit = (e) =>{
    if (target === "child") submitInsertChild(input);
    if (target === "sibling") submitInsertSibling(input);
  } 

  const handleInput = (e) => {
    dispatch({
      type: "input node",
      address: node.address,
      input: e.target.value,
    })
  };

  return active
    ? e(
        "div",
        null,
        e("input", {
          autoFocus: true,
          style: {marginLeft: target === "child" ? "6em": "2.5em" ,...styles.insertNode},
          value: input,
          onChange: handleInput,
        }),
        e(
          "button",
          {
            onClick: handleSubmit,
            style: {
              ...styles.saveButton,
            },
          },
          "💾"
        )
      )
    : null;
};

export default InsertNodeField;
