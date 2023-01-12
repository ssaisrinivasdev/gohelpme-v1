import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import AlertComponent from './alertsComponent';
import SearchCharitiesList from './SearchCharitiesList';

export default function ScrollablePopup(props) {
  const [open, setOpen] = React.useState(false);
  const [withdrawals, setWithdrawals] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  async function historyHandler(fund_id){
    console.log(fund_id)

    const res = await fetch(`http://gohelpme.online/api/withdrawl/all-requests/`+fund_id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE"
      }
    });

    const response = await res.json();
    if(res.status >= 200 && res.status<=205){
      console.log(response)
      setWithdrawals(response.response.reverse())
      setIsLoading(true);
      handleClickOpen();
    }else if(res.status >= 400 && res.status<= 404){
      alert(response?.error?.toString())
    }else{
      alert("Something went wrong")
    }
  }

  async function searchCharities(){
    handleClickOpen();
  }

  return (
    <div>
      {props.from != "Charity" && <button
        onClick={()=>{historyHandler(props.fundId)}}
        type="button"
        class="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md"
      >
        History
      </button>}
      {props.from == "Charity" &&
        <div onClick={()=>{searchCharities()}}>
        <label  className="sr-only" for="message">
          {props.children==null?"Charity":props.children}
        </label>
        <input
            className="w-full rounded-lg border-gray-200 text-sm cursor-pointer"
            type="text"
            id="Select Charity"
            placeholder= {props.children==null?"Charity":props.children}
            disabled
          />
      </div>
      }
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='paper'
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        {(props.from == "Charity") ? (<DialogTitle id="scroll-dialog-title">Select Charity</DialogTitle>):
        (<DialogTitle id="scroll-dialog-title">History</DialogTitle>)}
        <DialogContent dividers={true}>
          {isLoading && (props.from != "Charity") &&
            withdrawals.map((withdrawal) => {
            return(
              <>
                  <AlertComponent status={withdrawal.withdrawl_status} 
                  reason={withdrawal.rejected_reason} 
                  amount={withdrawal.withdrawl_amount}
                  date={withdrawal.createdAt}
                  />
              </>
            )
            })
          }
          {(props.from == "Charity") && (
            <SearchCharitiesList handler = {props.handler} handlerClose={handleClose}/>
          )

          }
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}