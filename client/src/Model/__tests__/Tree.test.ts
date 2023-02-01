import { describe, expect, test } from "@jest/globals";
import {
  copyNodeWithoutChildren,
  createNode,
  deleteChild,
  getNodeFromTree,
  nodeToString,
  parseRoot,
  updateAddresses,
  updateNodeInTree,
} from "../Tree";
import { Node } from "../Types";
import { testTree } from "../../Utils/mocks/testObjects";

describe("creating and parsing nodes", () => {
  test("successfully creates a node", () => {
    expect(createNode("test", ["test"], 0)).toStrictEqual({
      name: "test",
      children: new Map(),
      index: 0,
      address: ["test"],
    });
  });

  test("correctly parses tree from string", () => {
    expect(
      parseRoot(
        "sibling1\n\tchild1\n\tchild2\nsibling2\n\tchild1\n\tchild2",
        "root"
      )
    ).toStrictEqual(testTree);
  });

  test("correctly copies node without children", () => {
    expect(copyNodeWithoutChildren(testTree)).toStrictEqual({
      ...testTree,
      children: new Map(),
    });
  });

  test("correct converts tree to string", () => {
    expect(nodeToString(testTree)).toEqual(
      `sibling1\n\tchild1\n\tchild2\nsibling2\n\tchild1\n\tchild2\n`
    );
  });
});

describe("fetching from the tree", () => {
  test("correctly fetches node from tree", () => {
    expect(
      getNodeFromTree(["root", "sibling2", "child1"], testTree)
    ).toStrictEqual({
      name: "child1",
      address: ["root", "sibling2", "child1"],
      index: 0,
      children: new Map(),
    });
  });
});

describe("updating the tree", () => {
  test("correctly inserts new node into tree", () => {
    const newNode = {
      name: "child3",
      address: ["root", "sibling2", "child3"],
      index: 2,
      children: new Map(),
    };
    expect(
      updateNodeInTree(testTree, newNode, ["root", "sibling2", "child3"], 1)
    ).toStrictEqual({
      ...testTree,
      children: new Map([
        ...testTree.children,
        [
          "sibling2",
          {
            ...testTree.children.get("sibling2"),
            children: new Map([
              [
                "child1",
                {
                  name: "child1",
                  address: ["root", "sibling2", "child1"],
                  index: 0,
                  children: new Map(),
                },
              ],
              [
                "child3",
                {
                  name: "child3",
                  address: ["root", "sibling2", "child3"],
                  index: 1,
                  children: new Map(),
                },
              ],
              [
                "child2",
                {
                  name: "child2",
                  address: ["root", "sibling2", "child2"],
                  index: 2,
                  children: new Map(),
                },
              ],
            ]),
          },
        ],
      ]),
    });
  });

  test("correctly replaces node in tree", () => {
    const newNode = {
      name: "new child 1",
      address: ["root", "sibling2", "new child 1"],
      index: 0,
      children: new Map(),
    };

    expect(
      updateNodeInTree(testTree, newNode, ["root", "sibling2", "child1"], 0)
    ).toStrictEqual({
      ...testTree,
      children: new Map([
        ...testTree.children,
        [
          "sibling2",
          {
            ...testTree.children.get("sibling2"),
            children: new Map([
              [
                "new child 1",
                {
                  name: "new child 1",
                  address: ["root", "sibling2", "new child 1"],
                  index: 0,
                  children: new Map(),
                },
              ],
              [
                "child2",
                {
                  name: "child2",
                  address: ["root", "sibling2", "child2"],
                  index: 1,
                  children: new Map(),
                },
              ],
            ]),
          },
        ],
      ]),
    });
  });

  test("correctly updates node and children addresses", () => {
    expect(
      updateAddresses(
        {
          ...(testTree.children.get("sibling2") as Node),
          name: "new sibling2",
        },
        ["root", "new sibling2"]
      )
    ).toStrictEqual({
      name: "new sibling2",
      address: ["root", "new sibling2"],
      index: 1,
      children: new Map([
        [
          "child1",
          {
            name: "child1",
            address: ["root", "new sibling2", "child1"],
            index: 0,
            children: new Map(),
          },
        ],
        [
          "child2",
          {
            name: "child2",
            address: ["root", "new sibling2", "child2"],
            index: 1,
            children: new Map(),
          },
        ],
      ]),
    });
  });

  test("correctly deletes child", () => {
    expect(
      deleteChild(
        testTree.children.get("sibling1") as Node,
        testTree.children.get("sibling1")?.children.get("child1") as Node,
        testTree
      )
    ).toStrictEqual({
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
                  name: "child2",
                  address: ["root", "sibling1", "child2"],
                  index: 0,
                  children: new Map(),
                },
              ],
            ]),
          },
        ],
        ["sibling2", testTree.children.get("sibling2")],
      ]),
    });
  });
});
