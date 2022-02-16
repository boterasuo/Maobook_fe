// 引入 React 功能
import React from 'react';
// import {useState} from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

// 引入 utils
// import {API_URL} from "../../utils/config";
import 'react-bootstrap'
import '../Schedule/Intro.scss'

// 引入圖片們
import cheduleInfochat2 from '../Schedule/img/cheduleInfochat2.svg'
import schedule2 from '../Schedule/img/schedule2.svg'
import scheduleText1 from '../Schedule/img/scheduleText1.svg'
import scheduleIcon2 from '../Schedule/img/scheduleIcon2.svg'


function intro() {
  
  return (

    <>

      <div className="introdiv">
        <div className="homePage"></div>

        <div className="scheduleIntro">

            {/* <div className="IntroTop"> */}
              <div className="scheduleInfoTxt">
                <h2>提醒您</h2>
                <h2>毛孩生活的大小事</h2>
                <h5></h5>
                <h5>打疫苗、散散步</h5>
                <h5>細心記錄下毛孩每一個生長狀況</h5>
                <h5>讓毛孩健康長大</h5>
              </div>
            {/* </div> */}
              <div className="cheduleInfochat">
                <img src={cheduleInfochat2} alt="" />
              </div>


            <div className="Introdowm">
              <div className="chedulePhoto mx-auto">
                <img src={schedule2} alt="" /> 
              </div>
            </div>
            
            <div className="cTxt">
              <img src={scheduleText1} alt="" />
            </div>
            <div className="aaaaa mx-auto">
              <p className="arrowtextP1">點選右上角</p>
              <p className="arrowtextP2">先登入會員吧</p>
              <img className="arrowtextImg" src={scheduleIcon2} alt="" />
            </div>



        </div>
      </div>

    </>
    
  )

}






export default intro;