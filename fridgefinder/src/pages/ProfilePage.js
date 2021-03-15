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
          <div id='recipes'>
            <div id='recipe-row'>
              <div id='recipe-item'>
                Item 1
              </div>
              <div id='recipe-item'>
                Item 2
              </div>
              <div id='recipe-item'>
                Item 3
              </div>
            </div>
            <div id='recipe-row'>
              <div id='recipe-item'>
                Item 4
              </div>
              <div id='recipe-item'>
                Item 5
              </div>
              <div id='recipe-item'>
                Item 6
              </div>
            </div>
            <div id='recipe-row'>
              <div id='recipe-item'>
                Item 7
              </div>
              <div id='recipe-item'>
                Item 8
              </div>
              <div id='recipe-item'>
                Item 9
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default ProfilePage;
