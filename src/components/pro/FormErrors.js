import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const FormErrors = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };
    
    const errors = (errorArray, errorKeys) => {
        return (
            <ul style={{listStyle: "none"}}>
                {errorKeys.map(key => {
                    return(
                      <li style={{color: "#c62828"}}>{key.replace("_", " ")}: {errorArray[key]}</li>
                      )
                })}
            </ul>
        )
    }

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
      <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
        
      </DialogTitle>
      <DialogContent style={{backgroundColor: 'grey'}}>
        <DialogContentText>
        <div>
        {errors(props.errors, Object.keys(props.errors))}
      </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default FormErrors
