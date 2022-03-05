// 引入 React 功能
import React from 'react'
import { useEffect, useState } from 'react'

// 引入 utils
import axios from 'axios'
import Swal from 'sweetalert2'
import { API_URL } from '../../../utils/config'
import 'react-bootstrap'
import './Helper.scss'

function Helper(props) {
  const [data, setData] = useState([])
  const { noteDate, setNoteDate } = props

  // 處理錯誤
  const [errMsg, setErrMsg] = useState({ msg: '' })

  // 讀取案件資料API
  const getTaker = async () => {
    let response = await axios.get(`${API_URL}/history/` + noteDate)
    setData(response.data)
  }
  useEffect(() => {
    getTaker()
  }, [noteDate])

  // radio
  const [eventTag, setEventTag] = useState('0')
  const [schedule, setSchedule] = useState({
    category: '0',
    noteDate: '0',
  })

  // 修改案件狀態API
  async function handleSubmit(e) {
    Swal.fire('確定回覆', '已寄信通知對方您的選擇', 'success')
    e.preventDefault() //關掉預設行為
    try {
      let response = await axios.post(
        `${API_URL}/history/caseState/`,
        schedule,
        {
          withCredentials: true,
        }
      )
    } catch (e) {
      console.error('寫入資料庫失敗', e.response.data)
      setErrMsg({ ...errMsg, msg: e.response.data.msg })
    }
  }
  return (
    <>
      {data.map((item, i) => {
        return (
          <div className="helper">
            <div className="helpPeople">
              <div className="helpPhoto">
                <img />
              </div>
              <div className="helpName">
                <h6 className="nameTextH3">{item.takerName}</h6>
                <p className="nameTextp">maobook</p>
              </div>
            </div>

            <hr className="helperBr" />

            <div className="helpInfo">
              <div className="helpInfoUp">
                <h6>電話：{item.takerEmail} </h6>
                <h6>信箱：{item.takerMobile}</h6>
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
                        setSchedule({
                          ...schedule,
                          takenemail: item.takerEmail,
                          noteDate: item.case_id,
                          category: e.target.value,
                        })
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
                        setSchedule({
                          ...schedule,
                          takenemail: item.takerEmail,
                          noteDate: item.case_id,
                          category: e.target.value,
                        })
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
                        setSchedule({
                          ...schedule,
                          takenemail: item.takerEmail,
                          noteDate: item.case_id,
                          category: e.target.value,
                        })
                      }}
                      className="inputCircle"
                    />
                  </label>

                  <label
                    for="d"
                    className={`labelFinish ${
                      eventTag === '4' ? 'active' : ''
                    }`}
                  >
                    <input
                      type="radio"
                      id="d"
                      name="category"
                      value="4"
                      check={'4' === eventTag}
                      onChange={(e) => {
                        setEventTag(e.target.value)
                        setSchedule({
                          ...schedule,
                          takenemail: item.takerEmail,
                          noteDate: item.case_id,
                          category: e.target.value,
                        })
                      }}
                      className="inputCircle"
                    />
                  </label>

                  {/* </fieldset> */}
                </div>
              </div>
            </div>

            <hr className="helperBr" />

            <div className="helpTextDiv">
              <div>
                <p className="helpText">{item.content}</p>
              </div>
              <div>
                <button
                  className="HelperSummitButton"
                  type="submit"
                  onClick={handleSubmit}
                  data-dismiss="alert"
                >
                  確定回覆
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
    //   )
    // }
  )
}

export default Helper
