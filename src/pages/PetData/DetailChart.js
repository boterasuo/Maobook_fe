import React, { useState, useEffect } from 'react'
// 引入樣式
import './PetData.scss'
// 引入 chart 套件
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

function DetailChart(props) {
  const { petHWInfo } = props
  const [value, setValue] = useState([])
  const [time, setTime] = useState([])

  // useEffect(() => {
  //     const reversedData = [...petHWInfo].reverse();
  //     const newValue = [...reversedData].map((data, i) => data.value);
  //     const newTime = [...reversedData].map((data, i) => {
  //         let dataArr = data.time.split("-");
  //         let newDataArr = dataArr.slice(1).join("-");
  //         return newDataArr.toString();
  //     });
  //     setValue(newValue);
  //     setTime(newTime);
  // }, []);

  useEffect(() => {
    const reversedData = [...petHWInfo].reverse()
    const newValue = [...reversedData].map((data, i) => data.value)
    const newTime = [...reversedData].map((data, i) => {
      let dataArr = data.time.split('-')
      let newDataArr = dataArr.slice(1).join('-')
      return newDataArr.toString()
    })
    setValue(newValue)
    setTime(newTime)
  }, [petHWInfo])

  // 使用 chart.js
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  )
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        display: true,
        // grid: {
        //     display: false,
        // },
      },
      y: {
        display: true,
        min: Math.floor(Math.min(...value) * 0.95),
        max: Math.ceil(Math.max(...value) * 1.05),
        // grid: {
        //     display: false,
        // }
      },
    },
  }
  const data = {
    labels: time,
    datasets: [
      {
        data: value,
        borderColor: 'rgb(246, 188, 84)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        spanGaps: true,
      },
    ],
  }
  return (
    <div className="detail-chart">
      <Line options={options} data={data} />
    </div>
  )
}

export default DetailChart
