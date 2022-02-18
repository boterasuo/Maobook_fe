
import React from 'react';

import './components/DayHelps.scss';
import pawicon from './img/paw.svg';
import arrowright from './img/arrowright.svg';

function DayHelps(props) {
  return (
    <>

      <div className="container">

        <div className="maintitle">2022/03/11的所有案件</div>
     

        <div className="mainframe"> 
        <div className="bars">

        <div className="headdate">3/11</div>

        <div className="datadisplay">

        <div className="region">台北市</div>
        <div className="category">狗狗</div>
        <div className="tags">代遛</div>
        <div className="price">NT$1000</div>
        <div className="casetitle">我是標題標題標題標題標題</div>
        <div className="arrowicon"><img src={arrowright} alt="" /></div>

        </div>
        
        <div className="pawicon">
        <img src={pawicon} alt="" />
        <div>已有＿人應徵</div>
        </div>

        <br/>
        </div>

        </div>
        </div>


  </>
  )
}


export default DayHelps;