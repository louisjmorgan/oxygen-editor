import { Button, Input } from "@mui/material";
import * as React from "react";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { ACTIONTYPE, AddressMapItem, Node as NodeType } from "../Model/Types";

const styles: { [key: string]: React.CSSProperties } = {
  insertNode: {
    marginTop: "0.5em",
    background: "rgba(0, 0, 0, 0)",
    border: "none",
    outline: "none",
    color: "white",
    fontFamily: `"DejaVu Mono", monospace`,
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
    background: "transparent",
  },
};

type InsertNodeProps = {
  node: NodeType;
  dispatch: (action: ACTIONTYPE) => void;
  addressMap: AddressMapItem;
  submitInsertChild: (input: string) => void;
  submitInsertSibling: (input: string) => void;
};

const InsertNodeField = ({
  node,
  dispatch,
  addressMap,
  submitInsertChild,
  submitInsertSibling,
}: InsertNodeProps) => {
  const handleSubmit = () => {
    if (addressMap.insertTarget === "child")
      submitInsertChild(addressMap.inputNode);
    if (addressMap.insertTarget === "sibling")
      submitInsertSibling(addressMap.inputNode);
  };

  const handleCancel = () => {
    dispatch({
      type: "edit node",
      isEditing: false,
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "input node",
      address: node.address,
      input: event.target.value,
    });
  };

  return (
    <>
      {addressMap.editNode && (
        <div>
          <Input
            autoFocus
            style={{
              ...styles.insertNode,
              marginLeft: addressMap.insertTarget === "child" ? "5em" : "2rem",
            }}
            value={addressMap.inputNode}
            onChange={handleInput}
            disableUnderline
          />
          <Button
            onClick={handleSubmit}
            style={{
              ...styles.saveButton,
              marginLeft: addressMap.insertTarget === "child" ? "5em" : "2rem",
            }}
            startIcon={<SaveIcon />}
          />
          <Button
            onClick={handleCancel}
            style={{
              ...styles.saveButton,
            }}
            startIcon={<CancelIcon />}
          />
        </div>
      )}
    </>
  );
};

export default InsertNodeField;
