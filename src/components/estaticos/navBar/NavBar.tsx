import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Blog
              </Typography>
              <Box display="flex" justifyContent="start">
                <Box mx={1}>
                Home
                </Box>
                <Box mx={1}>
                  Postagens
                </Box>
                <Box mx={1}>
                 tema
                </Box>
                <Box mx={1}>
                  cadastrar-tema
                </Box>
                <Box mx={1}>
                  logout
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </>
      );
    }

export default NavBar;