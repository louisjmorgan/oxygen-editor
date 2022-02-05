import React, { useState } from "react";
import Tools from "./Tools";

const e = React.createElement;

const styles = {
  nameField: {
    position: "relative",
    display: "flex",
  },

  token: {
    display: "inline",
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

const NameField = ({
  node,
  address,
  showTools,
  nodeToString,
  submitEdit,
  submitInsert,
  deleteSelf,
  displayInsert,
}) => {
  const [edit, setEdit] = useState(false);
  const [input, setInput] = useState(node.name);
  //   const [copySuccess, setCopySuccess] = useState(false);

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    //   setCopySuccess(true);
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const editName = (e) => {
    setEdit(true);
  };

  const submit = (e) => {
    submitEdit(input);
    setEdit(false);
  };

  const copyNode = (e) => {
    copyToClipboard(nodeToString(node));
  };

  const pasteNode = (e) => {
    navigator.clipboard.readText().then((text) => submitInsert(text));
  };

  const copyAddress = (e) => {
    copyToClipboard(`${address}`);
  };
  return e(
    "div",
    { style: styles.nameField },
    edit
      ? e(
          "div",
          null,
          e("input", {
            style: styles.input,
            value: input,
            onChange: handleInput,
          }),
          e(
            "button",
            {
              onClick: submit,
              style: {
                ...styles.saveButton,
              },
            },
            "💾"
          )
        )
      : e("p", { style: styles.token }, `${node.name}`),

    edit
      ? ""
      : e(
          Tools,
          {
            showTools: showTools,
            editName: editName,
            copyNode: copyNode,
            pasteNode: pasteNode,
            copyAddress: copyAddress,
            deleteSelf: deleteSelf,
            displayInsert: displayInsert,
          },
          null
        )
  );
};

export default NameField;
