import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './components/DayHelps.scss'
import pawicon from './img/paw.svg'
import arrowright from './img/arrowright.svg'

function DayHelps(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    let getDayHelps = async () => {
      let response = await axios.get(
        // `http://localhost:3002/api/help/dayhelps?year=${year}&month=${month}&day=${day}`
        // `http://localhost:3002/api/help/dayhelps/${year}/${month}/${day}`
        `http://localhost:3002/api/help/dayhelps/2022/03/05`
      )
      setData(response.data)
    }
    getDayHelps()
  }, [])

  return (
    <>
      <div className="container">
        <div className="maintitle">2022/03/05的所有案件</div>
        <div className="mainframe">
          {data.map((data) => {
            return (
              <>
                <div className="bars">
                  <div className="headdate">
                    {data.date.substring(5, 7)}/{data.date.substring(8, 10)}
                  </div>

                  <div className="datadisplay">
                    <div className="region">{data.region}</div>
                    <div className="category">{data.category}</div>
                    <div className="tags">{data.tag_name}</div>
                    <div className="price">NT ${data.price}</div>
                    <div className="casetitle">{data.title}</div>
                    <div className="arrowicon">
                      <img src={arrowright} alt="" />
                    </div>
                  </div>

                  <div className="pawbox">
                    <img className="pawicon" src={pawicon} alt="" />
                    <div className="icontext">已有{data.taker_count}人應徵</div>
                  </div>
                </div>
              </>
            )
          })}
          <br />
        </div>
      </div>
    </>
  )
}

export default DayHelps
