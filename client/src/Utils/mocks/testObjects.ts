import {
  AddressMap,
  AddressMapItem,
  LoadedTree,
  State,
} from "../../Model/Types";

const testTree = {
  address: ["root"],
  name: "root",
  index: 0,
  children: new Map([
    [
      "sibling1",
      {
        name: "sibling1",
        address: ["root", "sibling1"],
        index: 0,
        children: new Map([
          [
            "child1",
            {
              name: "child1",
              address: ["root", "sibling1", "child1"],
              index: 0,
              children: new Map(),
            },
          ],
          [
            "child2",
            {
              name: "child2",
              address: ["root", "sibling1", "child2"],
              index: 1,
              children: new Map(),
            },
          ],
        ]),
      },
    ],
    [
      "sibling2",
      {
        name: "sibling2",
        address: ["root", "sibling2"],
        index: 1,
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
};

const testTree2 = {
  address: ["root"],
  name: "tree 2",
  index: 0,
  children: new Map([
    [
      "brother1",
      {
        name: "brother1",
        address: ["root", "brother1"],
        index: 0,
        children: new Map([
          [
            "baby1",
            {
              name: "baby1",
              address: ["root", "brother1", "baby1"],
              index: 0,
              children: new Map(),
            },
          ],
          [
            "baby2",
            {
              name: "baby2",
              address: ["root", "brother1", "baby2"],
              index: 1,
              children: new Map(),
            },
          ],
        ]),
      },
    ],
    [
      "brother2",
      {
        name: "brother2",
        address: ["root", "brother2"],
        index: 1,
        children: new Map([
          [
            "baby1",
            {
              name: "baby1",
              address: ["root", "brother2", "baby1"],
              index: 0,
              children: new Map(),
            },
          ],
          [
            "baby2",
            {
              name: "baby2",
              address: ["root", "brother2", "baby2"],
              index: 1,
              children: new Map(),
            },
          ],
        ]),
      },
    ],
  ]),
};

const testAddressMapItem: AddressMapItem = {
  display: true,
  editName: false,
  editNode: false,
  insertTarget: "sibling",
  inputName: "",
  inputNode: "",
};

const testAddresses = [
  ["root"],
  ["root", "sibling1"],
  ["root", "sibling1", "child1"],
  ["root", "sibling1", "child2"],
  ["root", "sibling2"],
  ["root", "sibling2", "child1"],
  ["root", "sibling2", "child2"],
];

const testAddressMap: AddressMap = new Map(
  testAddresses.map((a) => [
    a.toString(),
    {
      ...testAddressMapItem,
      inputName: a.slice(-1)[0],
    },
  ])
);

const testAddresses2 = [
  ["root"],
  ["root", "brother1"],
  ["root", "brother1", "baby1"],
  ["root", "brother1", "baby2"],
  ["root", "brother2"],
  ["root", "brother2", "baby1"],
  ["root", "brother2", "baby2"],
];

const testAddressMap2: AddressMap = new Map(
  testAddresses2.map((a) => [
    a.toString(),
    {
      ...testAddressMapItem,
      inputName: a.slice(-1)[0] === "root" ? "tree 2" : a.slice(-1)[0],
    },
  ])
);

const testState: State = {
  tree: testTree,
  addressMap: testAddressMap,
  focus: [["root", "sibling1"]],
  editing: {
    name: false,
    node: false,
    modal: false,
  },
  collapsed: false,
  clipboard: "",
  user: "",
  fetched: {
    current: -1,
    trees: [],
  },
  errorDialog: {
    isOpen: false,
    content: {
      title: "",
      text: "",
      buttonTrue: "",
      buttonFalse: null,
    },
    action: expect.any(Function),
  },
};

const testFetchedTrees: LoadedTree[] = [
  {
    id: 1,
    user: 1,
    title: "tree 1",
    content: "sibling1\n\tchild1\n\tchild2\nsibling2\n\tchild1\n\tchild2",
    createdAt: "2022-11-24T11:14:23.959Z",
    updatedAt: "2023-01-03T13:15:21.063Z",
  },
  {
    id: 2,
    user: 1,
    title: "tree 2",
    content: "brother1\n\tbaby1\n\tbaby2\nbrother2\n\tbaby1\n\tbaby2",
    createdAt: "2022-11-24T11:36:10.612Z",
    updatedAt: "2022-11-24T11:36:10.612Z",
  },
];

const testAuthToken =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJpYXQiOjE2NzUyNjI5MTgzOTQsImV4cCI6MTY3NTI2MzAwNDc5NH0.MqisX4cGowvWOWkWPcDxbAz8kmQ8S9FOkYVAnDK73kd953iC5gcurCkBCtJ77IhrQA58O1io1vMmJw2ooCzLdWcoLLDqZmrK9TdR_8w6-FaR2Ct3Rx5Xo3FrbVjgNcLrtw-ms5kInCW8vVDfXattYAufvsCtpDKo7WxkpLZ-40MTJNsU4TnLxCvq8RLg2t5Loca3nRzAAm7OoCDK2EDtTzVpteJ5O8C-kMPyICeu5wcHarn6rDsT4602_ofW16pE7Cqez4Zmja6-WWHylqy_f7HdoOYTot4LMc2zWpozgft__lPdzJd6ENmdcyY0qS6yruHge-xOskJh6agNkc8eawomc0_W5aEts_NBqpOFBzWjnRy8QbX7uc4_vPB4iDXtkLohx0TRDlmF5HPK9ENhu7azOB6HhXickbp85_ISy__JRwiCptDLsPhQAwP694mpRVIKkQN20tS_GT4rewCBkT6lbR_PfH-32ro_KblKRGuv-tgkk4vD13vch5ILzMDKHcgrIhGGZTPvdRAxK1txlHALJZ1ErdVp8KdiEAW7P4N7Pg0Y9xlgmjcafj1L7Dhjebv-9vTro6kA4j9zMBQH1uZOle9SnX19uEVKSZfjql2ulwpmA1AejlM8o5rEGcNTOS-u2d6-WAMwH0lQMPM-mRnVa076cOMJyftSmSNXr-k";

export {
  testTree,
  testTree2,
  testAddressMapItem,
  testAddresses,
  testAddresses2,
  testAddressMap,
  testAddressMap2,
  testState,
  testFetchedTrees,
  testAuthToken,
};
