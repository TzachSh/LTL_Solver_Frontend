import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, Divider, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    contentAlignment: {
        textAlign: 'center',
        padding: theme.spacing(5),
    }
}))

export function ContentPresenter({ title, content, elevationValue }) {
    const classes = useStyles();

    return (
        <Card elevation={elevationValue}>
            <CardHeader title={title} />
            <Divider />
            <CardContent className={classes.contentAlignment}>
                {content}
            </CardContent>
        </Card>
    )
}