import { describe, expect, test } from "@jest/globals";
import { createAddressMap, treeReducer } from "../Store";
import { Node, State } from "../Types";
import {
  testAddresses,
  testAddressMap,
  testAddressMap2,
  testAddressMapItem,
  testAuthToken,
  testFetchedTrees,
  testState,
  testTree,
  testTree2,
} from "../../Utils/mocks/testObjects";

// beforeAll(() => jest.spyOn(global, 'fetch')).mockImplementation(mockFetch);

beforeEach(() => {
  jest.resetModules();
});

describe("creating address maps", () => {
  test("address map is created correctly", () => {
    expect(createAddressMap(testTree, new Map())).toStrictEqual(testAddressMap);
  });
});

describe("initializing state, fetched trees and user", () => {
  test("initializing state", () => {
    expect(
      treeReducer({} as State, {
        type: "initialize",
        code: "sibling1\n\tchild1\n\tchild2\nsibling2\n\tchild1\n\tchild2",
      })
    ).toStrictEqual(testState);
  });

  // TODO initialize empty string

  test("setting fetched trees", () => {
    expect(
      treeReducer(testState, {
        type: "set fetched trees",
        trees: testFetchedTrees,
      })
    ).toStrictEqual({
      ...testState,
      fetched: {
        current: 0,
        trees: testFetchedTrees,
      },
    });
  });

  const testStateFetched = {
    ...testState,
    fetched: {
      current: -1,
      trees: [],
    },
  };

  test("setting fetched trees empty", () => {
    expect(
      treeReducer(testState, {
        type: "set fetched trees",
        trees: [],
      })
    ).toStrictEqual(testStateFetched);
  });

  test("loading a tree", () => {
    expect(
      treeReducer(testStateFetched, {
        type: "load tree",
        tree: testFetchedTrees[1],
        index: 1,
      })
    ).toStrictEqual({
      ...testStateFetched,
      tree: testTree2,
      focus: [["root", "brother1"]],
      addressMap: testAddressMap2,
      fetched: {
        ...testStateFetched.fetched,
        current: 1,
      },
    });
  });

  test("setting user", () => {
    expect(
      treeReducer(testState, {
        type: "set user",
        user: testAuthToken,
      })
    ).toStrictEqual({
      ...testState,
      user: testAuthToken,
    });
  });
});

describe("focus is set and changed correctly", () => {
  test("focussing node", () => {
    expect(
      treeReducer(testState, {
        type: "focus node",
        address: ["root", "sibling2"],
      })
    ).toStrictEqual({
      ...testState,
      focus: [
        ["root", "sibling2"],
        ["root", "sibling1"],
      ],
    });
  });

  test("unfocussing node", () => {
    expect(
      treeReducer(
        {
          ...testState,
          focus: [
            ["root", "sibling2"],
            ["root", "sibling1"],
          ],
        },
        {
          type: "unfocus node",
          address: ["root", "sibling1"],
        }
      )
    ).toStrictEqual({
      ...testState,
      focus: [["root", "sibling2"]],
    });
  });

  test("unfocus all", () => {
    expect(
      treeReducer(
        {
          ...testState,
          focus: [
            ["root", "sibling2"],
            ["root", "sibling1"],
          ],
        },
        {
          type: "unfocus all",
        }
      )
    ).toStrictEqual({
      ...testState,
      focus: [],
    });
  });
});

describe("ui address map parameters are updated correctly", () => {
  test("toggle display children", () => {
    expect(
      treeReducer(testState, {
        type: "toggle display children",
        addresses: [["root", "sibling1"]],
      })
    ).toStrictEqual({
      ...testState,
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName: a.slice(-1)[0],
            display: a.toString().startsWith("root,sibling1") ? false : true,
          },
        ])
      ),
    });
  });

  test("collapse all", () => {
    expect(
      treeReducer(testState, {
        type: "set collapse all",
      })
    ).toStrictEqual({
      ...testState,
      collapsed: true,
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName: a.slice(-1)[0],
            display: false,
          },
        ])
      ),
    });
  });

  test("edit name", () => {
    expect(
      treeReducer(testState, {
        type: "edit name",
        isEditing: true,
      })
    ).toStrictEqual({
      ...testState,
      editing: {
        ...testState.editing,
        name: true,
      },
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName: a.slice(-1)[0],
            editName: a.toString() === "root,sibling1" ? true : false,
          },
        ])
      ),
    });
  });

  test("input name", () => {
    expect(
      treeReducer(testState, {
        type: "input name",
        input: "new sibling1",
        address: ["root", "sibling1"],
      })
    ).toStrictEqual({
      ...testState,
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName:
              a.toString() === "root,sibling1"
                ? "new sibling1"
                : a.slice(-1)[0],
          },
        ])
      ),
    });
  });

  test("edit node", () => {
    expect(
      treeReducer(testState, {
        type: "edit node",
        isEditing: true,
      })
    ).toStrictEqual({
      ...testState,
      editing: {
        ...testState.editing,
        node: true,
      },
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName: a.slice(-1)[0],
            editNode: a.toString() === "root,sibling1" ? true : false,
          },
        ])
      ),
    });
  });

  test("input node", () => {
    expect(
      treeReducer(testState, {
        type: "input node",
        input: "sibling3",
        address: ["root", "sibling2"],
      })
    ).toStrictEqual({
      ...testState,
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName: a.slice(-1)[0],
            inputNode: a.toString() === "root,sibling2" ? "sibling3" : "",
          },
        ])
      ),
    });
  });

  test("change insert target", () => {
    expect(
      treeReducer(testState, {
        type: "change insert target",
        address: ["root", "sibling1"],
        target: "child",
      })
    ).toStrictEqual({
      ...testState,
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName: a.slice(-1)[0],
            insertTarget:
              a.toString() === "root,sibling1" ? "child" : "sibling",
          },
        ])
      ),
    });
  });
});

