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
      position: "top",
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 8];
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,null,7],
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


function OrderHistory(props) {
  return (
    <div style={{width:"600px", height:"400px"}}>
      <Line options={options} data={data}/>
    </div>
  )
}


export default OrderHistory
