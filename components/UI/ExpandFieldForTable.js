import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/system";
import LaunchIcon from '@mui/icons-material/Launch';

export default function ExpandFieldForTable(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      {/* <ApprovalButton value="ApprovalsCol" onClick={handleClickOpen} /> */}
      <strong className="px-3 py-1.5 font-medium m-1">
      {(props.param).substring(0,10)+"..."}
      <LaunchIcon className="cursor-pointer" onClick={handleClickOpen}></LaunchIcon>
      </strong>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Description</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {props.param}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}