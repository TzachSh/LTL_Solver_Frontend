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
                Jianwen Li, Geguang Pu, Lijun Zhang, Moshe Y. Vardi and Jifeng He, Rice University
            </Typography>
            </CardContent>
        </Card>
            <Card variant='outlined' className={classes.cardSpacing}>
                <CardHeader title='Students' />
                <Divider />
                <CardContent>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                    <Grid item>
                        {renderAvatar('Tzach Sheratzky', 'https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.0-9/69874716_10157402268360242_5216856136023539712_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=m0qeORD0OvAAX8uonns&_nc_ht=scontent.fhfa1-1.fna&oh=1bf42442acc1fc6d99509c804a715f2a&oe=5EC1E328')}
                    </Grid>
                    <Grid item>
                        {renderAvatar('Tamir Alalouf', 'https://media-exp1.licdn.com/dms/image/C4D03AQFKxQTHRCJMLg/profile-displayphoto-shrink_800_800/0?e=1593043200&v=beta&t=BzsnWY-RbZlOasJ3aLSAzqiJy76mF_fAK-ldRFRlaww')}
                    </Grid>
                </Grid>
                </CardContent>
            </Card>
        </>
    )
}
