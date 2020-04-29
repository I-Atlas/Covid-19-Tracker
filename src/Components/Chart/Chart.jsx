import React, {useState, useEffect} from 'react';
import {receivedDailyData} from '../../Api/Api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({data: {deaths, confirmed, recovered}, country}) => {
    const [dailyData, setDailyData] = useState({});
    
    useEffect(() => {
        const receivedAPI = async () => {
            const initialDailyData = await receivedDailyData();

           setDailyData(initialDailyData);
        };
        receivedAPI();
    },[]);

    const lineChart = (
        dailyData[0] ? (<Line data={{
                labels: dailyData.map(({date}) => date),
                datasets: [
                    {label: 'Confirmed', 
                    data: dailyData.map((data) => data.confirmed),
                    borderColor: 'rgb(79, 114, 255)',
                    backgroundColor: 'rgba(137, 199, 247, 0.3)',
                    fill: true,},
                    {label: 'Deaths',
                    data: dailyData.map((data) => data.deaths),
                    borderColor: 'rgb(163, 27, 14)',
                    backgroundColor: 'rgba(247, 96, 126, 0.3)',
                    fill: true,}
                ],
            }}
        />
    ) : null
);
    
    const barChart = (
        confirmed ? (<Bar data={{
                labels: ['Deaths', 'Confirmed', 'Recovered'],
                datasets: [{
                    label: 'People',
                    backgroundColor: ['rgba(247, 96, 126, 0.938)', 'rgb(137, 199, 247)', 'rgb(134, 255, 178)'],
                    data: [deaths.value, confirmed.value, recovered.value]
                    },
                ],
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current situation in ${country}`},
                }}
            />
        ): null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
};

export default Chart;