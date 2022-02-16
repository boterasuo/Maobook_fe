// 引入 React 功能
import React from 'react';
// import {useState} from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

// 引入 utils
// import {API_URL} from "../../utils/config";
import {Container} from 'react-bootstrap' 
import 'bootstrap'
import './schedule.scss'

// 引入圖片們
import scheduleText2 from './Schedule/img/scheduleText2.svg'
import scheduleIcon1 from './Schedule/img/scheduleIcon1.svg'

// 引入 component
import Intro from './Schedule/Intro.js'
import Calendar from './Schedule/calendarE.js'
// import Notes from './Schedule/Notes.js'



function calandar() {
  
  return (
    <>
    <div>
    <nav className="nav"></nav>

    <Container>
      <div className="etext">
        <img src={scheduleText2} alt="" className="img-fld" />
      </div>
      <div className="iconPost">
        <img src={scheduleIcon1} alt="" />
      </div>
      
      <div className="Introdiv">
      <Intro/>
      </div>
      <div className="Calendardiv">
      <Calendar/>
      </div>
      <div className="scheduleNotes">
      {/* <Notes/> */}
      </div>
      <div className="scheduleCharts"></div>
      <div className="schedulePost">
        <footer></footer>
      </div>
    </Container>

    </div>
    </>
  )

}






export default calandar;
