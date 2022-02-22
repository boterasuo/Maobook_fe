// 引入 React 功能
import React from 'react';
// import {useState} from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

// 引入 utils
// import {API_URL} from "../../utils/config";
import {ButtonGroup , Button , Form, Row, Col} from 'react-bootstrap'
import './style/ComPost.scss'

// 引入圖片
import scheduleIcon6 from './images/icon-camera.svg'

// 引入元件
// import second from '..'



function Post() {
  return (
    <div id="Post-Page">
    <h1 className="postH1">今天</h1>

    <div className="bg-primary position-relative">
      <div className="Schedulepost"> 
        <h2 className="postH2">&emsp;想分享什麼嗎❓</h2>
            <input className="Scheduledata" type="date" value="2020-06-25" min="2020-01-01" max="2020-12-31" />

        <div className="postinput">
          <div className="postDate pointer"> 
            <img src={scheduleIcon6} className="scheduleIcon6" alt=""/>  
          </div>
          <div className="postClass ">
            <buttongroup vertical>
              <button className="button1 l-01"> 日常 </button>
              <button className="button2 l-01 "> 普通 </button>
            </buttongroup>
          </div>

          <div className="postTag">
            <div className="postTag1">
              <form>
              <Row>
                <Col></Col>
              </Row>
                <label for="fname" className="postLabel">＃</label>
                <input className="scheduleInput" type="text" id="fname" name="fname" />
                <br/>
                <label for="lname" className="postLabel">＃</label>
                <input className="scheduleInput" type="text" id="lname" name="lname" />
              </form>

            </div>
            <div className="postTag2">
                <button className="button0">問卦</button>
                <button className="button0">求助</button>
                <button className="button0">求助</button>
                <button className="button0">黑特</button>
            </div>
          </div>
      
          <div className="postSaySomethingdiv">
            <div className="postSaySomething">
              <Form>
                <textarea className="scheduletextarea" >寫一些記錄吧！</textarea>
              </Form>
            </div>
            {/* <div className="buttonDiv"> */}
              <button className="scheduleSummitButton">送  出</button>
            {/* </div> */}
          </div>



        </div>
      </div>
    </div>
    </div>
  )
}

// Member.propTypes = {}

export default Post
