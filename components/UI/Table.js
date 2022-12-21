import { useEffect, useMemo, useState } from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { grey } from "@mui/material/colors";
import Button from "@mui/material";
import ApprovalButton from "./ButtonForTable";

const Funds = (props) => {
  const r = [
    {
      _id: "637b08960c069ec6c894495e",
      title: "A family who's lost her sons",
      fund_type: "Individual",
      category: "Medical",
      goal: 500000,
      createdAt: "2022-11-21T05:11:50.993Z",
      verification_status: "InProgress",
    },
  ];
  console.log("hii");
  console.log(props.rows);

  const [pageSize, setPageSize] = useState(10);
  const [rowId, setRowId] = useState(null);
  const [rows, setRows] = useState(null);
  const [isloaded, setisLoaded] = useState(false);

  // useEffect(() => {
  //   const onLoad = async () => {
  //     const res = await fetch(
  //       `http://gohelpme.online/api/admin/fund-approvals-list`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const response = await res.json();
  //     console.log(response);
  //     setRows(
  //       response.funds[0].Result?.length < 1 ? 0 : response.funds[0].Result
  //     );
  //     if (res.status <= 299) {
  //       setisLoaded(true);
  //     }
  //   };

  //   onLoad();
  // }, []);

  return (
    <Box
      sx={{
        height: 600,
        width: "95%",
      }}
    >
      {true && (
        <DataGrid
          columns={props.columns === null ? [] : props.columns}
          rows={props.rows === null ? [] : props.rows}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 0,
            bottom: params.isLastVisible ? 0 : 0,
          })}
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? grey[200] : grey[900],
            },
          }}
          onCellEditCommit={(params) => setRowId(params._id)}
        />
      )}
    </Box>
  );
};

export default Funds;