describe("tree is updated correctly", () => {
  test("submit name", () => {
    expect(
      treeReducer(
        {
          ...testState,
          addressMap: new Map(
            testAddresses.map((a) => [
              a.toString(),
              {
                ...testAddressMapItem,
                inputName:
                  a.toString() === "root,sibling1"
                    ? "new sibling1"
                    : a.slice(-1)[0],
              },
            ])
          ),
        },
        {
          type: "submit name",
          node: testTree.children.get("sibling1") as Node,
        }
      )
    ).toStrictEqual({
      ...testState,
      focus: [["root", "new sibling1"]],
      tree: {
        ...testTree,
        children: new Map([
          [
            "new sibling1",
            {
              ...testTree.children.get("sibling1"),
              name: "new sibling1",
              address: ["root", "new sibling1"],
              children: new Map([
                [
                  "child1",
                  {
                    name: "child1",
                    address: ["root", "new sibling1", "child1"],
                    index: 0,
                    children: new Map(),
                  },
                ],
                [
                  "child2",
                  {
                    name: "child2",
                    address: ["root", "new sibling1", "child2"],
                    index: 1,
                    children: new Map(),
                  },
                ],
              ]),
            },
          ],
          ["sibling2", testTree.children.get("sibling2")],
        ]),
      },
      addressMap: new Map(
        testAddresses.map((a) => [
          a.toString().startsWith("root,sibling1")
            ? a.toString().replace("sibling1", "new sibling1")
            : a.toString(),
          {
            ...testAddressMapItem,
            inputName:
              a.slice(-1)[0] === "sibling1" ? "new sibling1" : a.slice(-1)[0],
          },
        ])
      ),
    });
  });

  test("delete", () => {
    expect(
      treeReducer(testState, {
        type: "delete",
      })
    ).toStrictEqual({
      ...testState,
      focus: [["root", "sibling2"]],
      addressMap: new Map(
        testAddresses
          .filter((a) => !a.toString().startsWith("root,sibling1"))
          .map((a) => [
            a.toString(),
            {
              ...testAddressMapItem,
              inputName: a.slice(-1)[0],
            },
          ])
      ),
      tree: {
        ...testState.tree,
        children: new Map([
          ["sibling2", { ...testTree.children.get("sibling2"), index: 0 }],
        ]),
      },
    });
  });

  test("submit node", () => {
    expect(
      treeReducer(testState, {
        type: "submit node",
        nodeString: "sibling3",
        node: testTree.children.get("sibling1") as Node,
        target: "sibling",
      })
    ).toStrictEqual({
      ...testState,
      focus: [["root", "sibling3"]],
      addressMap: new Map(
        [...testAddresses, ["root", "sibling3"]].map((a) => [
          a.toString(),
          {
            ...testAddressMapItem,
            inputName: a.slice(-1)[0],
          },
        ])
      ),
      tree: {
        ...testTree,
        children: new Map([
          ...testTree.children,
          [
            "sibling3",
            {
              name: "sibling3",
              address: ["root", "sibling3"],
              index: 2,
              children: new Map(),
            },
          ],
        ]),
      },
    });
  });
});

