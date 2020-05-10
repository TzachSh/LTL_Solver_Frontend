import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    resize: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
    }
})

export function ExperimentsFormulas(props) {
    const classes = useStyles();
    const data = useSelector(state => state.experimentsView.data);

    function renderSatResults() {
        let textContent = "";

        data.forEach((formulaInfo, index) => {
            textContent += `${formulaInfo.formula}\nSat: ${formulaInfo.isSat}`;
            if (index < data.length - 1) {
                textContent += `\n\n`
            }
        });

        return textContent;
    }

    return (
        <TextField
            className={classes.textField}
            fullWidth
            inputProps={{ readOnly: true, className: classes.resize }}
            multiline
            value={renderSatResults()}
            {...props}>
        </TextField>
    )

}