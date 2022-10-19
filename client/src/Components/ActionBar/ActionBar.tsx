import { Box, Button, ButtonGroup } from "@mui/material";
import { ACTIONTYPE, State } from "src/Model/Types";
import { logout } from "../../Utils/auth";
import RegisterModal from "./RegisterModal";
import SavedMenu from "./SavedMenu";
import SignInModal from "./SignInModal";
import CommandsMenu from "./CommandsMenu";
import FileMenu from "./FileMenu";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import * as React from "react";
import Logo from '../../Assets/logo512.png' 
import AlertDialog from "./AlertDialog";

const styles = {
  position: "fixed",
  top: "0%",
  left: "0",
  right: "0",
  height: "3rem",
  fontWeight: "bold",
  justifyContent: "space-between",
  background: "#11151a",
  borderRadius: 0,
  boxShadow: "1px 2px #000",
  zIndex: 5,
};

type ActionBarProps = {
  state: State;
  dispatch: (action: ACTIONTYPE) => void;
  collapseAll: () => void;
};

function ActionBar({ state, dispatch, collapseAll }: ActionBarProps) {
  const [isOpenSignIn, setOpenSignIn] = React.useState(false);
  const handleOpenSignIn = () => {
    setOpenSignIn(true);
    dispatch({
      type: "set modal",
      isOpen: true,
    });
  };
  const handleCloseSignIn = () => {
    setOpenSignIn(false);
    dispatch({
      type: "set modal",
      isOpen: false,
    });
  };

  const [isOpenRegister, setOpenRegister] = React.useState(false);
  const handleOpenRegister = () => {
    setOpenRegister(true);
    dispatch({
      type: "set modal",
      isOpen: true,
    });
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
    dispatch({
      type: "set modal",
      isOpen: false,
    });
  };

  function handleSignOut() {
    logout();
    dispatch({
      type: "set user",
      user: "",
    });
  }

  function handleCloseError() {
    dispatch({
      type: 'set error dialog',
      dialog: {
        ...state.errorDialog,
        isOpen: false,
      }
    })
  }
  return (
    <>
      <ButtonGroup
        color="secondary"
        variant="text"
        sx={{
          ...styles,
          "& button": {
            padding: "1rem",
            textTransform: "none",
            height: "100%",
          },
        }}
        disableRipple
      >
        <Box>
          <FileMenu dispatch={dispatch} state={state} />
           <CommandsMenu dispatch={dispatch} collapsed={state.collapsed} />
        </Box>
        <img style={{padding: '0.5rem'}} src={Logo} alt="logo"/>
        <Box>
          {state.user ? (
            <>
              <SavedMenu dispatch={dispatch} fetched={state.fetched} />
              <Button onClick={handleSignOut} startIcon={<LogoutIcon />}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button onClick={handleOpenSignIn} startIcon={<LoginIcon />}>
                Sign in
              </Button>
              <Button onClick={handleOpenRegister} startIcon={<HowToRegIcon />}>
                Register
              </Button>
            </>
          )}
        </Box>
      </ButtonGroup>

      <SignInModal
        open={isOpenSignIn}
        handleClose={handleCloseSignIn}
        dispatch={dispatch}
      />
      <RegisterModal
        open={isOpenRegister}
        handleClose={handleCloseRegister}
        dispatch={dispatch}
      />
      <AlertDialog dialog={state.errorDialog} handleClose={handleCloseError} />
    </>
  );
}

export default ActionBar;