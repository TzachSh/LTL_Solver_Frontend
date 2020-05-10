import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';

const intensity = 500;
const useStyles = makeStyles((theme) => ({   
    startButton: {
        color: green[intensity],
        marginTop: theme.spacing(2),
    },   
}))

export function StartButton({ onStart, text, ...props }) {
    const classes = useStyles();

    return (        
            <Button
                className={classes.startButton}
                fullWidth                
                onClick={onStart}
                {...props}
            >
                {text}
            </Button>
    )

}