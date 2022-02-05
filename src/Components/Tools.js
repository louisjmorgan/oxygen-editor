import React from "react";

const e = React.createElement;

const styles = {
  tools: {
    display: "flex",
    alignContent: "center",
  },

  toolButton: {
    width: "1.5em",
    cursor: "pointer",
    padding: "0 0",
    display: "inline",
    position: "relative",
    alignContent: "center",
    marginLeft: "0.5em",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    backgroundColor: "transparent",
    border: "none",
    borderRadius: "2px",
    fontFamily: "Segoe UI Symbol",
  },
};

function Tools({ showTools, editName, copyNode, pasteNode, copyAddress, deleteSelf, displayInsert }) {
  return showTools
    ? e(
        "div",
        { style: styles.tools },
        e(
          "button",
          {
            onClick: editName,
            style: {
              ...styles.toolButton,
            },
          },
          "🖉"
        ),
        e(
          "button",
          {
            onClick: copyNode,
            style: {
              ...styles.toolButton,
            },
          },
          "⎘"
        ),
        e(
          "button",
          {
            onClick: pasteNode,
            style: {
              ...styles.toolButton,
            },
          },
          "📋"
        ),
        e(
            "button",
            {
              onClick: copyAddress,
              style: {
                ...styles.toolButton,
              },
            },
            "@"
          ),
        e(
        "button",
        {
            onClick: deleteSelf,
            style: {
            ...styles.toolButton,
            },
        },
        "⌫"
        ),
        e(
          "button",
          {
            onClick: displayInsert,
            style: {
              ...styles.toolButton,
            },
          },
          "➕"
        )
      )
    : "";
}

export default Tools;