describe("nodes are shifted around the tree correctly", () => {
  test("shift sibling", () => {
    expect(
      treeReducer(testState, {
        type: "shift sibling",
        node: testTree.children.get("sibling2") as Node,
      })
    ).toStrictEqual({
      ...testState,
      focus: [["root", "sibling1", "sibling2"]],
      tree: {
        ...testTree,
        children: new Map([
          [
            "sibling1",
            {
              ...testTree.children.get("sibling1"),
              children: new Map([
                ...(testTree.children.get("sibling1")?.children as Map<
                  string,
                  Node
                >),
                [
                  "sibling2",
                  {
                    name: "sibling2",
                    address: ["root", "sibling1", "sibling2"],
                    index: 2,
                    children: new Map([
                      [
                        "child1",
                        {
                          name: "child1",
                          address: ["root", "sibling1", "sibling2", "child1"],
                          index: 0,
                          children: new Map(),
                        },
                      ],
                      [
                        "child2",
                        {
                          name: "child2",
                          address: ["root", "sibling1", "sibling2", "child2"],
                          index: 1,
                          children: new Map(),
                        },
                      ],
                    ]),
                  },
                ],
              ]),
            },
          ],
        ]),
      },
      addressMap: new Map(
        testAddresses
          .map((a) =>
            a.toString().startsWith("root,sibling2")
              ? ["root", "sibling1", ...a.slice(1)]
              : a
          )
          .map((a) => [
            a.toString(),
            {
              ...testAddressMapItem,
              inputName: a.slice(-1)[0],
            },
          ])
      ),
    });
  });

  test("shift sibling out of bounds fails correctly", () => {
    expect(
      treeReducer(testState, {
        type: "shift sibling",
        node: testTree.children.get("sibling1")?.children.get("child1") as Node,
      })
    ).toStrictEqual(testState);
  });

  test("shift order down", () => {
    expect(
      treeReducer(testState, {
        type: "shift order",
        node: testTree.children.get("sibling1") as Node,
        direction: 1,
      })
    ).toStrictEqual({
      ...testState,
      tree: {
        ...testTree,
        children: new Map([
          [
            "sibling2",
            {
              ...(testTree.children.get("sibling2") as Node),
              index: 0,
            },
          ],
          [
            "sibling1",
            {
              ...(testTree.children.get("sibling1") as Node),
              index: 1,
            },
          ],
        ]),
      },
    });
  });

  test("shift order down out of bounds fails correctly", () => {
    expect(
      treeReducer(testState, {
        type: "shift order",
        node: testTree.children.get("sibling2") as Node,
        direction: 1,
      })
    ).toStrictEqual(testState);
  });

  test("shift order up", () => {
    expect(
      treeReducer(testState, {
        type: "shift order",
        node: testTree.children.get("sibling2") as Node,
        direction: -1,
      })
    ).toStrictEqual({
      ...testState,
      focus: [["root", "sibling2"]],
      tree: {
        ...testTree,
        children: new Map([
          [
            "sibling2",
            {
              ...(testTree.children.get("sibling2") as Node),
              index: 0,
            },
          ],
          [
            "sibling1",
            {
              ...(testTree.children.get("sibling1") as Node),
              index: 1,
            },
          ],
        ]),
      },
    });
  });

  test("shift order up out of bounds fails correctly", () => {
    expect(
      treeReducer(testState, {
        type: "shift order",
        node: testTree.children.get("sibling1") as Node,
        direction: -1,
      })
    ).toStrictEqual(testState);
  });

  test("shift parent", () => {
    expect(
      treeReducer(testState, {
        type: "shift parent",
        node: testTree.children.get("sibling1")?.children.get("child1") as Node,
      })
    ).toStrictEqual({
      ...testState,
      focus: [["root", "child1"]],
      tree: {
        ...testTree,
        children: new Map([
          [
            "sibling1",
            {
              ...testTree.children.get("sibling1"),
              children: new Map([
                [
                  "child2",
                  {
                    ...(testTree.children
                      .get("sibling1")
                      ?.children.get("child2") as Node),
                    index: 0,
                  },
                ],
              ]),
            },
          ],
          [
            "child1",
            {
              name: "child1",
              index: 1,
              address: ["root", "child1"],
              children: new Map(),
            },
          ],
          [
            "sibling2",
            {
              ...testTree.children.get("sibling2"),
              index: 2,
            },
          ],
        ]),
      },
      addressMap: new Map(
        [
          ...testAddresses.slice(0, 2),
          testAddresses[3],
          testAddresses[2],
          ...testAddresses.slice(3),
        ]
          .map((a) =>
            a.toString() === "root,sibling1,child1" ? ["root", "child1"] : a
          )
          .map((a) => [
            a.toString(),
            {
              ...testAddressMapItem,
              inputName: a.slice(-1)[0],
            },
          ])
      ),
    });
  });

  test("shift parent to root fails correctly", () => {
    expect(
      treeReducer(testState, {
        type: "shift parent",
        node: testTree.children.get("sibling1") as Node,
      })
    ).toStrictEqual(testState);
  });
});
