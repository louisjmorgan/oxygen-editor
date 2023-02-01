import * as React from "react";
import {
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material/";
import { ACTIONTYPE } from "src/Model/Types";
import ShortcutsModal from "./ShortcutsModal";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import UndoIcon from "@mui/icons-material/Undo";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

type CommandsProps = {
  dispatch: (action: ACTIONTYPE) => void;
  collapsed: boolean;
};

export default function CommandsMenu({ dispatch, collapsed }: CommandsProps) {
  const shouldHideButtonText = useMediaQuery("(min-width:600px)");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function collapseAll() {
    dispatch({
      type: "set collapse all",
    });
  }

  const undo = () => {
    dispatch({
      type: "undo",
    });
  };

  const [isOpenShortcuts, setOpenShortcuts] = React.useState(false);
  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
    dispatch({
      type: "set modal",
      isOpen: true,
    });
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
    dispatch({
      type: "set modal",
      isOpen: false,
    });
  };

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ borderRadius: 0 }}
        startIcon={<KeyboardCommandKeyIcon />}
      >
        {shouldHideButtonText ? "Commands" : ""}
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
            <Button
              onClick={collapseAll}
              startIcon={collapsed ? <UnfoldMoreIcon /> : <UnfoldLessIcon />}
            >
              {collapsed ? "Uncollapse all" : "Collapse all"}
            </Button>
          </MenuItem>
          <MenuItem>
            <Button onClick={undo} startIcon={<UndoIcon />}>
              undo
            </Button>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={handleOpenShortcuts}
              startIcon={<KeyboardCommandKeyIcon />}
            >
              Shortcuts
            </Button>
          </MenuItem>
        </ButtonGroup>
      </Menu>
      <ShortcutsModal
        open={isOpenShortcuts}
        handleClose={handleCloseShortcuts}
      />
    </>
  );
}
