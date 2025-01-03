import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';  // Use stable Grid
import { styled } from '@mui/material/styles';
import AppLayout from './AppLayout/AppLayout';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%', // Ensures full height for grid items
  display: 'flex',
  alignItems: 'center',  // Vertically center content
  justifyContent: 'center', // Horizontally center content
}));

function App() {
  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;