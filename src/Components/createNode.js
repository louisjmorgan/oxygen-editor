function createNode(name = "") {
    const children = new Map();
    return { name, children };
}

export default createNode;
