import React from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';

const Alert = ({ title, isOpen = false, onClose: handleClose }) => (
  <Dialog
    open={isOpen}
    onClose={handleClose}
    aria-labelledby={'alert-dialog-title'}
    aria-describedby={'alert-dialog-description'}
  >
    <DialogTitle id={'alert-dialog-title'}>{title}</DialogTitle>
    <DialogActions>
      <Button onClick={handleClose} color={'primary'} autoFocus>
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default Alert;
