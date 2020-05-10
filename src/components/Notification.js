import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { closeNotification } from '../redux/actions/notificationActions';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export function Notification({ severity, message }) {
    const classes = useStyles();
    const state = useSelector(state => state.notifications)
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeNotification());
    };

    return (
        <Snackbar className={classes.root} open={state.isShown} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                {message}
            </Alert>
        </Snackbar>
    );
}