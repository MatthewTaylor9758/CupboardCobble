import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles, Card, Button, Typography, AppBar, Toolbar, Grid, Modal } from '@material-ui/core';
import '../CSS/NavBar.css';

function NavBar() {
  return (
    <>
      <AppBar id='navbar'>
        <Toolbar>
          <Grid container xs={12}>
            <Grid item xs={4} id='navbar_left'>
              This is the left side
            </Grid>
            <Grid item xs={4}>
              <NavLink to={'/'} id='navbar_logo'>FridgeFinder</NavLink>
            </Grid>
            <Grid item xs={4} id='navbar_right'>
              This is the right side
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;
