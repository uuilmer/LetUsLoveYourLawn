import React, { Component } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default class LYLLeftMenu extends Component {
   render(){
        const buttons = [
            <Button key="one" size="large">One</Button>,
            <Button key="two" size="large">Two</Button>,
            <Button key="three" size="large">Three</Button>,
        ];
      return(
        <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
        >
            {buttons}
        </ButtonGroup>
      );
   }
}
