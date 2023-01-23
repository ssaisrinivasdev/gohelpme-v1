
import { Box } from "@mui/system";
import React from "react";
import LaunchIcon from '@mui/icons-material/Launch';

function ApprovalButton(props) {
  return (
    <div>
      <>
        {props.value == "ApprovalsCol" && (
          <>
          <strong className="rounded bg-green-500 px-3 py-1.5 text-xs font-medium text-white">
              Approve
          </strong>
          <strong className= "rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white">
              Reject
          </strong>
        </>
        )}
      </>
      <>
      {props.value == "delete" && (
          <>
          <strong className= "rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white">
              Delete
          </strong>
        </>
        )}
      </>
      <>
        {props.value == "OpenedQuery" && (
          <strong className="rounded bg-blue-500 px-3 py-1.5 text-xs font-medium text-white">
              Opened
          </strong>
        )}
      </>
      <>
        {props.value == "InvestigatingQuery" && (
          <strong className="rounded bg-amber-500 px-3 py-1.5 text-xs font-medium text-white">
              Investigating
          </strong>
        )}
      </>
      <>
        {props.value == "CompletedQuery" && (
          <strong className="rounded bg-green-500 px-3 py-1.5 text-xs font-medium text-white">
              Completed
          </strong>
        )}
      </>
      <>
        {props.value == "createRole" && (
          <strong className="rounded bg-green-500 px-3 py-1.5 text-m font-medium text-white">
              Create
          </strong>
        )}
      </>
      <>
        {props.value == "cancel" && (
          <strong className="rounded bg-red-500 px-3 py-1.5 text-m font-medium text-white">
              Cancel
          </strong>
        )}
      </>
      <>
      {props.value == "LinkCol" && 
        (
          <LaunchIcon className="cursor-pointer"
          onClick={()=> window.open(props.link.startsWith("http")?(props.link):(`https://${props.link}`), "_blank")}
          ></LaunchIcon>
        )
      }
      </>
    </div>
  );
}

export default ApprovalButton;

