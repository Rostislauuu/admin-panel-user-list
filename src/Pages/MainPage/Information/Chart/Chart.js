import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';

export const Chart = () => {
    const [ chartData, setChartData ] = useState({});

    useEffect( () => {
        const source = axios.CancelToken.source();
        const fetchData = async () => {
            try {
                const response = await axios.get('http://test-api-vakoms.herokuapp.com/charts/data', {
                    cancelToken: source.token
                });

                setChartData(response.data);
            } catch (error) {
                if( axios.isCancel(error) ) {
                    console.log('cancel request');
                } else {
                    throw error;
                }
            }
        };

        fetchData();

        return () => {
            source.cancel()
        }
    }, []);

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
        <div style={{marginRight: '20px'}}>
            <Pie data={data} options={options} />
        </div>
    )
};