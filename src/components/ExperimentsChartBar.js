import React from 'react';
import { Bar } from 'react-chartjs-2';
import {Card, CardContent, CardHeader } from '@material-ui/core';

export function ExperimentsChartBar({ chartData }) {
    const data = {
        labels: chartData ? chartData.map(formulaData => formulaData.formula) : [],
        datasets: [
            {
                label: 'Execution Time (MilliSeconds)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: chartData ? chartData.map(formulaData => formulaData.execTime) : []
            }
        ]
    };

    const options = {
        tooltips: {
            callbacks: {
                afterLabel: function (tooltipItem) {
                    const isSat = chartData[tooltipItem.index].isSat;
                    return `Sat: ${isSat}`;
                }
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    stepSize: 5
                }
            }],
            xAxes: [{
                ticks: {
                    display: false
                }
            }]
        },
    }

    return (
        <Card variant='outlined'>
            <CardHeader title='Execution Time per Formula' subheader='Hover on a Bar for Details' />
            <CardContent>
                <Bar data={data} options={options} />
            </CardContent>
        </Card>
    )

}


