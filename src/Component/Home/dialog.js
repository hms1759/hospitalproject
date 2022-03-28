import  React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

 function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        <div className="tryDiag">
      <a variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </a></div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
      
        <DialogContent >
        <div className='select_container'>
        <a className='instruct'>Will you like to Notify your Personal <br/> Doctor about this ? </a>
        <div className='btn_selection'>
          <a href="/signIn"  className='dia_yes dia'> Yes</a>
         <a href="/diagnose" className='dia_No dia'> No </a> 
        </div>
        </div>

        </DialogContent>
      
      </Dialog>
    </div>
  );
}
export default AlertDialog;