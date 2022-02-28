// 引入 React 功能
import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import 'react-bootstrap'
// 引入 context
import { useAuth } from '../../context/auth'
// 引入 utils
import { API_URL } from '../../utils/config'
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

  // 處理錯誤
  const [errMsg, setErrMsg] = useState({ msg: '' })
  // 處理會員
  const { user, setUser } = useAuth()
  // console.log('會員編號', user.id)

  // 處理比對會員寵物
  const petSelect = async () => {
    let response = await axios.get(
      'http://localhost:3002/api/calenderPost/' + user.id
    )
    console.log(response.data)
    setData(response.data)
  }
  const [data, setData] = useState([])
  useEffect(() => {
    petSelect()
  }, [])

  // 送出表單 (onSubmit)
  const [schedule, setSchedule] = useState({
    date: '2022-02-22 00:00:00',
    important: '0',
    pets: '0',
    tagOne: '輸入關鍵字',
    tagTwo: '輸入關鍵字',
    category: '1',
    textareaValue: '寫一些記事吧！',
  })

  function handleChange(e) {
    setSchedule({ ...schedule, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault() //關掉預設行為
    try {
      let response = await axios.post(
        'http://localhost:3002/api/calenderForm/register',
        schedule,
        {
          withCredentials: true,
        }
      )
    } catch (e) {
      console.error('寫入行事曆失敗', e.response.data)
      setErrMsg({ ...errMsg, msg: e.response.data.msg })
    }
  }

  // async function handleSubmit(e) {
  //   e.preventDefault()

  //   try {
  //     let response = await axios.post(`${API_URL}/auth/register`, member)
  //     console.log(response.data.message)
  //     if (response.data.message === 'ok') {
  //       // 客製化 Modal
  //       setShowModal(true)
  //     }
  //   } catch (e) {
  //     console.error('error', e.response.data)
  //     // 後端驗證
  //     setSignUpErr({
  //       ...signUpErr,
  //       name: e.response.data.name,
  //       email: e.response.data.email,
  //       password: e.response.data.password,
  //       confirmPassword: e.response.data.confirmPassword,
  //     })
  //   }
  // }

  return (
    <>
      <h1 className="schedulePostH1">重要的事情</h1>
      <div className="bg-primary position-relative">
        <div className="schedulePost">
          <h2 className="schedulePostH2">寫下來提醒自己吧</h2>
          <input
            className="scheduleData"
            type="date"
            name="date"
            value={schedule.date}
            onChange={handleChange}
          />

          <form className="schedulePostInput">
            <div className="schedulePostDate">
              <img src={scheduleIcon6} className="scheduleIcon6" alt="" />
            </div>

            {/* 重要與普通radio */}
            <div className="schedulePostClass">
              <fieldset id="important">
                <label for="1" className="schedulePostButton1 lg">
                  <input
                    type="radio"
                    id="1"
                    name="important"
                    value={1}
                    check={'1' === important}
                    onChange={handleChange}
                    className="schedulePostCircle"
                  />
                  <span className="schedulePostButtontext">重 要</span>
                </label>

                <label for="0" className="schedulePostButton2 lg">
                  <input
                    type="radio"
                    id="0"
                    name="important"
                    value={0}
                    check={'0' === important}
                    onChange={handleChange}
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
                    value={schedule.selectedValue}
                    onChange={handleChange}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {data.map((pets, i) => {
                      return (
                        <option value={pets.petsid} className="dropdown-item">
                          {pets.petname}
                        </option>
                      )
                    })}
                    {/* <option value="小喵" className="dropdown-item">
                      小喵
                    </option>
                    <option value="布魯托" className="dropdown-item">
                      布魯托
                    </option>
                    <option value="唐基柯德" className="dropdown-item">
                      唐基柯德
                    </option> */}
                  </select>
                </div>
                {/* 輸入TAG標籤 */}
                <div>
                  <label for="tagOne" className="schedulePostLabel">
                    ＃
                  </label>
                  <input
                    className="scheduleInput"
                    type="text"
                    value={schedule.tagOne}
                    onChange={handleChange}
                    id="tagOne"
                    name="tagOne"
                  />
                  <br />
                  <label for="tagTwo" className="schedulePostLabel">
                    ＃
                  </label>
                  <input
                    className="scheduleInput"
                    type="text"
                    value={schedule.tagTwo}
                    onChange={handleChange}
                    id="tagTwo"
                    name="tagTwo"
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
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
                    name="textareaValue"
                    value={schedule.textareaValue}
                    onChange={handleChange}
                  >
                    寫一些記錄吧！
                  </textarea>
                </div>
              </div>
              {/* <div className="buttonDiv"> */}
              {/* <div class="alert alert-primary alert-dismissible fade show" role="alert">
    hello world!
              <a href="#" class="alert-link">嗨嗨</a> */}
              <button
                className="scheduleSummitButton"
                type="submit"
                onClick={handleSubmit}
                data-dismiss="alert"
              >
                送 出
              </button>
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
