import * as React from "react";
import { ACTIONTYPE, Node as NodeType} from "../Model/Types";
import Tools from "./Tools";
const { useState, useEffect } = React
const e = React.createElement;

const styles: { [key: string]: React.CSSProperties } = {
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

type NameFieldProps = {
  node: NodeType,
  dispatch: (action: ACTIONTYPE) => void,
  showTools: boolean,
  edit: boolean,
  submitEdit: () => void,
  submitInsertChild: (input: string) => void,
  deleteSelf: () => void,
}

const NameField = ({
  node,
  dispatch,
  showTools,
  edit,
  submitEdit,
  submitInsertChild,
  deleteSelf,
}: NameFieldProps) => {
  const [input, setInput] = useState(node.name);

  useEffect(() => {
    setInput(() => node.name)
  }, [edit, node.name]);
  

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => event.target.value);
    dispatch({
      type: "input name",
      address: node.address,
      input: event.target.value,
    })
  };


  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    submitEdit();
  };

  const copyNode = () => {
    dispatch({
      type: "unfocus all",
    });
    dispatch({
      type: "focus node",
      address: node.address,
    });
    dispatch({
      type: "copy node",
    });
  };

  const pasteNode = () => {
    try {
      navigator.clipboard.readText().then((text) => submitInsertChild(text));
    } catch (err) {
      console.error("Unable to paste", err)
    }
  };

  const copyAddress = () => {
    dispatch({
      type: "unfocus all",
    });
    dispatch({
      type: "focus node",
      address: node.address,
    });
    dispatch({
			type: "copy address",
      address: node.address,
    });
  };

  function editNode(){
    dispatch({
        type: "edit node",
        address: node.address,
        edit: true,
    })
  }

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
      : (<Tools 
          showTools={showTools}
          editName={editName}
          copyNode={copyNode}
          pasteNode={pasteNode}
          copyAddress={copyAddress}
          deleteSelf={deleteSelf}
          editNode={editNode}
        />)
  );
};

export default NameField;
