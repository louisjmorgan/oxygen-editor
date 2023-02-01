import { getUser } from "src/Utils/auth";
import { createNode, nodeToString } from "./Tree";
import { LoadedTree, Node } from "./Types";

const api = "https://pzzw3lsaz6.execute-api.eu-west-2.amazonaws.com";

async function fetchTrees() {
  const res = await fetch(`${api}/trees`, {
    method: "GET",
    headers: {
      Authorization: getUser(),
    },
  }).then((res) => res.json());
  return res;
}

async function saveNewTree(name: string, tree: Node) {
  const newRoot = createNode(name, ["root"]);
  tree.children.forEach((child) => newRoot.children.set(child.name, child));
  const data = {
    title: name,
    content: `${nodeToString(newRoot)}`,
  };

  const saveResponse = await fetch(`${api}/trees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getUser(),
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  if (saveResponse.success === false)
    throw new Error(`Error saving tree: ${saveResponse.msg}`);

  const fetchResponse = await fetchTrees();
  if (fetchResponse.success === false)
    throw new Error(`Error saving tree: ${fetchResponse.msg}`);

  return {
    tree: saveResponse.tree,
    fetched: fetchResponse.trees,
  };
}

async function updateTree(loaded: LoadedTree, tree: Node) {
  console.log(tree);
  const data = {
    id: loaded.id,
    title: loaded.title,
    content: `${nodeToString(tree)}`,
  };

  const saveResponse = await fetch(`${api}/trees`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: getUser(),
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  if (saveResponse.success === false)
    throw new Error(`Error saving tree: ${saveResponse.msg}`);

  const fetchResponse = await fetchTrees();
  if (fetchResponse.success === false)
    throw new Error(`Error saving tree: ${fetchResponse.msg}`);
  return {
    fetched: fetchResponse.trees,
  };
}

async function deleteTree(loaded: LoadedTree) {
  const data = {
    id: loaded.id,
  };

  const deleteResponse = await fetch(`${api}/trees`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: getUser(),
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());

  if (deleteResponse.success === false)
    throw new Error(`Error saving tree: ${deleteResponse.msg}`);

  const fetchResponse = await fetchTrees();
  if (fetchResponse.success === false)
    throw new Error(`Error saving tree: ${fetchResponse.msg}`);

  return {
    fetched: fetchResponse.trees,
  };
}

export { fetchTrees, saveNewTree, updateTree, deleteTree };
