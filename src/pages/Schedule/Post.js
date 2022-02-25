// 引入 React 功能
import React from 'react'
import { useEffect, useState } from 'react'
// import axios from 'axios';
import 'react-bootstrap'

// 引入 utils
// import {API_URL} from "../../utils/config";

// 引入美術
import '../Schedule/Post.scss'
import scheduleIcon6 from './img/scheduleIcon6.svg'

function Post(props) {
  // 日期
  const [date, setDate] = useState('')
  // 重要普通 radio
  const [important, setImportant] = useState('0')
  // 寵物 select
  const [selectedValue, setSelectedValue] = useState('')
  // TAG text
  const [tagOne, setTagOne] = useState('')
  const [tagTwo, setTagTwo] = useState('')
  // 事件種類 radio
  const [eventTag, setEventTag] = useState('1')
  // 文字 textarea
  const [textareaValue, setTextareaValue] = useState('')

  return (
    <>
      <h1 className="schedulePostH1">重要的事情</h1>

      <div className="bg-primary position-relative">
        <div className="schedulePost">
          <h2 className="schedulePostH2">寫下來提醒自己吧</h2>
          <input
            className="scheduleData"
            type="date"
            name="data"
            value={date}
            onChange={(e) => {
              setDate(e.target.value)
            }}
          />

          <form className="schedulePostInput">
            <div className="schedulePostDate">
              <img src={scheduleIcon6} className="scheduleIcon6" alt="" />
            </div>

            {/* 重要與普通radio */}
            <div className="schedulePostClass">
              <fieldset id="importent">
                <label for="0" className="schedulePostButton1 lg">
                  <input
                    type="radio"
                    id="0"
                    name="importent"
                    value={0}
                    check={'0' === important}
                    onChange={(e) => {
                      setImportant(e.target.value)
                    }}
                    className="schedulePostCircle"
                  />
                  <span className="schedulePostButtontext">重 要</span>
                </label>

                <label for="1" className="schedulePostButton2 lg">
                  <input
                    type="radio"
                    id="1"
                    name="importent"
                    value={1}
                    check={'1' === important}
                    onChange={(e) => {
                      setImportant(e.target.value)
                    }}
                    className="schedulePostCircle"
                  />
                  <span className="schedulePostButtontext">普 通</span>
                </label>
              </fieldset>
            </div>

            <div className="schedulePostTag">
              <div className="schedulePostTag1">
                <div class="dropdown">
                  {/* 選擇寵物 */}
                  <select
                    name="pets"
                    className="takeMaoOut"
                    type="select"
                    value={selectedValue}
                    onChange={(e) => {
                      setSelectedValue(e.target.value)
                    }}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <option value="小喵" className="dropdown-item">
                      小喵
                    </option>
                    <option value="布魯托" className="dropdown-item">
                      布魯托
                    </option>
                    <option value="唐基柯德" className="dropdown-item">
                      唐基柯德
                    </option>
                  </select>
                </div>
                {/* 輸入TAG標籤 */}
                <div>
                  <label for="fname" className="schedulePostLabel">
                    ＃
                  </label>
                  <input
                    className="scheduleInput"
                    type="text"
                    value={tagOne}
                    onChange={(e) => {
                      setTagOne(e.target.value)
                    }}
                    id="fname"
                    name="fname"
                  />
                  <br />
                  <label for="lname" className="schedulePostLabel">
                    ＃
                  </label>
                  <input
                    className="scheduleInput"
                    type="text"
                    value={tagTwo}
                    onChange={(e) => {
                      setTagTwo(e.target.value)
                    }}
                    id="lname"
                    name="lname"
                  />
                </div>
              </div>
              {/* 選擇事件種類 */}
              <div className="schedulePostTag2">
                <fieldset id="category">
                  <label for="a" className="scheduleButIcon1 lg">
                    <input
                      type="radio"
                      id="a"
                      name="category"
                      value={1}
                      check={'1' === eventTag}
                      onChange={(e) => {
                        setEventTag(e.target.value)
                      }}
                      className="schedulePostCircle"
                    />
                    <span className="schedulePostTagtext">
                      疫苗
                      <br />
                      保健
                    </span>
                  </label>

                  <label for="2" className="scheduleButIcon2 lg">
                    <input
                      type="radio"
                      id="2"
                      name="category"
                      value={2}
                      check={'2' === eventTag}
                      onChange={(e) => {
                        setEventTag(e.target.value)
                      }}
                      className="schedulePostCircle"
                    />
                    <span className="schedulePostTagtext">
                      定期
                      <br />
                      美容
                    </span>
                  </label>

                  <label for="3" className="scheduleButIcon3 lg">
                    <input
                      type="radio"
                      id="3"
                      name="category"
                      value={3}
                      check={'3' === eventTag}
                      onChange={(e) => {
                        setEventTag(e.target.value)
                      }}
                      className="schedulePostCircle"
                    />
                    <span className="schedulePostTagtext">
                      補貨
                      <br />
                      罐罐
                    </span>
                  </label>

                  <label for="4" className="scheduleButIcon4 lg">
                    <input
                      type="radio"
                      id="4"
                      name="category"
                      value={4}
                      check={'4' === eventTag}
                      onChange={(e) => {
                        setEventTag(e.target.value)
                      }}
                      className="schedulePostCircle"
                    />
                    <span className="schedulePostTagtext">
                      紀錄
                      <br />
                      提醒
                    </span>
                  </label>
                </fieldset>
              </div>
            </div>

            <div className="postSaySomethingDiv">
              <div className="postSaySomething">
                <div>
                  <textarea
                    className="scheduleTextarea"
                    value={textareaValue}
                    onChange={(e) => {
                      setTextareaValue(e.target.value)
                    }}
                  >
                    寫一些記錄吧！
                  </textarea>
                </div>
              </div>
              {/* <div className="buttonDiv"> */}
              <button className="scheduleSummitButton">送 出</button>
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

// Member.propTypes = {}

export default Post
