import * as React from "react";
import NameField from "./NameField";
import InsertNodeField from "./InsertNodeField";
import {
  ACTIONTYPE,
  AddressMap,
  AddressMapItem,
  Node as NodeType,
} from "../Model/Types";
const {useRef } = React;

const styles: { [key: string]: React.CSSProperties } = {
  node: {
    display: "block",
    marginLeft: "3em",
    textAlign: "left",
    transition: "0.3s ease-in",
    whiteSpace: 'nowrap',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
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
}: NodeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (focussed !== -1 && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  }, [focussed, node.address, node.index]);

  const toggleDisplayChildren = () => {
    dispatch({
      type: "toggle display children",
    });
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
      />
    )
  );

  return (
    <>
      {visible && (
        <div style={{...styles.node, width: `${node.name.length + 10}ch`}}>
          <div
            ref={ref}
            style={{
              ...styles.flex,
              // outline: focussed > -1 ? "solid white 1px" : "none",
              backgroundColor: focussed > -1 ? "white" : '',
              color: isRoot ? "lightgreen" : focussed > - 1 ? 'black' : 'white',
            }}
          >
            <button
              onClick={toggleDisplayChildren}
              style={{
                opacity: node.children.size > 0 ? 1 : 0,
                ...styles.collapseChildren,
                color: isRoot ? "lightgreen" : focussed > - 1 ? 'black' : 'white',
              }}
              tabIndex={-1}
            >
              {displayChildren ? "-" : "+"}
            </button>
            <NameField
              node={node}
              dispatch={dispatch}
              isRoot={isRoot}
              edit={
                addressMap.get(node.address.toString())?.editName as boolean
              }
              submitEdit={updateNodeName}
              submitInsertChild={submitInsertChild}
            />
            {isRoot ? `\xa0(root)` : ""}
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
