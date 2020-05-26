import React from 'react'
import ClubErrorsContainer from './ClubErrorsContainer'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ClubErrorsButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{color: "red"}}>
      FORM ERRORS
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="draggable-dialog-title"
    >
      <DialogTitle style={{ cursor: 'move'}} id="draggable-dialog-title">
        
      </DialogTitle>
      <DialogContent style={{backgroundColor: 'grey'}}>
        <DialogContentText>
          <ClubErrorsContainer/>
        </DialogContentText>
      </DialogContent>
      <DialogActions >
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default ClubErrorsButton
