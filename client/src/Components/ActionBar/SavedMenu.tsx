import * as React from "react";
import { Button, Menu, MenuItem } from "@mui/material/";
import { ACTIONTYPE, DialogType } from "src/Model/Types";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AlertDialog from "./AlertDialog";

type Tree = {
  id: number;
  user: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

type SavedProps = {
  dispatch: (action: ACTIONTYPE) => void;
  fetched: {
    current: number,
    trees: Tree[],
  },
};

export default function SavedMenu({ dispatch, fetched }: SavedProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dialog, setDialog] = React.useState<DialogType>({
    isOpen: false,
    content: {
      title: '',
      text: '',
      buttonTrue: '',
      buttonFalse: ''
    },
    action: (shouldAct: boolean) => null,
  })

  function handleCloseDialog () {
    setDialog((prev: DialogType) => ({
      ...prev,
      isOpen: false,
    }))
  }
  
  const handleLoadTree = (tree: Tree, index: number) => {
    if (index !== fetched.current) {   
      setDialog(() => ({
          isOpen: true,
          content: {
            title: 'Switch Tree',
            text: 'Are you sure you want to switch tree? Unsaved progress on current tree will be lost.',
            buttonTrue: 'Switch',
            buttonFalse: 'Cancel',
          },
          action: (shouldAct: boolean) => {
            if (shouldAct) {
              dispatch({
                type: "load tree",
                tree: tree,
                index: index,
              });
            }
            return null;
          }
        }))
    } 
    handleClose();
  };

  
  console.log(fetched)

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ borderRadius: 0 }}
        startIcon={<AccountTreeIcon />}
      >
        {fetched.current !== -1 ? fetched.trees[fetched.current].title : 'My Trees'}
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
        {fetched.trees.map((tree, index) => (
          <MenuItem key={tree.id} onClick={() => handleLoadTree(tree, index)}>
            {tree.title}
          </MenuItem>
        ))}
      </Menu>
      <AlertDialog dialog={dialog} handleClose={handleCloseDialog} />
    </>
  );
}
