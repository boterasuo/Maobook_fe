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
// import event1 from './img/event1.svg';
import event9 from './img/event9.svg';
import event0 from './img/event0.svg';
import event5 from './img/event5.svg';


function Notes() {
  return (
    <>
        <div className="scheduleNotes">
          <div className="scheduleNotesStar">
            <div className="scheduleNotesStarTitle">
              <img src={star} className="notesStarImg"/>
              <h3 className="scheduleNotesStarH1" bg-light border>本月重要記事</h3>
            </div>
            <div className="scheduleNotesStarbox">
              <div className="scheduleEvents">
                <div className="scheduleEvents1">
                  <p className="scheduleEventDay">12</p>
                  {/* <img src={event1} className="events1Img" /> */}
                  </div>
                <div className="scheduleEvents2">
                  <img src={event9}  className="scheduleEvents2Img" /></div>
                <div className="scheduleEvents3">
                   <img src={event0} /></div>
                <div className="scheduleEvents4">
                   <img src={event5} /></div>
                <div className="scheduleEvents5">
                  這個水平線是有什麼障礙
                </div>
              </div>


            </div>
          </div>

          <div ></div>

          <div className="scheduleNotesToday">
            <h3 className="scheduleNotesTodayTitle"> 當日行程 </h3>
            <div className="scheduleNotesTodaybox"></div>
          </div>
        </div>
    </>
  )
}

// Member.propTypes = {}

export default Notes