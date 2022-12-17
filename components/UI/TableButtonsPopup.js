import * as React from 'react';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/base/TextareaAutosize'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box } from "@mui/system";

export default function FormDialog() {
  const [openApprove, setOpenApprove] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);

  const handleClickOpenApprove = () => {
    setOpenApprove(true);
  };
  const handleClickOpenReject = () => {
    setOpenReject(true);
  };

  const handleCloseApprove = () => {
    setOpenApprove(false);
  };
  const handleCloseReject= () => {
    setOpenReject(false);
  };

  return (
    <Box>
      {/* <ApprovalButton value="ApprovalsCol" onClick={handleClickOpen} /> */}
      <strong onClick={handleClickOpenApprove} className="rounded bg-green-500 px-3 py-1.5 text-xs font-medium text-white cursor-pointer m-1">
            Approve
      </strong>
      <strong onClick={handleClickOpenReject} className="rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white cursor-pointer m-1">
            Reject
      </strong>
      <Dialog open={openReject} onClose={handleCloseReject}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to reject this fund approval?
          </DialogContentText>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Reason"
            style={{ width: 500 }}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseReject} color='error'>Confirm</Button>
          <Button onClick={handleCloseReject} color='primary'>Cancel</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openApprove} onClose={handleCloseApprove}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure want to approve this fund approval?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseApprove} color='primary'>Confirm</Button>
          <Button onClick={handleCloseApprove} color='error'>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}