import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { BiUserCircle } from 'react-icons/bi'; // Importa el ícono BiUserCircle
import { AiOutlinePicRight } from 'react-icons/ai';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          
        <Button color="inherit">
          
            <AiOutlinePicRight className="text-2xl"/>
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}/>
            
         

          
          <Button color="inherit">
          <BiUserCircle size={24} style={{ marginRight: '16px' }} /> {/* Añade el ícono antes del título */}
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
