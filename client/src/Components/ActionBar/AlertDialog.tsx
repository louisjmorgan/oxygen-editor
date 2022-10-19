import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogType } from 'src/Model/Types';
import { ButtonGroup } from '@mui/material';



export default function AlertDialog({dialog, handleClose}: {dialog: DialogType, handleClose: () => void}) {

  const actTrue = () => {
    dialog.action(true);
    handleClose()
  }

  const actFalse = () => {
    dialog.action(false);
    handleClose()
  }

  return (
      <Dialog
        open={dialog.isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {dialog.content.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {dialog.content.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{color: 'black'}}>
          <Button color="primary" variant="contained" onClick={actTrue}>{dialog.content.buttonTrue}</Button>
         {dialog.content.buttonFalse && 
         (<Button color="primary" variant="contained" onClick={actFalse} autoFocus>
            {dialog.content.buttonFalse}
          </Button>)}
        </DialogActions>
      </Dialog>
  );
}