interface Node {
  name: string,
  index: number,
  address: string[],
  children: Map<string, Node>
}

type Token = {
  x: number;
  y: number;
  value: string;
}

type AddressMapItem = {
  display: boolean,
  editName: boolean,
  editNode: boolean,
  insertTarget: "sibling" | "child"
  inputName: string,
  inputNode: string,
}

type AddressMap = Map<string, AddressMapItem>

type State = {
  tree: Node,
  addressMap: AddressMap,
  focus: string[][],
  editing: {
    name: boolean,
    node: boolean,
  }
  collapsed: boolean,
  clipboard: string,
}

type ACTIONTYPE =
  { type: "initialize"; code: string }
  | { type: "undo"}
  | { type: "replace state"; newState: State }
  | { type: "focus node"; address: string[] }
  | { type: "unfocus node"; address: string[] }
  | { type: "unfocus all"}
  | { type: "set display children"; display: boolean; node: Node }
  | { type: "set collapse all"; displayChildren: boolean }
  | { type: "delete child"; node: Node, child: Node }
  | { type: "edit name"; address: string[]; edit: boolean }
  | { type: "input name"; input: string; address: string[]}
  | { type: "submit name"; node: Node }
  | { type: "edit node"; address: string[]; edit: boolean}
  | { type: "input node"; input: string; address: string[]}
  | { type: "copy node"; }
  | { type: "copy address"; address: string[]}
  | { type: "change insert target"; address: string[]; target: "sibling" | "child"}
  | { type: "paste sibling"; nodeString: string; node: Node }
  | { type: "paste child"; nodeString: string; address: string[]}
  | { type: "shift sibling"; node: Node}
  | { type: "shift order"; node: Node; direction: 1 | -1 }
  | { type: "shift parent"; node: Node; }

  export { Node, Token, AddressMapItem, AddressMap, State, ACTIONTYPE}
