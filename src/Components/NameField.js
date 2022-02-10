import React, { useState, useRef, useEffect } from "react";
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
  dispatch,
  showTools,
  edit,
  submitEdit,
  submitInsert,
  deleteSelf,
  displayInsert,
}) => {
  const [input, setInput] = useState(node.name);

  useEffect(() => {
    setInput(() => node.name)
  }, [edit, node.name]);
  

  const handleInput = (e) => {
    setInput(() => e.target.value);
    dispatch({
      type: "input name",
      address: node.address,
      input: e.target.value,
    })
  };


  const submit = (e) => {
    submitEdit(input);
  };

  const copyNode = (e) => {
    dispatch({
      type: "copy node",
      node: node,
    });
  };

  const pasteNode = (e) => {
    navigator.clipboard.readText().then((text) => submitInsert(text));
  };

  const copyAddress = (e) => {
    dispatch({
			type: "copy address",
      address: node.address,
    });
  };

  function editName() {
    dispatch({
      type: "edit name",
      address: node.address,
      edit: true,
    })
  }

  return e(
    "div",
    { style: styles.nameField },
    edit
      ? e(
          "div",
          null,
          e("input", {
            autoFocus: true,
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
            dispatch: dispatch,
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
