import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Box } from '@mui/material';
import AppRouter from './config/AppRouter';

function App() {
  return (
    <>
    <Box sx={{backgroundColor: '#C8C8F4', height:'100vh'}}>
      <AppRouter />
    </Box>
    </>
  );
}

export default App;
