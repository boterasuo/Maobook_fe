
import React from 'react';

function DayHelps(props) {
  return (
    <>

      <div className="container">
      
        <div className="">2022/03/11</div>

      </div>

        <div className="container" style={ { border: "2px orange solid"} }> 

        <div className="first" style={ { display:"flex"} }>

        <div className="">3/11</div>

        <div className="main" style={ { border: "1px orange solid", display:"flex"}}>

        <div style={ { border: "1px solid"}}>台北市</div>
        <div style={ { border: "1px solid"}}>狗狗</div>
        <div style={ { border: "1px solid"}}>代遛</div>
        <div style={ { border: "1px solid"}}>NT$1000</div>
        <div>標題標題標題標題標題標題</div>
        <div>（箭頭按鈕）</div>

        </div>
        
        <div className="">(爪)＿人應徵</div>

        </div>


        <br/>

        <div className="second" style={ { display:"flex"} }>

        <div className="">3/12</div>
        
        <div className="main" style={ { border: "1px orange solid", display:"flex"}}>

        <div style={ { border: "1px solid"}}>桃園市</div>
        <div style={ { border: "1px solid"}}>貓貓</div>
        <div style={ { border: "1px solid"}}>代遛</div>
        <div style={ { border: "1px solid"}}>NT$2000</div>
        <div>標題標題標題標題標題標題</div>
        <div>（箭頭按鈕）</div>

        </div>
        
        <div className="">(爪)＿人應徵</div>

        </div>
        </div>

  </>
  )
}


export default DayHelps;