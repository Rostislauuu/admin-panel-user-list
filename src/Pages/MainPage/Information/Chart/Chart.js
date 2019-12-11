import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

export const Chart = () => {
    const chartData = useSelector( state => state.chart );

    const data = {
        labels: chartData.labels,
        datasets: [
            {
                data: chartData.data,
                backgroundColor: chartData.backgroundColor
            }
        ]
    };

    const options = {
        title: {
            display: true,
            text: 'Statistics'
        },
        legend: {
            display: true
        },

    };

    return(
        <div style={{ marginRight: '20px', marginBottom: '20px' }}>
            <Pie data={data} options={options} />
        </div>
    )
};