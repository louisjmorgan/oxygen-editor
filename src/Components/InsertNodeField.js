import React, { useState } from "react";

const e = React.createElement;

const styles = {
  insertNode: {
    marginLeft: "6em",
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

const InsertNodeField = ({ node, dispatch, active, submitInsert }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(() => e.target.value);
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
        e("textarea", {
          autoFocus: true,
          style: styles.insertNode,
          value: input,
          onChange: handleInput,
        }),
        e(
          "button",
          {
            onClick: (e) => submitInsert(input),
            style: {
              ...styles.saveButton,
            },
          },
          "💾"
        )
      )
    : "";
};

export default InsertNodeField;
