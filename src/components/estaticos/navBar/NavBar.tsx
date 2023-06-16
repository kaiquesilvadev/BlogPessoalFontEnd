import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
      <>
          <AppBar position="static">
              <Toolbar variant="dense">
                  <Box className='cursor' >
                      <Typography variant="h5" color="inherit">
                          BlogPessoal
                      </Typography>
                  </Box>

                  <Box display="flex" justifyContent="start">
                      <Box mx={1} className='cursor'>
                          <Typography variant="h6" color="inherit">
                              home
                          </Typography>
                      </Box>
                      <Box mx={1}className='cursor'>
                          <Typography  variant="h6" color="inherit">
                              postagens
                          </Typography>
                      </Box>
                      <Box mx={1} className='cursor'>
                          <Typography variant="h6" color="inherit">
                              temas
                          </Typography>
                      </Box>
                      <Box mx={1} className='cursor'>
                          <Typography variant="h6" color="inherit">
                              cadastrar tema
                          </Typography>
                      </Box>
                      <Box mx={1} style={{ cursor: "pointer" }}>
                        <Link to={'./login'} className='Link-logar'>
                          <Typography variant="h6" color="inherit">
                              logout
                          </Typography>
                        </Link>
                      </Box>
                  </Box>

              </Toolbar>
          </AppBar>
      </>
  )
}
export default NavBar;