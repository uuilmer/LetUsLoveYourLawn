import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function LYLLeftMenu(props) {
    /**
     * Take the given tabs and create a button for each one
     */
    const tabButtons = props.tabs.map((tab, index) => {
        return (
            <Button
                key={index}
                size="large"
                color='success'
                variant={props.selectedTab == index ? 'outlined' : 'text'}
                onClick={() => {
                    // If we click on a tab set it as the selected tab
                    props.setSelectedTab(index);
                }}>
                {tab.name}
            </Button>
        );
    });

    return (
        <Stack
            direction="column"
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
        >
            {tabButtons}
        </Stack>
    );
}
