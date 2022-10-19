import * as React from "react";
import NameField from "./NameField";
import InsertNodeField from "./InsertNodeField";
import {
  ACTIONTYPE,
  AddressMap,
  AddressMapItem,
  Node as NodeType,
} from "../Model/Types";
const { useState, useRef } = React;

const styles: { [key: string]: React.CSSProperties } = {
  node: {
    display: "block",
    marginLeft: "3em",
    textAlign: "left",
    transition: "0.3s ease-in",
  },

  flex: {
    display: "flex",
    height: "2em",
    alignItems: "center",
  },

  collapseChildren: {
    width: "1.5em",
    cursor: "pointer",
    padding: "0 0",
    display: "inline",
    alignContent: "center",
    marginRight: "0.5em",
    color: "white",
    fontWeight: "bold",
    fontSize: "1em",
    backgroundColor: "#282c34",
    border: "none",
    borderRadius: "2px",
    background: "transparent",
  },
};

type NodeProps = {
  node: NodeType;
  dispatch: (action: ACTIONTYPE) => void;
  addressMap: AddressMap;
  isRoot: boolean;
  findFocusIndex: (address: string[]) => number;
  focussed: number;
  visible: boolean;
  displayChildren: boolean;
  deleteFromParent: (child: NodeType) => void;
};

const Node = ({
  node,
  dispatch,
  addressMap,
  isRoot,
  findFocusIndex,
  focussed,
  visible,
  displayChildren,
  deleteFromParent,
}: NodeProps) => {
  const [tools, setTools] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (focussed !== -1 && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [focussed, node.address, node.index]);

  const toggleDisplayChildren = () => {
    dispatch({
      type: "set display children",
      node: node,
      display: !displayChildren,
    });
  };

  const focusSelf = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    if (event.currentTarget.id === "delete") return;
    dispatch({
      type: "unfocus all",
    });
    dispatch({
      type: "focus node",
      address: node.address,
    });
  };

  const deleteChild = (child: NodeType) => {
    dispatch({
      type: "delete child",
      node: node,
      child: child,
    });
  };

  const displayTools = () => {
    setTools(true);
  };

  const hideTools = () => {
    setTools(false);
  };

  const deleteSelf = () => {
    deleteFromParent(node);
  };

  const updateNodeName = () => {
    dispatch({
      type: "submit name",
      node: node,
    });
  };

  const submitInsertSibling = (input: string) => {
    if (!input) {
      dispatch({
        type: "edit node",
        address: node.address,
        edit: false,
      });
      return;
    }
    dispatch({
      type: "paste sibling",
      nodeString: input,
      node: node,
    });
  };

  const submitInsertChild = (input: string) => {
    if (!input) {
      dispatch({
        type: "edit node",
        address: node.address,
        edit: false,
      });
      return;
    }
    dispatch({
      type: "paste child",
      nodeString: input,
      address: node.address,
    });
  };
  const childNodes = [...node.children].map(
    ([name, child]: [string, NodeType]) => (
      <Node
        node={child}
        isRoot={false}
        dispatch={dispatch}
        addressMap={addressMap}
        visible={displayChildren}
        displayChildren={
          addressMap.get(child.address.toString())?.display as boolean
        }
        key={child.name}
        focussed={findFocusIndex(child.address)}
        findFocusIndex={findFocusIndex}
        deleteFromParent={deleteChild}
      />
    )
  );

  return (
    <>
      {visible && (
        <div style={styles.node}>
          <div
            ref={ref}
            style={{
              ...styles.flex,
              outline: focussed > -1 ? "solid white 1px" : "none",
              color: isRoot ? 'lightgreen' : ''
            }}
            onClick={focusSelf}
            onMouseEnter={displayTools}
            onMouseLeave={hideTools}
          >
            <button
              onClick={toggleDisplayChildren}
              style={{
                opacity: node.children.size > 0 ? 1 : 0,
                ...styles.collapseChildren,
              color: isRoot ? 'lightgreen' : 'white'

              }}
              tabIndex={-1}
            >
              {displayChildren ? "-" : "+"}
            </button>
            <NameField
              node={node}
              dispatch={dispatch}
              showTools={!isRoot && tools}
              isRoot={isRoot}
              edit={
                addressMap.get(node.address.toString())?.editName as boolean
              }
              submitEdit={updateNodeName}
              submitInsertChild={submitInsertChild}
              deleteSelf={deleteSelf}
            />
            {isRoot ? `\xa0(root)` : ''}
          </div>
          <InsertNodeField
            node={node}
            dispatch={dispatch}
            addressMap={
              addressMap.get(node.address.toString()) as AddressMapItem
            }
            submitInsertChild={submitInsertChild}
            submitInsertSibling={submitInsertSibling}
          />
          {childNodes}
        </div>
      )}
    </>
  );
};

export default Node;
