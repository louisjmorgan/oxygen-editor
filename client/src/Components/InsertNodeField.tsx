import * as React from "react";
import { ACTIONTYPE, AddressMapItem, Node as NodeType } from "../Model/Types";

const e = React.createElement;

const styles: { [key: string]: React.CSSProperties } = {
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

type InsertNodeProps = {
  node: NodeType,
  dispatch: (action: ACTIONTYPE) => void,
  addressMap: AddressMapItem,
  submitInsertChild: (input: string) => void,
  submitInsertSibling: (input: string) => void,
}

const InsertNodeField = ({ node, dispatch, addressMap, submitInsertChild, submitInsertSibling }: InsertNodeProps) => {

  const handleSubmit = () =>{
    if (addressMap.insertTarget === "child") submitInsertChild(addressMap.inputNode);
    if (addressMap.insertTarget === "sibling") submitInsertSibling(addressMap.inputNode);
  } 

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "input node",
      address: node.address,
      input: event.target.value,
    })
  };

  return <>
  {addressMap.editNode && 
      e(
        "div",
        null,
        e("input", {
          autoFocus: true,
          style: {marginLeft: addressMap.insertTarget === "child" ? "6em": "2.5em" ,...styles.insertNode},
          value: addressMap.inputNode,
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
      )}
    </>
};

export default InsertNodeField;
