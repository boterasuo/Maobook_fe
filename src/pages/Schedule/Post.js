// 引入 React 功能
import React from 'react';
// import {useState} from "react";
// import axios from 'axios';
// import { useHistory } from "react-router-dom";
import 'react-bootstrap';

// 引入 utils
// import {API_URL} from "../../utils/config";
import '../Schedule/Post.scss'

// 引入圖片
import scheduleIcon6 from './img/scheduleIcon6.svg'


// function Post() {
class Post extends React.Component {


    constructor(props) {
    super(props);
    // this.state = {value: ''};
    this.state = {
      date:'年月日',
      important:'',
      pets:{value:'小喵'},
      tage:'',
      event1:'',
      event2:'',
      event3:'',
      event4:'',
      message:'寫一些記錄吧！',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleInputChange(event){
      const date = event.target.date;
      const important = event.target.important;
      const pets = event.target.pets;
      const tags = event.target.tats;
      const event1 = event.target.event1;
      const event2 = event.target.event2;
      const event3 = event.target.event3;
      const event4 = event.target.event4;
      const message = event.target.message;


      this.setState({
        [date]:date,
        [important]:important,
        [pets]:pets,
        [tags]:tags,
        [event1]:event1,
        [event2]:event2,
        [event3]:event3,
        [event4]:event4,
        [message]:message,

      })    
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }


    // handleDateChange(event) {
    //   this.setState({date: event.target.value});
    // }
    // handlePetsChange(event) {
    //   this.setState({pets: event.target.value});
    // }
    // handledateChange(event) {
    //   this.setState({pets: event.target.value});
    // }

    

    return () {
      <>
      <h1 className="schedulePostH1">重要的事情</h1>

      <form className="bg-primary position-relative" onSubmit={this.handleSubmit}>
        <div className="schedulePost"> 
          <h2 className="schedulePostH2">寫下來提醒自己吧</h2>
              {/* 選擇日期 */}
              <input type="date" className="scheduleData" 
               min="2020-01-01" max="2023-12-31" 
               value={this.state.date} onChange={this.handleInputChange} />

          <div className="schedulePostInput">
            <div className="schedulePostDate"> 
              <img src={scheduleIcon6} className="scheduleIcon6" alt=""/>  
            </div>
            <div className="schedulePostClass">
              {/* 選擇事件重要程度 */}
              <buttongroup vertical>
                <input type="button" className="schedulePostButton1 lg" 
                 value={this.state.important} onChange={this.handleInputChange}> 重 要 </input>
                <input type="button" className="schedulePostButton2 lg" 
                 value={this.state.important} onChange={this.handleInputChange}> 普 通 </input>
              </buttongroup>
            </div>

            <div className="schedulePostTag">
              <div className="schedulePostTag1">
                <div class="dropdown">
              {/* 下拉選單選擇寵物 */}
                  <select type="select" className="dropdown-toggle takeMaoOut"  
                          id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                          value={this.state.pets} onChange={this.handleInputChange}>
                    要帶誰出門呢？
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <option value="小喵" className="dropdown-item" type="button">小喵</option>
                      <option value="布魯托" className="dropdown-item" type="button">布魯托</option>
                      <option value="唐基柯德" className="dropdown-item" type="button">唐基柯德</option>
                    </div>
                  </select>
                </div>
              {/* 輸入TAG */}
                <div>
                  <label for="fname" className="schedulePostLabel">＃</label>
                  <input className="scheduleInput" type="text" id="fname" name="fname"
                         value={this.state.tags} onChange={this.handleInputChange} />
                  <br/>
                  <label for="lname" className="schedulePostLabel">＃</label>
                  <input className="scheduleInput" type="text" id="lname" name="lname"
                         value={this.state.tags} onChange={this.handleInputChange} />
                </div>

              </div>
              {/* 選擇事件種類 */}
              <div className="schedulePostTag2">
                  <button className="scheduleButIcon1" value="1"
                          value={this.state.event1} onChange={this.handleInputChange}>疫苗<br/>保健</button>
                  <button className="scheduleButIcon2" value="2"
                          value={this.state.event2} onChange={this.handleInputChange}>定期<br/>美容</button>
                  <button className="scheduleButIcon3" value="3"
                          value={this.state.event3} onChange={this.handleInputChange}>補貨<br/>罐罐</button>
                  <button className="scheduleButIcon4" value="4"
                          value={this.state.event4} onChange={this.handleInputChange}>紀錄<br/>提醒</button>
              </div>
            </div>
        
            <div className="postSaySomethingDiv">
              <div className="postSaySomething">
              {/* 輸入備忘錄文字 */}
                <div>
                  <textarea className="scheduleTextarea"
                   value={this.state.message} onChange={this.handleInputChange}></textarea>
                </div>
              </div>
              {/* <div className="buttonDiv"> */}
              {/* 送出表單 */}
                <button className="scheduleSummitButton"
                        type="submit" value="submit">送  出</button>
              {/* </div> */}
            </div>



          </div>
        </div>
      </form>
      </>
    }
  }
export default Post