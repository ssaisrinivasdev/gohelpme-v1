import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import ApprovalButton from './ButtonForTable';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { handler } from 'tailwind-scrollbar-hide';
import CreateBlog from './admincomps/CreateBlog';

export default function CreateRoleDialog() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handler = async (data) =>{
    const res = await fetch(
        `http://gohelpme.online/api/admin/fund-approvals-list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
    const response = await res.json();
  }

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  const createRole = (anchor)=>(
    <Box
      sx={{ width: 'auto' }}
      role="presentation">
        
        <div class="flex items-end ml-10px">
          <ArrowBackIcon  onClick={toggleDrawer('right', false)}/>
          <h3 class="mb-2 text-3xl font-bold">Add A New Role</h3>
        </div>
        <>
          <div>
              <label class="text-gray-700" for="username">Email</label>
              <div class="flex content-center">
                <input id="username" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"/>
                <label className="text-gray-700 " for="username">@admin.com</label>
              </div>
              <h2>Select role</h2>
              <div>
                <input type="checkbox" name="financial_status" value="financial_status"/><span>Financial Status</span>
                <input type="checkbox" name="fund_approval" value="fund_approval"/><span>Fund Approval</span>
                <input type="checkbox" name="withdrawal_requests" value="withdrawal_requests"/><span>Withdrawl Requests</span>
                <input type="checkbox" name="blog" value="blog"/><span>Blog</span>
                <input type="checkbox" name="Queries" value="queries"/><span>Queries</span>
                <input type="checkbox" name="Roles" value="roles"/><span>Roles</span>
              </div>  
            <div className="flex">
                <div onClick={handler()}>
                    <ApprovalButton value ="createRole" className="m-6"/>
                </div>
                <div onClick={toggleDrawer('right', false)}>
                    <ApprovalButton value ="cancel" className="m-6"/>
                </div>
              </div>
          </div>
        </>
        <CreateBlog/>
        
    </Box>
  )

  return (
    <div>
        <React.Fragment key='right'>
            <Button onClick={toggleDrawer('right', true)}>Open</Button>
            <SwipeableDrawer
                anchor='right'
                open={state['right']}
                onClose={toggleDrawer('right', false)}
                onOpen={toggleDrawer('right', true)}
                >
                {createRole('right')}
            </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}