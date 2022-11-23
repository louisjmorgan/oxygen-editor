import { Button, Input } from "@mui/material";
import * as React from "react";
import { ACTIONTYPE, Node as NodeType } from "../Model/Types";
const { useState, useEffect } = React;

const styles: { [key: string]: React.CSSProperties } = {
  nameField: {
    position: "relative",
    display: "flex",
    
  },
  input: {
    background: "rgba(0, 0, 0, 0)",
    border: "none",
    outline: "none",
    color: "white",
    fontFamily: `"DejaVu Mono", monospace`,
  },
  token: {
    display: "inline",
    width: '100%',
    whiteSpace: 'nowrap',
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
    background: "transparent",
    border: "none",
    borderRadius: "2px",
    fontFamily: "Segoe UI Symbol",
  },
};

type NameFieldProps = {
  node: NodeType;
  dispatch: (action: ACTIONTYPE) => void;
  isRoot: boolean;
  edit: boolean;
  submitEdit: () => void;
  submitInsertChild: (input: string) => void;
};

const NameField = ({
  node,
  dispatch,
  edit,
  submitEdit,
}: NameFieldProps) => {
  const [input, setInput] = useState(node.name);

  useEffect(() => {
    setInput(() => node.name);
  }, [edit, node.name]);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => event.target.value);
    dispatch({
      type: "input name",
      address: node.address,
      input: event.target.value,
    });
  };

  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    submitEdit();
  };

  // const copyNode = () => {
  //   dispatch({
  //     type: "unfocus all",
  //   });
  //   dispatch({
  //     type: "focus node",
  //     address: node.address,
  //   });
  //   dispatch({
  //     type: "copy node",
  //   });
  // };

  const focusSelf = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    dispatch({
      type: "unfocus all",
    });
    dispatch({
      type: "focus node",
      address: node.address,
    });
  };

  // const pasteNode = () => {
  //   try {
  //     navigator.clipboard.readText().then((text) => submitInsertChild(text));
  //   } catch (err) {
  //     console.error("Unable to paste", err);
  //   }
  // };

  // const copyAddress = () => {
  //   dispatch({
  //     type: "unfocus all",
  //   });
  //   dispatch({
  //     type: "focus node",
  //     address: node.address,
  //   });
  //   dispatch({
  //     type: "copy address",
  //     address: node.address,
  //   });
  // };

  // function editNode() {
  //   dispatch({
  //     type: "edit node",
  //     address: node.address,
  //     edit: true,
  //   });
  // }

  // function editName() {
  //   dispatch({
  //     type: "edit name",
  //     address: node.address,
  //     edit: true,
  //   });
  // }

  return <div style={styles.nameField}>
    {edit ? (
      <div  style={{zIndex: 4}}>
        <Input
          autoFocus
          style={{ ...styles.input }}
          value={input}
          onChange={handleInput}
          disableUnderline
        />
        <Button
          onClick={submit}
          style={{
            ...styles.saveButton,
          }}
        >
          💾
        </Button>
      </div>
    ) : (
      <p style={styles.token} onClick={focusSelf}>{node.name}</p>
    )}
  </div>
};

export default NameField;
