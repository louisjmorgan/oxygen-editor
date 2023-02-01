import * as React from "react";
import {
  Modal,
  Box,
  Typography,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import shortcuts from "../../Utils/shortcuts";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  overflowY: "auto",
};

const shortcutsDict = {
  global: [
    {
      key: "undo",
      description: "undo last action",
    },
    {
      key: "collapseAll",
      description: "collapse tree",
    },
  ],
  moving: [
    {
      key: "shiftUp",
      description: "shift above next sibling",
    },
    {
      key: "shiftDown",
      description: "shift below next sibling",
    },
    {
      key: "shiftLeft",
      description: "shift to parent's siblings (negative indent)",
    },
    {
      key: "shiftRight",
      description: "shift to above sibling's children (indent)",
    },
  ],
  ui: [
    {
      key: "showHide",
      description: "show/hide node's children",
    },
    {
      key: "focusParent",
      description: "shift focus to parent",
    },
    {
      key: "focusChild",
      description: "shift focus to first child",
    },
    {
      key: "focusAbove",
      description: "shift focus up to next sibling",
    },
    {
      key: "focusBelow",
      description: "shift focus down to next sibling",
    },
    {
      key: "addFocusAbove",
      description: "extend focus up to next sibling",
    },
    {
      key: "addFocusBelow",
      description: "extend focus below to next sibling",
    },
  ],
  editing: [
    {
      key: "delete",
      description: "delete node",
    },
    {
      key: "paste",
      description: "paste node(s) as children",
    },
    {
      key: "newNode",
      description: "insert new node",
    },
    {
      key: "editNode",
      description: "edit node name",
    },
    {
      key: "submit",
      description: "submit edit/new node",
    },
    {
      key: "cancel",
      description: "cancel edit/new node",
    },
    {
      key: "indent",
      description: "toggle insert as sibling/child",
    },
  ],
};

type ShortcutsProps = {
  open: boolean;
  handleClose: () => void;
};

function ShortcutsModal({ open, handleClose }: ShortcutsProps) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          fontWeight="bold"
        >
          Keyboard Shortcuts
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          fontWeight="bold"
        >
          Global:
        </Typography>
        <TableBody>
          {shortcutsDict.global.map((shortcut) => (
            <TableRow key={shortcut.key}>
              <TableCell>{shortcut.description}</TableCell>
              <TableCell>{shortcuts[shortcut.key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          fontWeight="bold"
        >
          Moving nodes:
        </Typography>
        <TableBody>
          {shortcutsDict.moving.map((shortcut) => (
            <TableRow key={shortcut.key}>
              <TableCell>{shortcut.description}</TableCell>
              <TableCell>{shortcuts[shortcut.key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          fontWeight="bold"
        >
          UI:
        </Typography>
        <TableBody>
          {shortcutsDict.ui.map((shortcut) => (
            <TableRow key={shortcut.key}>
              <TableCell>{shortcut.description}</TableCell>
              <TableCell>{shortcuts[shortcut.key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          fontWeight="bold"
        >
          Editing tree:
        </Typography>
        <TableBody>
          {shortcutsDict.editing.map((shortcut) => (
            <TableRow key={shortcut.key}>
              <TableCell>{shortcut.description}</TableCell>
              <TableCell>{shortcuts[shortcut.key]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Box>
    </Modal>
  );
}

export default ShortcutsModal;
