// 引入 React 功能
import React from 'react';
// import {useState} from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";

// 引入 utils
// import {API_URL} from "../../utils/config";
import {ButtonGroup , Button , Form} from 'react-bootstrap'
import '../Schedule/Post.scss'

// 引入圖片
import scheduleIcon6 from './img/scheduleIcon6.svg'



function Post() {
  return (
    <>
    <h1 className="schedulePostH1">重要的事情</h1>

    <div className="bg-primary position-relative">
      <div className="schedulePost"> 
        <h2 className="schedulePostH2">寫下來提醒自己吧</h2>
            <input className="scheduleData" type="date" value="2020-06-25" min="2020-01-01" max="2020-12-31" />

        <div className="schedulePostInput">
          <div className="schedulePostDate"> 
            <img src={scheduleIcon6} className="scheduleIcon6" alt=""/>  
          </div>
          <div className="schedulePostClass">
            <buttongroup vertical>
              <button className="schedulePostButton1 lg"> 重 要 </button>
              <button className="schedulePostButton2 lg"> 普 通 </button>
            </buttongroup>
          </div>

          <div className="schedulePostTag">
            <div className="schedulePostTag1">
              <div class="dropdown">
                <button class="dropdown-toggle takeMaoOut" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  要帶誰出門呢？
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">小喵</button>
                  <button class="dropdown-item" type="button">布魯托</button>
                  <button class="dropdown-item" type="button">唐基柯德</button>
                </div>
              </div>
              <form>
                <label for="fname" className="schedulePostLabel">＃</label>
                <input className="scheduleInput" type="text" id="fname" name="fname" />
                <br/>
                <label for="lname" className="schedulePostLabel">＃</label>
                <input className="scheduleInput" type="text" id="lname" name="lname" />
              </form>

            </div>
            <div className="schedulePostTag2">
                <button className="scheduleButIcon1">疫苗保健</button>
                <button className="scheduleButIcon2">定期美容</button>
                <button className="scheduleButIcon3">補貨罐罐</button>
                <button className="scheduleButIcon4">紀錄提醒</button>
            </div>
          </div>
      
          <div className="postSaySomethingDiv">
            <div className="postSaySomething">
              <Form>
                <textarea className="scheduleTextarea" >寫一些記錄吧！</textarea>
              </Form>
            </div>
            {/* <div className="buttonDiv"> */}
              <button className="scheduleSummitButton">送  出</button>
            {/* </div> */}
          </div>



        </div>
      </div>
    </div>
    </>
  )
}

// Member.propTypes = {}

export default Post
