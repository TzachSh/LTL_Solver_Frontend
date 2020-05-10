import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Paper } from '@material-ui/core';
import { BarChart, PersonPin, Layers } from '@material-ui/icons'
import { useSelector, useDispatch } from 'react-redux';
import { changeTab } from '../redux/actions/tabsActions';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    tabs: {
        textTransform: 'none',
    },
    iconAlignment: {
        verticalAlign: 'bottom',
        marginRight: 5,
    }
});

export function TabsMenu() {
    const classes = useStyles();
    const value = useSelector(state => state.tabs.view);
    const dispatch = useDispatch();

    const handleChange = (event, newValue) => {    
        if (value === newValue) 
        {
            return;
        }
        dispatch(changeTab(newValue));
    };

    return (
        <Paper square className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
                textColor="secondary"
            >
                <Tab className={classes.tabs} label={<div><Layers className={classes.iconAlignment} />Run Algorithm</div>} />
                <Tab className={classes.tabs} label={<div><BarChart className={classes.iconAlignment} />Experiments</div>} />
                <Tab className={classes.tabs} label={<div><PersonPin className={classes.iconAlignment} />About</div>} />
            </Tabs>
        </Paper>
    );
}