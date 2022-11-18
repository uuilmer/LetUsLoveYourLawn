import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LYLLeftMenu from './left_menu/LYLLeftMenu.js';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default class LYLContainer extends Component {
   render(){
      const item = null;
      return(
         <Grid container spacing={0} height="100vh">
            <Grid container xs={2} justifyContent="center" alignItems="center">
               <LYLLeftMenu
               />
            </Grid>
            <Grid item xs={10}>
               {"Selected page"}
            </Grid>
         </Grid>
      );
   }
}
