import { Box, Fab, Tooltip } from "@mui/material";
import * as React from "react";
import BuildIcon from "@mui/icons-material/Build";
import BackspaceIcon from "@mui/icons-material/Backspace";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import shortcuts from "src/Utils/shortcuts";
import { ACTIONTYPE } from "src/Model/Types";
const buttons = [
  {
    title: "Insert Node",
    icon: <AddIcon />,
    key: "newNode",
    action: "edit node",
  },
  {
    title: "Edit Name",
    icon: <EditIcon />,
    key: "editNode",
    action: "edit name",
  },
  {
    title: "Delete",
    icon: <BackspaceIcon />,
    key: "delete",
    action: "delete",
  },
  {
    title: "Copy Address",
    icon: <AlternateEmailIcon />,
    key: "copyAddress",
    action: "copy address",
  },
  {
    title: "Copy Node",
    icon: <ContentCopyIcon />,
    key: "copyNode",
    action: "copy node",
  },
  {
    title: "Paste Node",
    icon: <ContentPasteGoIcon />,
    key: "paste",
    acion: "paste node",
  },
];

type ToolMenuProps = {
  dispatch: (action: ACTIONTYPE) => void;
};

function ToolMenu({ dispatch }: ToolMenuProps) {
  const [isShowTools, setShowTools] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if ((typeof e.currentTarget.id) === ACTIONTYPE) {
      dispatch({
        type: e.currentTarget.id, 
      });
    }
  };
  const toggleTools = () => {
    setShowTools((prev) => !prev);
  };
  return (
    <Box
      sx={{
        padding: "3rem",
        position: "fixed",
        bottom: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        flexGap: "1rem",
      }}
    >
      {isShowTools ? (
        <>
          {buttons.map((button) => (
            <Tooltip
              title={`${button.title} (${shortcuts[button.key]})`}
              placement="left"
              key={button.key}
            >
              <Fab id={button.action} onClick={handleClick}>
                {button.icon}
              </Fab>
            </Tooltip>
          ))}
        </>
      ) : (
        ""
      )}
      <Fab onClick={toggleTools}>
        <BuildIcon />
      </Fab>
    </Box>
  );
}

export default ToolMenu;
