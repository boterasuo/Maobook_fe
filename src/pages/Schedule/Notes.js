// 引入 React 功能
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

// 引入 utils
// import {API_URL} from "../../utils/config";
import 'react-bootstrap'
import 'bootstrap'
import './Notes.scss'
import { format } from 'date-fns'

// 引入圖片
import star from './img/scheduleIcon5.svg'
// import event1 from './img/event1.svg';
import event9 from './img/event9.svg'
import event0 from './img/event0.svg'
// import event5 from './img/event5.svg';

function Notes({ NoteDate }) {
  // const {notedate, setNotedate}=props;
  const [data, setData] = useState([])
  console.log(NoteDate)

  // API
  const queryEvent = async () => {
    let response = await axios.get(
      'http://localhost:3002/api/calenderNote/' +
        NoteDate.getFullYear() +
        '/' +
        (NoteDate.getMonth() + 1)
    )
    setData(response.data)
  }
  useEffect(() => {
    queryEvent()
  }, [NoteDate])
  let CheckData = data.filter((a) => {
    return a.DATE == NoteDate.getDate()
  })

  return (
    <>
      <div className="scheduleNotes">
        <div className="scheduleNotesStar">
          <div className="scheduleNotesStarTitle">
            <img src={star} className="notesStarImg" />
            <h3 className="scheduleNotesStarH1" bg-light border>
              本月重要記事
            </h3>
          </div>
          <div className="scheduleNotesStarbox">
            <div className="scheduleEvents">
              {data.length == 0 ? (
                <div>
                  <b className="restTime">目前沒有重要記事喔</b>
                </div>
              ) : (
                data.map((item, i) => {
                  return (
                    <>
                      <div className="asd">
                        <div className="scheduleEvents1">
                          <p className="scheduleEventDay">{item.DATE}</p>
                          {/* <img src={event1} className="events1Img" /> */}
                        </div>
                        <div className="scheduleEvents2">
                          <img src={event9} className="scheduleEvents2Img" />
                        </div>
                        <div className="scheduleEvents3">
                          <img src={event0} />
                          {item.importer}
                        </div>
                        {item.tags.map((tag, i) => {
                          return (
                            <div className="scheduleEvents4 d-flex">
                              <div className="bbb">
                                <div className="scheduleEvents4tagsText">
                                  {tag}
                                </div>
                                {/* <img src={event5} className="scheduleEvents4tags"/> */}
                              </div>
                            </div>
                          )
                        })}
                        <div className="aaaaaa"></div>
                        <div className="scheduleEvents5">{item.title}</div>

                        <br />
                      </div>
                    </>
                  )
                })
              )}
            </div>
          </div>
        </div>

        <div></div>

        <div className="scheduleNotesToday">
          <h3 className="scheduleNotesTodayTitle">
            {' '}
            當日行程 {format(NoteDate, 'yyyy/MM/dd')}
          </h3>
          <div className="scheduleNotesTodaybox">
            <div>
              {CheckData.length == 0 ? (
                <div>
                  <b className="restTime">本日沒有行程喔～快去安排吧！</b>
                </div>
              ) : (
                CheckData.map((Dateitem, i) => {
                  return (
                    <>
                      <div className="asd">
                        <div className="scheduleEvents1">
                          <p className="scheduleEventDay"></p>
                          {/* <img src={event1} className="events1Img" /> */}
                        </div>
                        <div className="scheduleEvents2">
                          <img src={event9} className="scheduleEvents2Img" />
                        </div>
                        <div className="scheduleEvents3">
                          <img src={event0} />
                          {Dateitem.importance}
                        </div>
                        <div className="scheduleEvents4">
                          {Dateitem.tags.map((Datetag, i) => {
                            return (
                              <>
                                <div className="bbb">
                                  {/* <img src={event5} className="scheduleEvents4tags"/> */}
                                  <div className="scheduleEvents4tagsText">
                                    {Datetag}
                                  </div>
                                </div>
                              </>
                            )
                          })}
                        </div>
                        <div className="aaaaaa"></div>
                        <div className="scheduleEvents5">{Dateitem.title}</div>

                        <br />
                      </div>
                    </>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Member.propTypes = {}

export default Notes
