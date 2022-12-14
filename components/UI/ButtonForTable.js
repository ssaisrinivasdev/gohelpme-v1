
import { Box } from "@mui/system";
import React from "react";
import LaunchIcon from '@mui/icons-material/Launch';

function ApprovalButton(props) {
  return (
    <Box>
      <>
        {props.value == "ApprovalsCol" && (
          <>
          <strong
          
                className={
                  "rounded bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                }
              >
                Approve
          </strong>
          <strong
          className={
            "rounded bg-red-500 px-3 py-1.5 text-xs font-medium text-white"
          }
      >
        Reject
  </strong>
  </>
        )}
      </>
      <>
      {props.value == "LinkCol" && 
        (
          <LaunchIcon
          onClick={()=> window.open(props.link, "_blank")}
          ></LaunchIcon>
        )
      }
      </>
    
    </Box>
  );
}

export default ApprovalButton;

