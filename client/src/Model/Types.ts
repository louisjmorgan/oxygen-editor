interface Node {
  name: string;
  index: number;
  address: string[];
  children: Map<string, Node>;
}

type Token = {
  x: number;
  y: number;
  value: string;
};

type AddressMapItem = {
  display: boolean;
  editName: boolean;
  editNode: boolean;
  insertTarget: "sibling" | "child";
  inputName: string;
  inputNode: string;
};

type AddressMap = Map<string, AddressMapItem>;

type LoadedTree = {
  id: number;
  user: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type State = {
  tree: Node;
  user: string;
  addressMap: AddressMap;
  focus: string[][];
  editing: {
    name: boolean;
    node: boolean;
    modal: boolean;
  };
  collapsed: boolean;
  clipboard: string;
  fetched: {
    current: number;
    trees: LoadedTree[];
  };
  errorDialog: DialogType;
};

type ACTIONTYPE =
  | { type: "initialize"; code: string }
  | { type: "load tree"; tree: LoadedTree; index: number }
  | { type: "set fetched trees"; trees: LoadedTree[] }
  | { type: "set user"; user: string }
  | { type: "undo" }
  | { type: "set error dialog"; dialog: DialogType }
  | { type: "replace state"; newState: State }
  | { type: "focus node"; address: string[] }
  | { type: "unfocus node"; address: string[] }
  | { type: "unfocus all" }
  | { type: "refocus" }
  | { type: "toggle display children"; addresses: string[][] }
  | { type: "set collapse all" }
  | { type: "delete" }
  | { type: "edit name"; isEditing: boolean }
  | { type: "set modal"; isOpen: boolean }
  | { type: "edit root name"; name: string }
  | { type: "input name"; input: string; address: string[] }
  | { type: "submit name"; node: Node }
  | { type: "edit node"; isEditing: boolean }
  | { type: "input node"; input: string; address: string[] }
  | { type: "copy node" }
  | { type: "copy address"; address: string[] }
  | {
      type: "change insert target";
      address: string[];
      target: "sibling" | "child";
    }
  | {
      type: "submit node";
      nodeString: string;
      node: Node;
      target: "sibling" | "child";
    }
  | { type: "shift sibling"; node: Node }
  | { type: "shift order"; node: Node; direction: 1 | -1 }
  | { type: "shift parent"; node: Node };

type DialogType = {
  isOpen: boolean;
  content: {
    title: string;
    text: string;
    buttonTrue: string;
    buttonFalse: string | null;
  };
  action: (shouldAct: boolean) => void;
};

type LoginError = {
  location?: string;
  msg: string;
  param: string;
  value?: string;
};
export {
  Node,
  Token,
  AddressMapItem,
  LoadedTree,
  AddressMap,
  State,
  ACTIONTYPE,
  DialogType,
  LoginError,
};
