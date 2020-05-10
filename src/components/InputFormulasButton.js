import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { loadComplete } from '../redux/actions/mainViewActions';
import { receiveNotification } from '../redux/actions/notificationActions';

const useStyles = makeStyles((theme) => ({
    loadButton: {
        margin: theme.spacing(5),
        textTransform: 'none',
    },
    input: {
        display: 'none',
    },
}))

export function InputFormulasButton({ text, icon, ...others }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    function handleOnLoad() {        
        let lines = this.result.split('\n');
        if(!lines[0])
        {
            return dispatch(receiveNotification({text: 'There are no formulas in the selected file', severity: 'error'}));    
        }

        let formulas = [];
        for (let line = 0; line < lines.length - 1; line++) {
            formulas.push(lines[line]);
        }
        dispatch(loadComplete(formulas));
    }

    const handleLoad = e => {
        let input = e.target;
        let reader = new FileReader();

        reader.onload = handleOnLoad;
        reader.readAsText(input.files[0]);
    }

    return (<Button
        size='large'
        className={classes.loadButton}       
        startIcon={icon}        
        component="label"
        {...others}
    >
        <Typography>{text}</Typography>
        <input
            className={classes.input}
            type="file"
            accept=".txt"
            onChange={handleLoad}
        />
    </Button>
    )
}
