import React, { useRef, useEffect } from 'react';
import { Bubble } from 'react-chartjs-2';

const BubbleChart = ( { assignmentMarks } ) => {
    const chartRef = useRef( null );

    useEffect( () => {
        if ( chartRef && chartRef.current ) {
            const chartInstance = chartRef.current.chartInstance;
            if ( chartInstance ) {
                chartInstance.destroy();
            }
        }
    }, [ assignmentMarks ] );

    const data = {
        labels: [ 'Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6', 'Assignment 7', 'Assignment 8' ],
        datasets: [
            {
                label: 'Assignment Marks',
                data: assignmentMarks.map( ( mark, index ) => ( { x: index + 1, y: mark, r: 10 } ) ),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
            },
        ],
    };

    const options = {
        title: {
            display: true,
            text: 'Assignment Marks',
            fontSize: 18,
        },
        legend: {
            display: true,
            position: 'bottom',
        },
        tooltips: {
            callbacks: {
                label: ( tooltipItem, data ) => {
                    const label = data.labels[ tooltipItem.index ];
                    const value = tooltipItem.value;
                    return `${ label }: ${ value }`;
                },
            },
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Assignments',
                    },
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Marks',
                    },
                },
            ],
        },
    };

    return (
        <div>
            <Bubble data={ data } options={ options } ref={ chartRef } />
        </div>
    );
};

export default BubbleChart;
