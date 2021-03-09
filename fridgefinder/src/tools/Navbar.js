import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeStyles, Card, Button, Typography, AppBar, Toolbar, Grid, Modal } from '@material-ui/core';

function NavBar() {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container xs={12}>
            <Grid item xs={4}>
              This is the left side
            </Grid>
            <Grid item xs={4}>
              <NavLink to={'/'} id='nav_logo'>FridgeFinder</NavLink>
            </Grid>
            <Grid item xs={4}>
              This is the right side
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar;
