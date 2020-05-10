import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Card, CardContent, CardHeader } from '@material-ui/core';

export function ExperimentsChartPie({ chartData }) {
    const countSatFormulas = chartData.filter((formulaData) => formulaData.isSat === true).length;
    const countUnsatFormulas = chartData.length - countSatFormulas;
    const data = {
        labels: [
            'Sat',
            'Unsat',
        ],
        datasets: [{
            data: [countSatFormulas, countUnsatFormulas],
            backgroundColor: [
                '#36A2EB',
                '#FF6384',
            ],
            hoverBackgroundColor: [
                '#36A2EB',
                '#FF6384',
            ]
        }]
    };

    return (
        <Card variant='outlined'>
            <CardHeader title='Sat vs Unsat' />
            <CardContent>
                <Doughnut data={data} />
            </CardContent>
        </Card>

    )

}


