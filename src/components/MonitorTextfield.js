import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { receiveMessage } from '../redux/actions/mainViewActions';
import { TextField } from '@material-ui/core';
import { SystemUpdateAlt } from '@material-ui/icons';
import { CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles({
    resize: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
    }
})

const downloadFilename = 'Log.txt';
export function MonitorTextfield({ socket, ...others }) {
    const classes = useStyles();
    const messages = useSelector(state => state.mainView.messages);
    const isCalculating = useSelector(state => state.mainView.isCalculating);
    const dispatch = useDispatch();
    let textViewerRef = React.createRef();

    function renderLog() {
        let textContent = "";
        messages.forEach(message => textContent += `${message}\n\n`);
        return textContent;
    }

    const scrollToBottom = () => {
        if (textViewerRef.current) {
            textViewerRef.current.scrollTop = textViewerRef.current.scrollHeight;
            console.log(textViewerRef.current.defaultValue);
        }
    };

    const download = (filename) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textViewerRef.current.defaultValue));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages])


    socket.onmessage = (e) => {
        console.log(e.data);
        dispatch(receiveMessage(e.data));
    }

    return (
        <>
            <TextField
                className={classes.textField}
                inputRef={textViewerRef}
                fullWidth
                inputProps={{ readOnly: true, className: classes.resize }}
                multiline
                value={renderLog()}
                {...others}>
            </TextField>
            {isCalculating &&
                <CardActions>
                    <Button startIcon={<SystemUpdateAlt />} onClick={() => download(downloadFilename)} size="medium">Export</Button>
                </CardActions>}
        </>
    )

}