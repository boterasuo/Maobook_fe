// 引入 React 功能
import React from 'react';
// import {useState} from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

// 引入 utils
// import {API_URL} from "../../utils/config";
// import 'react-bootstrap'
import '../Schedule/Intro.scss'

// 引入圖片


function Post() {
  return (
    <>
    <div className="Schedulepost"> 
      <h1 calssName="postH1">寫下來提醒自己吧</h1>
      <div className="postInput">
        <div className="postDate">
          <input type="date"></input>
        </div>
        <div className="postClass"></div>
        <div className="postTag"></div>
        <div className="postSaySomething"></div>


      </div>
    </div>

    </>
  )
}

// Member.propTypes = {}

export default Post
