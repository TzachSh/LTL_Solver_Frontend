import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Card, Avatar, Typography, Grid, CardHeader, Divider, Link, CardContent } from '@material-ui/core';

const avatarDims = '150px';
const useStyles = makeStyles(theme => ({
    avatarIcon: {
        margin: theme.spacing(2),
        width: avatarDims,
        height: avatarDims,
    },
    cardSpacing: {
        marginTop: theme.spacing(5),
    }
}))

export function AboutView() {
    const classes = useStyles();    

    function renderAvatar(name, image) {
        return (
            <>
                <Grid container>
                    <Grid item>
                        <Typography variant='h6' style={{ marginLeft: 15 }}>{name}</Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Avatar alt={name} src={image} className={classes.avatarIcon} />
                    </Grid>
                </Grid>
            </>
        )
    }

    return (
        <>
        <Card variant='outlined'>
                <CardHeader title='Summary' />
                <Divider />
                <CardContent>
                <Typography variant="subtitle2" gutterBottom>
                Our project is based on <Link target='_blank' href='https://arxiv.org/pdf/1401.5677.pdf'>Fast LTL Satisfiability Checking by SAT Solvers</Link> by:
                Jianwen Li, Geguang Pu, Lijun Zhang, Moshe Y. Vardi and Jifeng He, Rice University.
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                <b>Thanks a lot to our supervisor: Dr.Sarai Sheinvald.</b>
            </Typography>
            </CardContent>
        </Card>
            <Card variant='outlined' className={classes.cardSpacing}>
                <CardHeader title='Student' />
                <Divider />
                <CardContent>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                    <Grid item>
                        {renderAvatar('Tzach Sheratzky', 'https://media-exp1.licdn.com/dms/image/C4D03AQH6_v0MEV1K6g/profile-displayphoto-shrink_200_200/0?e=1599091200&v=beta&t=NjsJC16HbZtYtajtAw0oRQsvSfyrcUMSMWe5l0wFWfI')}
                    </Grid>                    
                </Grid>
                </CardContent>
            </Card>
        </>
    )
}
