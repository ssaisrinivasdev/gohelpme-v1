import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'

function CircularProgressBar(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={props.value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
       {`${Math.round(props.value)}%`}
      </Box>
    </Box>
  );
}

export default CircularProgressBar;
