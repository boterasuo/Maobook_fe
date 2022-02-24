// 測試用頁面 (待調整)
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from 'react-chartjs-2';




function OrderHistory(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [{x:'January', y:10}, {x:'January', y:20}, {x:'February', y:15}],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        spanGaps: true
      },
      {
        label: 'Dataset 2',
        data: [4,5,6,null,3],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  const data2 = {
    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [{x:'A', y:100}, {x:'A', y:200}, {x:'C', y:150}],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        spanGaps: true
      },
      {
        label: 'Dataset 2',
        data: [200, 150, 100],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <div style={{width:"600px", height:"400px"}}>
      <Line options={options} data={data1}/>
      <Line options={options} data={data2}/>
    </div>
  )
}


export default OrderHistory
