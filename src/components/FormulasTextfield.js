import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
    resize: {
        fontSize: 20,
        fontFamily: 'Times New Roman',
    }
})

export function FormulasTextfield({ formulas, ...others }) {
    const classes = useStyles();

    function renderFormulas() {
        let textContent = "";

        formulas.forEach((formula, index) => {            
            textContent += `${formula}`;
            if(index < formulas.length - 1)
            {
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
                value={renderFormulas()} 
                {...others}>
            </TextField>           
    )

}