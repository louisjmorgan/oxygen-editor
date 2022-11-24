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
    action: { type: "edit node", isEditing: true},
  },
  {
    title: "Edit Name",
    icon: <EditIcon />,
    key: "editNode",
    action: { type: "edit name", isEditing: true},
  },
  {
    title: "Delete",
    icon: <BackspaceIcon />,
    key: "delete",
    action: { type: "delete" },
  },
  {
    title: "Copy Address",
    icon: <AlternateEmailIcon />,
    key: "copyAddress",
    action: { type: "copy address" },
  },
  {
    title: "Copy Node",
    icon: <ContentCopyIcon />,
    key: "copyNode",
    action: {type: "copy node"},
  },
  {
    title: "Paste Node",
    icon: <ContentPasteGoIcon />,
    key: "paste",
    action: {type: "paste node"},
  },
];

type ToolMenuProps = {
  dispatch: (action: ACTIONTYPE) => void;
};

function ToolMenu({ dispatch }: ToolMenuProps) {
  const [isShowTools, setShowTools] = React.useState(false);

  const handleClick = (action: ACTIONTYPE) => {
      dispatch(action);
    }
    
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
              <Fab onClick={() => handleClick(button.action as ACTIONTYPE)}>
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
