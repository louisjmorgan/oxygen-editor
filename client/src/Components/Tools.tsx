import * as React from "react";

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

type ToolsProps = {
  showTools: boolean,
  isRoot: boolean,
  editName: () => void,
  copyNode: () => void,
  pasteNode: () => void,
  copyAddress: () => void,
  deleteSelf: () => void,
  editNode: () => void,
}

function Tools({
  showTools,
  isRoot,
  editName,
  copyNode,
  pasteNode,
  copyAddress,
  deleteSelf,
  editNode,
}: ToolsProps) {

  return <>
  {showTools
    ? e(
        "div",
        { style: styles.tools },
        e(
          "button",
          {
            onClick: () => editName(),
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
            id: "delete",
          },
          "⌫"
        ),
        e(
          "button",
          {
            onClick: editNode,
            style: {
              ...styles.toolButton,
            },
          },
          "➕"
        )
      )
    : ""}
    </>
}

export default Tools;
