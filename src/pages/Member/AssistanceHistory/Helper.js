// 引入 React 功能
import React from 'react'
import { useState } from 'react'

// 引入 utils
// import {API_URL} from "../../utils/config";
import 'react-bootstrap'
import './Helper.scss'

// 引入圖片

function Helper(props) {
  // 四格radio
  const [eventTag, setEventTag] = useState('1')
  const [schedule, setSchedule] = useState({
    category: '1',
  })

  function handleChange(e) {
    setSchedule({ ...schedule, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* 人像 */}
      <div className="helper">
        <div className="helpPeople">
          <div className="helpPhoto">
            <img />
          </div>
          <div className="helpName">
            <h6 className="nameTextH3">毛毛日記</h6>
            <p className="nameTextp">maobook</p>
          </div>
        </div>

        <hr className="helperBr" />

        <div className="helpInfo">
          <div className="helpInfoUp">
            <h6>電話：0900 000 000 </h6>
            <h6>信箱：eutenelin@gmail.com</h6>
          </div>
          <div className="helpInfoDown">
            <div className="helpInfoIcon">
              {/* <fieldset id="category"> */}
              <label
                for="a"
                className={`labelNo ${eventTag === '1' ? 'active' : ''}`}
              >
                <input
                  type="radio"
                  id="a"
                  name="category"
                  value="1"
                  check={'1' === eventTag}
                  onClick={(e) => {
                    setEventTag(e.target.value)
                    handleChange(e)
                  }}
                  className="inputCircle"
                />
              </label>

              <label
                for="b"
                className={`labelOk ${eventTag === '2' ? 'active' : ''}`}
              >
                <input
                  type="radio"
                  id="b"
                  name="category"
                  value="2"
                  check={'2' === eventTag}
                  onChange={(e) => {
                    setEventTag(e.target.value)
                    handleChange(e)
                  }}
                  className="inputCircle"
                />
              </label>

              <label
                for="c"
                className={`labelDo lg ${eventTag === '3' ? 'active' : ''}`}
              >
                <input
                  type="radio"
                  id="c"
                  name="category"
                  value="3"
                  check={'3' === eventTag}
                  onChange={(e) => {
                    setEventTag(e.target.value)
                    handleChange(e)
                  }}
                  className="inputCircle"
                />
              </label>

              <label
                for="d"
                className={`labelFinish ${eventTag === '4' ? 'active' : ''}`}
              >
                <input
                  type="radio"
                  id="d"
                  name="category"
                  value="4"
                  check={'4' === eventTag}
                  onChange={(e) => {
                    setEventTag(e.target.value)
                    handleChange(e)
                  }}
                  className="inputCircle"
                />
              </label>
              {/* </fieldset> */}
            </div>
          </div>
        </div>

        <hr className="helperBr" />

        <div className="helpText">
          <p>安安您好</p>
        </div>
      </div>
    </>
  )
}

export default Helper
