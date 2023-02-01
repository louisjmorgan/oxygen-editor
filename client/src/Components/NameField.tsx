import { Button, Input } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
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
    color: "black",
    fontFamily: `"DejaVu Mono", monospace`,
  },
  token: {
    display: "inline",
    width: "100%",
    whiteSpace: "nowrap",
  },

  saveButton: {
    cursor: "pointer",
    padding: "0 0",
    display: "inline",
    color: "white",
    background: "transparent",
    border: "none",
    borderRadius: "2px",
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

const NameField = ({ node, dispatch, edit, submitEdit }: NameFieldProps) => {
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

  const cancel = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch({
      type: "edit name",
      isEditing: false,
    });
  };

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

  return (
    <div style={styles.nameField}>
      {edit ? (
        <div style={{ zIndex: 4 }}>
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
            startIcon={<SaveIcon />}
          />
          <Button
            onClick={cancel}
            style={{
              ...styles.saveButton,
            }}
            startIcon={<CancelIcon />}
          />
        </div>
      ) : (
        <p style={styles.token} onClick={focusSelf}>
          {node.name}
        </p>
      )}
    </div>
  );
};

export default NameField;
