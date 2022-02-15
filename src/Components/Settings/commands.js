const commands = {
    // global functionality
    undo: "Control,z",
    collapseAll: "Control, ",

    // moving nodes around
    shiftUp: "Alt,ArrowUp",
    shiftDown: "Alt,ArrowDown",
    shiftLeft: "Alt,ArrowLeft",
    shiftRight: "Alt,ArrowRight",

    // ui
    showHide: " ",
    focusParent: "ArrowLeft",
    focusChild: "ArrowRight",
    focusAbove: "ArrowUp",
    focusBelow: "ArrowDown",

    // deleting, editing and inserting nodes
    delete: "Backspace",
    paste: "v",
    newNode: "Enter",
    editNode: "e",

    //copying
    copyNode: "c",
    copyAddress: "a",

    // while editing
    submit: "Enter",
    cancel: "Escape",
    indent: "Tab",

}
export default commands