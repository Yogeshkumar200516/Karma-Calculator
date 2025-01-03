import React from 'react';
import { Stack, Box } from '@mui/material'; // Adjust import based on your UI library
import Driveweek from './Driveweek';
import Electricity from './Electricity';
import Vehicles from './Vehicles';

function Mainpage() {
  return (
    <Stack direction="row" spacing={2} sx={{ height: '100vh' }}>
      <Box flex={4}></Box>
      <Box flex={4} sx={{ backgroundColor: 'red' }}><Vehicles /></Box>
      <Box flex={4}></Box>
    </Stack>
  );
}

export default Mainpage;
