import { useState, useEffect } from "react";
import { receivedDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({
  data: { deaths, confirmed, recovered, lastUpdate },
  country,
}) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const receivedAPI = async () => {
      setDailyData(await receivedDailyData());
    };
    receivedAPI();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            label: "Confirmed",
            data: dailyData.map((data) => data.confirmed),
            borderColor: "rgb(255, 125, 125)",
            backgroundColor: "rgba(255, 209, 209, 0.2)",
            fill: true,
          },
          {
            label: "Deaths",
            data: dailyData.map((data) => data.deaths),
            borderColor: "rgb(69, 69, 69)",
            backgroundColor: "rgba(192, 199, 207, 0.8)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Confirmed", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgb(255, 148, 144)",
              "rgb(164, 245, 189)",
              "rgba(169, 176, 184)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: {
          display: true,
          text: `Current situation in ${country} as of ${new Date(
            lastUpdate
          ).toDateString()}`,
        },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
