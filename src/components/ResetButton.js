import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({   
    resetButton: {
        marginTop: theme.spacing(2),
    },   
}))

export function ResetButton({ onReset, text, ...props }) {
    const classes = useStyles();

    return (        
            <Button
                className={classes.resetButton}
                fullWidth          
                color='secondary'      
                onClick={onReset}
                {...props}
            >
                {text}
            </Button>
    )

}