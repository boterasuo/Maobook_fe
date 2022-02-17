// 引入 React 功能
import React from 'react';
// import {useState} from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

// 引入 utils
// import {API_URL} from "../../utils/config";
import 'react-bootstrap';
import 'bootstrap'
import './Notes.scss'

// 引入圖片
import star from './img/scheduleIcon5.svg' 
import event1 from './img/event1.svg';
import event9 from './img/event9.svg';
import event0 from './img/event0.svg';
import event5 from './img/event5.svg';


function Notes() {
  return (
    <>
        <div className="ScheduleNotes">
          <div className="notesStar">
            <div className="notesStarTitle">
              <img src={star} className="notesStarImg"/>
              <h1 className="notesStarH1" bg-light border>本月重要記事</h1>
            </div>
            <div className="notesStarbox">
              <div className="events">
                <div className="events1">
                  <img src={event1} className="events1Img" /></div>
                <div className="events2">
                  <img src={event9}  className="events2Img" /></div>
                <div className="events3">
                   <img src={event0} /></div>
                <div className="events4">
                   <img src={event5} /></div>
                <div className="events5">
                  倒底是有沒有在水平
                </div>
              </div>


            </div>
          </div>

          <div ></div>

          <div className="notesToday">
            <h1 className="notesTodayTitle"> 日期 </h1>
            <div className="notesTodaybox"></div>
          </div>
        </div>
    </>
  )
}

// Member.propTypes = {}

export default Notes