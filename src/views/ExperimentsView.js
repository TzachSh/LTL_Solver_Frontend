import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeFetch, fetching, stopFetch } from '../redux/actions/experimentsViewActions';
import { ExperimentsChartBar } from '../components/ExperimentsChartBar';
import { ExperimentsChartPie } from '../components/ExperimentChartPie';
import { Typography, Grid } from '@material-ui/core';
import { EXPERIMENTS_API } from '../constants';

export function ExperimentsView() {
    const state = useSelector(state => state.experimentsView);
    const formulas = useSelector(state => state.mainView.formulas)
    const dispatch = useDispatch();

    function fetchExperimentsData() {
        if (state.data && state.data.length > 0) {
            dispatch(completeFetch(state.data));
            return;
        }

        fetch(EXPERIMENTS_API, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => response.json()
        ).then(result => dispatch(completeFetch(result))
        ).catch(_ => dispatch(stopFetch()));
    }

    useEffect(() => {
        dispatch(fetching());
        fetchExperimentsData();

    }, [dispatch, formulas.length])


    return (
        state.data && state.data.length > 0 ?
            <Grid container spacing={3}>
                <Grid item lg={8}>
                    <ExperimentsChartBar chartData={state.data} />
                </Grid>
                <Grid item lg={4}>
                    <ExperimentsChartPie chartData={state.data} />
                </Grid>
            </Grid>
            :
            <Typography variant='h5'>Please run the algorithm to see experiment results</Typography>
    )

}