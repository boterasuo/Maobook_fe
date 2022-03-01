import {
  ButtonGroup,
  Button,
  Form,
  Row,
  Col,
  Card,
  CardColumns,
} from 'react-bootstrap'
import './style/ComPost.scss'
import axios from 'axios'

// 引入圖片
import photoUpload from './images/icon-camera.svg'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'react-icons'
import { GrPowerReset } from 'react-icons/gr'
// 引入 context
import { useAuth } from '../../context/auth'
// 引入 utils
import { API_URL, IMG_URL } from '../../utils/config'

// 引入元件
// import second from '..'

function ComPost() {
  const [cards, setCards] = useState([])

  // 討論標籤
  const discussOptions = [
    '貓貓',
    '狗狗',
    '問卦',
    '求助',
    '閒聊',
    '轉發',
    '推薦',
    '黑特',
  ]

  // Card-List API
  useEffect(() => {
    let getCardList = async () => {
      try {
        let cardModalInfo = await axios.get(`${API_URL}` + '/daily/card-list')
        // 欲取得後端 http://localhost:3005/api/daily/card-list 資料
        setCards(cardModalInfo.data)

        console.log('CadListResponse.data:  ', cardModalInfo.data)
      } catch (e) {
        console.error('Get card-list Error', e.cardModalInfo.data)
      }
    }
    getCardList()
  }, [])

  return (
    <div id="Post-Page">
      {/* 標題 */}
      <h1 className="post-h1">今天</h1>
      <div className="bg-primary position-relative">
        <div className="community-post">
          <h2 className="post-h2">&emsp;想分享什麼嗎❓</h2>
          {/* 表單 */}
          <div className="post-controll mt-md-50 d-sm-inline-block d-md-inline-flex">
            <div className="postinput">
              {/* 相片上傳 */}
              <form
                className="img-uploader"
                action="/action.php"
                encType="multipart/form-data"
              >
                <input
                  type="file"
                  id="fileUploader"
                  className=" d-none"
                  // onChange={}
                  multiple
                />
                {/* [[[DropBox]]] */}
                <div id="upload_zone" className=" upload_zone">
                  {/* 請將要上傳的圖片拖曳至此 */}
                </div>
                <div id="preview"></div>
              </form>
              {/* 發文模式切換 */}
              <div className="postClass ">
                <ButtonGroup vertical="true">
                  <button className="button1 l-01"> 日常分享 </button>
                  <button className="button2 l-01"> 社群八卦 </button>
                </ButtonGroup>
              </div>
              {/* 兩個標籤區 */}
              <div className="postTag">
                <div className="postTag1">
                  <form action="/action.php">
                    <label htmlFor="fname" className="postLabel">
                      ＃
                    </label>
                    <input
                      className="community-Input"
                      type="text"
                      id="fname"
                      name="fname"
                    />
                    <br />
                    <label htmlFor="lname" className="postLabel">
                      ＃
                    </label>
                    <input
                      className="community-Input"
                      type="text"
                      id="lname"
                      name="lname"
                    />
                  </form>
                </div>
                {/* 討論文：固定標籤 */}
                {cards.discussOptions.map((choice) => {
                  return (
                    <>
                      <div className="postTag2">
                        <label
                          htmlFor="post-tag-1"
                          className="btnIcon1"
                          key={choice}
                        >
                          <input id="post-tag-1" type="checkbox" />
                          <a>{discussOptions[choice]}</a>
                        </label>
                        {/* <label htmlFor="post-tag-2" className="btnIcon2">
                    <input id="post-tag-2" type="checkbox" />
                    <a>求助</a>
                  </label>

                  <label htmlFor="post-tag-3" className="btnIcon3">
                    <input id="post-tag-3" type="checkbox" />
                    <a>求助</a>
                  </label>

                  <label htmlFor="post-tag-4" className="btnIcon4">
                    <input id="post-tag-4" type="checkbox" />
                    <a>黑特</a>
                  </label> */}
                      </div>
                    </>
                  )
                })}
              </div>
            </div>
            {/* 撰寫貼文區域 */}
            <div className="post-content-area d-sm-flex d-md-inline-flex mt-md-50 ">
              <div className="post-content-container">
                <div className="post-content-textarea">
                  <Form>
                    <textarea
                      className="community-textarea filled-md-100"
                      defaultValue={'寫一些記錄吧！'}
                    ></textarea>
                  </Form>
                </div>
                <button className="community-submit">送 出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*postinput*/}
    </div> //Post-page
  )
}

// Member.propTypes = {}

export default ComPost
