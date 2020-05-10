import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import { InputFormulasButton } from '../components/InputFormulasButton';
import { CalculationsMonitor } from '../components/CalculationsMonitor';
import { DescriptionOutlined } from '@material-ui/icons';

const intensity = 500;
const useStyles = makeStyles({
    red: {
        color: red[intensity],
    },
})

export function MainView() {
    const classes = useStyles();
    const state = useSelector(state => state.mainView);
    return (
        <div>
            {state.isLoaded ?
                <CalculationsMonitor formulas={state.formulas} /> :
                <div>
                    <Typography variant='h5'>
                        Load LTL formulas from a <span className={classes.red}> txt </span> file
                    </Typography>
                    <InputFormulasButton 
                        text='Browse File' 
                        variant='contained' 
                        color='primary' 
                        icon={<DescriptionOutlined />} />
                </div>
            }
        </div>
    )
}