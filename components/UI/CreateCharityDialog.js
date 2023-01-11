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
import CreateCharity from './admincomps/CreateCharity';

export default function CreateCharityDialog() {
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
      sx={{ width: '100%' }}
      role="presentation">
        
        <div class="flex items-end ml-10px items-center mt-4">
          <ArrowBackIcon className="ml-2 cursor-pointer" onClick={toggleDrawer('right', false)}/>
          <h3 className="mb-2 text-3xl font-bold ml-2">Add A New Charity:</h3>
        </div>
        <CreateCharity/>
        
    </Box>
  )

  return (
    <div>
        <React.Fragment key='right'>
            <strong className="rounded bg-blue-500 px-3 py-1.5 gap-5 justify-end font-medium text-white cursor-pointer"
            onClick={toggleDrawer('right', true)}>
                +Create New Charity
            </strong>
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