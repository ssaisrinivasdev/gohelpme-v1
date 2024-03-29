import * as React from "react";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/system";
import { useForm } from "react-hook-form";

export default function FormDialog(data) {
  const [openApprove, setOpenApprove] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [openPay, setOpenPay] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const handleClickOpenApprove = () => {
    setOpenApprove(true);
  };
  const handleClickOpenReject = () => {
    setOpenReject(true);
  };  
  const handleClickOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleClickOpenPay = () => {
    setOpenPay(true);
  }

  const handleCloseApprove = () => {
    setOpenApprove(false);
  };
  const handleCloseReject = () => {
    setOpenReject(false);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };
  const handleClosePay = () => {
    setOpenPay(false);
  };

  async function withdrawlStatusUpdationR(formData) {
    let apiBaseUri =
      "http://gohelpme.online/api/" +
      "withdrawl/update-request-status/" +
      data.id;

    const res = await fetch(apiBaseUri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      },
      body: JSON.stringify({
        ...formData,
        withdrawl_status: "Rejected",
      }),
    });

    const response = await res.json();
    console.log(response);

    setOpenReject(false);
  }

  async function withdrawlStatusUpdationA(formData) {
    let apiBaseUri =
      "http://gohelpme.online/api/" +
      "withdrawl/update-request-status/" +
      data.id;

    const res = await fetch(apiBaseUri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      },
      body: JSON.stringify({
        withdrawl_status: "Approved",
        rejected_reason: "",
      }),
    });

    const response = await res.json();
    console.log(response);

    setOpenApprove(false);
  }

  async function fundApprovalStatusUpdationR(formData) {
    console.log(formData.rejected_reason);
    let apiBaseUri =
      "http://gohelpme.online/api/" + "update-fund-request/" + data.id;

    const res = await fetch(apiBaseUri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      },
      body: JSON.stringify({
        ...formData,
        verification_status: "Rejected",
        rejection_reson: formData.rejected_reason,
      }),
    });

    const response = await res.json();
    console.log(response);

    setOpenReject(false);
  }

  async function fundApprovalStatusUpdationA(formData) {
    let apiBaseUri =
      "http://gohelpme.online/api/" + "update-fund-request/" + data.id;

    const res = await fetch(apiBaseUri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      },
      body: JSON.stringify({
        verification_status: "Approved",
        rejected_reason: "",
      }),
    });

    const response = await res.json();
    console.log(response);

    setOpenApprove(false);
  }

  async function CharitiesWithdrawalStatusA(formData) {
    let apiBaseUri =
      "http://gohelpme.online/api/" + "withdrawl/update-charity/" + data.id;

    const res = await fetch(apiBaseUri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      }
    });

    const response = await res.json();
    if (res.status >= 200 && res.status <= 205) {
      alert("Approved Successfully!")
    }else if(res.status == 400){
      alert(response.message+" : "+ response.error)
    }

    setOpenApprove(false);
  }

  async function CharitiesPaymentA() {
    
    let apiBaseUri =""
    if(data.status == "CharitiesWithdrawalPayment"){
      apiBaseUri = "http://gohelpme.online/api/" + "charity-payment-address/" + data.id;
    }else if(data.status == "CharitiesFundWithdrawalPayment"){
      apiBaseUri = "http://gohelpme.online/api/" + "fund-payment-address/" + data.id;
    }      

    const res = await fetch(apiBaseUri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      }
    });

    const response = await res.json();
    if (res.status >= 200 && res.status <= 205) {
      open(response.paypal)
    }else if(res.status == 400){
      alert(response.message+" : "+ response.error)
    }

    setOpenPay(false);
  }

  function open(url) {
    url = url.startsWith("http")?(url):(`https://${url}`);
    const win = window.open(url, '_blank');
    if (win != null) {
      win.focus();
    }
  }

  async function CharitiesDeletionA() {
    let apiBaseUri =
      "http://gohelpme.online/api/" + "delete-charity/" + data.id;

    const res = await fetch(apiBaseUri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, DELETE",
      }
    });

    const response = await res.json();
    if (res.status >= 200 && res.status <= 205) {
      alert("Deleted Successfully!")
    }else if(res.status == 400){
      alert(response.message+" : "+ response.error)
    }

    setOpenDelete(false);
  }

  async function handlRejectionConfirm(formData) {
    console.log(formData);
    console.log(data.status);

    switch (data.status) {
      case "withdrawalVerificationStatus":
        withdrawlStatusUpdationR(formData);
        break;
      case "fundApprovalStatus":
        fundApprovalStatusUpdationR(formData);
        break;
    }
  }


  async function handlApproveConfirm(formData) {
    console.log(formData);
    console.log(data.status);

    switch (data.status) {
      case "withdrawalVerificationStatus":
        withdrawlStatusUpdationA(formData);
        break;
      case "fundApprovalStatus":
        fundApprovalStatusUpdationA(formData);
        break;
      case "CharitiesWithdrawalStatus":
        CharitiesWithdrawalStatusA(formData);
        break;
    }
  }

  async function handleDeleteConfirm() {
    console.log(data.status);

    switch (data.status) {
      case "CharitiesDeletion":
        CharitiesDeletionA();
        break;
    }
  }
  async function handlePayConfirm() {
    console.log(data.status);

    switch (data.status) {
      case "CharitiesWithdrawalPayment":
      case "CharitiesFundWithdrawalPayment":
        CharitiesPaymentA();
        break;
    }
  }

  return (
    <Box>
      {/* <ApprovalButton value="ApprovalsCol" onClick={handleClickOpen} /> */}
      {data?.statusValue == "InProgress" || data?.statusValue == "Requested" ? (
        <>
          <strong
            onClick={handleClickOpenApprove}
            className="rounded bg-green-500 px-3 py-1.5 text-xs font-medium text-white cursor-pointer m-1"
          >
            Approve
          </strong>
          {data.status!="CharitiesWithdrawalStatus" &&
          <strong
            onClick={handleClickOpenReject}
            className="rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white cursor-pointer m-1"
          >
            Reject
          </strong>}
        </>
      ) : (
        ""
      )}
      {data?.statusValue == "Rejected" ? (
        <>
          <strong className="rounded border-2 border-rose-500 px-3 py-1.5 text-xs font-medium text-rose-500 m-1">
            Rejected
          </strong>
        </>
      ) : (
        ""
      )}
      {data?.statusValue == "Delete" ? (
        <>
          <strong 
           onClick={handleClickOpenDelete}
           className="rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white cursor-pointer m-1">
            Delete
          </strong>
        </>
      ) : (
        ""
      )}
      {data?.statusValue == "Payment" ? (
        <>
          <strong 
           onClick={handleClickOpenPay}
           className="rounded bg-blue-600 px-3 py-1.5 text-xs font-medium text-white cursor-pointer m-1">
            Pay
          </strong>
        </>
      ) : (
        ""
      )}
      {data?.statusValue == "Approved" ? (
        <>
          <strong className="rounded border-2 border-green-500 px-3 py-1.5 text-xs font-medium text-green-500 m-1">
            Approved
          </strong>
        </>
      ) : (
        ""
      )}

      {/* -----------Rejection Happens here------------- */}
      <form>
        <Dialog open={openReject} onClose={handleCloseReject}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure want to reject this?
            </DialogContentText>
            <TextareaAutosize
              {...register("rejected_reason")}
              aria-label="minimum height"
              minRows={3}
              placeholder="Reason"
              style={{ width: 500 }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(handlRejectionConfirm)} color="error">
              Confirm
            </Button>
            <Button onClick={handleCloseReject} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>

      {/* ---------------Approval Happens here ---------------- */}
      <form>
        <Dialog open={openApprove} onClose={handleCloseApprove}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure want to approve this?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(handlApproveConfirm)} color="primary">
              Confirm
            </Button>
            <Button onClick={handleCloseApprove} color="error">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>

      {/* ---------------Deletion Happens here ---------------- */}
      <form>
        <Dialog open={openDelete} onClose={handleCloseDelete}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure want to delete this?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(handleDeleteConfirm)} color="primary">
              Confirm
            </Button>
            <Button onClick={handleCloseDelete} color="error">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>

       {/* ---------------Payment Link Generation Happens here ---------------- */}
       <form>
        <Dialog open={openPay} onClose={handleClosePay}>
          <DialogTitle>Confirmation</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure want to delete this?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSubmit(handlePayConfirm)} color="primary">
              Payment
            </Button>
            <Button onClick={handleClosePay} color="error">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Box>
  );
}
