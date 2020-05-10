import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { View } from '../redux/actions/tabsActions';
import { ContentPresenter } from './ContentPresenter';
import { MainView } from '../views/MainView';
import { ExperimentsView } from '../views/ExperimentsView';
import {AboutView} from '../views/AboutView';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && <div>{children}</div>}
        </Typography>
    );
}

export function TabsContentHandler() {
    const classes = useStyles();
    const value = useSelector(state => state.tabs.view);

    return (
        <div className={classes.root}>
            <TabPanel value={value} index={View.MAIN}>
                    <ContentPresenter title='Run Algorithm' content={<MainView />} elevationValue={5} />
            </TabPanel>
            <TabPanel value={value} index={View.EXPERIMENTS}>                
                    <ContentPresenter title='Experiments' content={<ExperimentsView />} elevationValue={5} />
            </TabPanel>
            <TabPanel value={value} index={View.ABOUT}>
                <ContentPresenter title='About' content={<AboutView />} elevationValue={5} />
            </TabPanel>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};