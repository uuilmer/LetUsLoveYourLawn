import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import LYLLeftMenu from './left_menu/LYLLeftMenu.js';
import { LYL_TABS, DEFAULT_TAB } from './LYLUtils.js';

export default function LYLContainer() {
   // Keep track of the currently selected tab
   const [selectedTab, setSelectedTab] = useState(DEFAULT_TAB);

   return(
      <Grid container spacing={0} height="100vh">
         <Grid container xs={2} justifyContent="center" alignItems="center">
            <LYLLeftMenu
               tabs={LYL_TABS}
               selectedTab={selectedTab}
               setSelectedTab={setSelectedTab}
            />
         </Grid>
         <Grid item xs={10}>
            {selectedTab}
         </Grid>
      </Grid>
   );
}
