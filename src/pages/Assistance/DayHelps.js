import React, { useState, useEffect } from "react";
import axios from "axios";

import './components/DayHelps.scss';
import pawicon from './img/paw.svg';
import arrowright from './img/arrowright.svg';

function DayHelps(props) {

  const [data, setData] = useState([])
    
  useEffect(() => {
      let getDayHelps = async () => {
          let response = await axios.get("http://localhost:3000/api/dayhelps/");
        //("${API_URL}/dayhelps/");
        setData(response.data);
      };
      getDayHelps();
    },[]);

  return (
    <>

      <div className="container">

        <div className="maintitle">2022/03/11的所有案件</div>
     

        <div className="mainframe"> 
        
        <div className="bars">

        <div className="headdate">3/11</div>

        <div className="datadisplay">

        <div className="region">台北市{data.region}</div>
        <div className="category">狗狗{data.category_id}</div>
        <div className="tags">代遛{data.tags}</div>
        <div className="price">NT$1000{data.price}</div>
        <div className="casetitle">我是標題標題標題標題標題...{data.title}</div>
        <div className="arrowicon"><img src={arrowright} alt="" /></div>

        </div>
        
        <div className="pawbox">
        <img className="pawicon" src={pawicon} alt="" />  
        <div className="icontext">已有＿人應徵{data.user_id_giver}</div>
        </div>
        </div>

        {/* 以下是複製 暫時排版用 可刪 */}

        <div className="bars">

        <div className="headdate">3/11</div>

        <div className="datadisplay">

        <div className="region">台北市</div>
        <div className="category">狗狗</div>
        <div className="tags">代遛</div>
        <div className="price">NT$1000</div>
        <div className="casetitle">我是標題標題標題標題標題...</div>
        <div className="arrowicon"><img src={arrowright} alt="" /></div>

        </div>
        
        <div className="pawbox">
        <img className="pawicon" src={pawicon} alt="" />  
        <div className="icontext">已有＿人應徵</div>
        </div>

        <br/>
        </div>





        </div>
        </div>


  </>
  )
}


export default DayHelps;