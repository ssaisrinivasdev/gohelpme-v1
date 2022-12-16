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

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 220,
      minWidth: 220,
      maxWidth: 300,
    },
    {
      field: "title",
      headerName: "Title",
      width: 220,
      minWidth: 220,
      maxWidth: 300,
    },
    {
      field: "fund_type",
      headerName: "Fund Type",
      width: 150,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "category",
      headerName: "Category",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "goal",
      headerName: "Goal",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      field: "verification_status",
      headerName: "Status",
      type: "number",
      width: 110,
      minWidth: 120,
      maxWidth: 200,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
    {
      field: "createdAt",
      headerName: "Join Date",
      width: 100,
      type: "datetime",
    },
    {
      field: "approvals",
      headerName: "Approvals",
      type: "actions",
      width: 200,
      renderCell: (params) => (
        // <Box>
        //   <Link href={"http://gohelpme.online/fundraisers/"+params.id}>Link</Link>
        // </Box>
        <ApprovalButton value="ApprovalsCol" />
      ),
    },
    {
      field: "link",
      headerName: "Link",
      type: "actions",
      renderCell: (params) => (
        // <Box>
        //   <Link href={"http://gohelpme.online/fundraisers/"+params.id}>Link</Link>
        // </Box>
        <ApprovalButton
          value="LinkCol"
          link={"http://gohelpme.online/fundraisers/" + params.id}
        />
      ),
    },
  ];

  return (
    <Box
      className="overflow-hidden scrollbar-hidden"
      sx={{
        height: 700,
        width: "100%",
      }}
    >
      {true && (
        <DataGrid
          columns={columns}
          rows={props.rows === null ? [] : props.rows}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
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
