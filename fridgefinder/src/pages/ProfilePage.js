import React from 'react';
import NavBar from '../tools/Navbar';
import { makeStyles, Grid, Card, Modal, Typography } from '@material-ui/core'
import '../CSS/ProfilePage.css';

function ProfilePage() {
  return (
    <>
      <NavBar />
      <Grid container xs={12}>
        <Grid item xs={3} id='fridge_field'>
          <Typography variant={'h5'}>My Fridge</Typography>
        </Grid>
        <Grid item xs={9} id='recipe_field'>
          <Typography variant={'h4'}>Make your Meal</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default ProfilePage;
