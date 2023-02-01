import * as React from "react";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material/";
import { ACTIONTYPE, DialogType, State } from "src/Model/Types";
import { deleteTree, updateTree } from "src/Model/Server";
import SaveAsModal from "./SaveAsModal";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import AlertDialog from "./AlertDialog";
import defaultTree from "src/Utils/defaultTree";

type FileProps = {
  dispatch: (action: ACTIONTYPE) => void;
  state: State;
};

export default function FileMenu({ dispatch, state }: FileProps) {
  const shouldHideButtonText = useMediaQuery("(min-width:600px)");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpenSaveAs, setOpenSaveAs] = React.useState(false);
  const handleOpenSaveAs = () => {
    handleClose();
    setOpenSaveAs(true);
    dispatch({
      type: "set modal",
      isOpen: true,
    });
  };
  const handleCloseSaveAs = () => {
    setOpenSaveAs(false);
    dispatch({
      type: "set modal",
      isOpen: false,
    });
  };

  function handleSave() {
    handleClose();
    if (state.fetched.current !== -1) {
      const loaded = state.fetched.trees[state.fetched.current];
      updateTree(loaded, state.tree)
        .then((res) => {
          dispatch({
            type: "set fetched trees",
            trees: res.fetched,
          });
        })
        .catch((err) => {
          console.log(err);
          dispatch({
            type: "set error dialog",
            dialog: {
              isOpen: true,
              content: {
                title: "Error",
                text: `Save tree failed. Service may be unavailable. Please try again later.`,
                buttonTrue: "Close",
                buttonFalse: null,
              },
              action: () => {
                return;
              },
            },
          });
        });
    } else {
      handleOpenSaveAs();
    }
  }

  const [dialog, setDialog] = React.useState<DialogType>({
    isOpen: false,
    content: {
      title: "",
      text: "",
      buttonTrue: "",
      buttonFalse: "",
    },
    action: (shouldAct: boolean) => null,
  });

  function handleCloseDialog() {
    setDialog((prev: DialogType) => ({
      ...prev,
      isOpen: false,
    }));
  }

  function handleDelete() {
    handleClose();
    if (state.fetched.current !== -1) {
      const loaded = state.fetched.trees[state.fetched.current];
      setDialog((prev) => ({
        isOpen: true,
        content: {
          title: `Delete ${loaded.title}`,
          text: `Are you sure want to delete ${loaded.title}?`,
          buttonTrue: "Delete",
          buttonFalse: "Cancel",
        },
        action: (shouldAct: boolean) => {
          if (shouldAct) {
            deleteTree(loaded)
              .then((res) => {
                console.log(res);
                dispatch({
                  type: "load tree",
                  tree: res.fetched[state.fetched.current - 1] || {
                    title: "(unsaved tree)",
                    content: defaultTree,
                  },
                  index: state.fetched.current - 1,
                });
                dispatch({
                  type: "set fetched trees",
                  trees: res.fetched,
                });
              })
              .catch((err) => {
                console.log(err);
                dispatch({
                  type: "set error dialog",
                  dialog: {
                    isOpen: true,
                    content: {
                      title: "Error",
                      text: `${err}`,
                      buttonTrue: "Close",
                      buttonFalse: null,
                    },
                    action: () => {
                      return;
                    },
                  },
                });
              });
          }
          return null;
        },
      }));
    } else {
      setDialog((prev) => ({
        isOpen: true,
        content: {
          title: `No tree selected`,
          text: `Please select a tree from the My Trees menu to continue.`,
          buttonTrue: "Okay",
          buttonFalse: null,
        },
        action: () => null,
      }));
    }
  }

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ borderRadius: 0 }}
        startIcon={<InsertDriveFileIcon />}
      >
        {shouldHideButtonText ? "File" : ""}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        disableScrollLock
      >
        <ButtonGroup color="primary" variant="text" orientation="vertical">
          <MenuItem>
            <Button onClick={handleOpenSaveAs} startIcon={<SaveAsIcon />}>
              Save as
            </Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={handleSave} startIcon={<SaveIcon />}>
              Save
            </Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={handleDelete} startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </MenuItem>
        </ButtonGroup>
      </Menu>
      <SaveAsModal
        state={state}
        open={isOpenSaveAs}
        handleClose={handleCloseSaveAs}
        dispatch={dispatch}
      />
      <AlertDialog dialog={dialog} handleClose={handleCloseDialog} />
    </>
  );
}
