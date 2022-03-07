import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import './style/ComPost.scss'
import axios from 'axios'
import Swal from 'sweetalert2'

// 引入 context
import { useAuth } from '../../context/auth'
// 引入 utils
import { API_URL, IMG_URL } from '../../utils/config'

// 引入圖片
import 'react-icons'

function ComPost() {
  const { user, setUser } = useAuth()
  // 日常 || 討論 //
  const [whichForm, setWhichForm] = useState('0')

  function handleChange(e) {
    setWhichForm({ ...whichForm, [e.target.name]: e.target.value })
  }

  // const [formNo, setFormNo] = ['0', '1']

  // function handleFormChange(e) {
  //   setFormNo({ ...formNo, [e.target.name]: e.target.value })
  // }

  // 卡片資訊
  const [cardInfo, setCardInfo] = useState('')
  // 處理錯誤
  const [errMsg, setErrMsg] = useState({ msg: '' })
  // 日常貼文 -> 圖片預覽
  const [preview, setPreview] = useState('')
  // 圖片預覽
  function handlePreview(e) {
    const file = e.target.files[0]
    e.target.value = null

    const reader = new FileReader()
    reader.addEventListener(
      'load',
      function () {
        setPreview(reader.result)
      },
      false
    )
    if (file) {
      reader.readAsDataURL(file)
    }
  }
  function handleImage(e) {
    setCardInfo({ ...cardInfo, image: e.target.files[0] })
  }

  // 送出日常貼文
  const [post, setPost] = useState({
    id: '',
    memberID: '',
    image: '',
    tittle: '',
    content: '',
    createdAt: '',
    firstTag: '',
    midTag: '',
    lastTag: '',
  })

  // 送出討論文
  const [discussion, setDiscussion] = useState({
    id: '',
    memberID: '',
    categoryID: '',
    tittle: '',
    content: '',
    createdAt: '',
  })

  function handleDailyChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value })
  }
  function handleDisChange(e) {
    setPost({ ...discussion, [e.target.name]: e.target.value })
  }
  // 上傳圖片
  function handleImage(e) {
    setCardInfo({ ...cardInfo, image: e.target.files[0] })
  }
  // 送出日常文 API
  async function handleDailySubmit(e) {
    Swal.fire('成功送出貼文', '請重新整理', 'success')
    e.preventDefault() //關掉預設行為
    try {
      let response = await axios.post(`${API_URL}/daily/Add`, post, {
        withCredentials: true,
      })
      console.log('Add資料', response.data)
    } catch (e) {
      console.error('文章送出失敗', e.response.data)
      Swal.fire({
        icon: 'error',
        title: '文章送出失敗',
        text: { ...errMsg, msg: e.response.data.msg },
      })
    }
  }

  // 送出討論文 API
  async function handleDailySubmit(e) {
    Swal.fire('成功送出貼文', '請重新整理', 'success')
    e.preventDefault() //關掉預設行為
    try {
      let response = await axios.post(`${API_URL}/discuss/Add`, discussion, {
        withCredentials: true,
      })
    } catch (e) {
      console.error('文章送出失敗', e.response.data)
      Swal.fire({
        icon: 'error',
        title: '文章送出失敗',
        text: { ...errMsg, msg: e.response.data.msg },
      })
      Swal()
    }
  }

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

  return (
    <div id="Post-Page">
      {/* 標題 */}
      <h1 className="post-h1 mt-5">今天</h1>
      <div className="bg-primary position-relative">
        <div className="community-post">
          <h2 className="post-h2">&emsp;想分享什麼嗎❓</h2>
          {/* 表單 */}
          {user ? (
            <div className="post-controll mt-md-50 d-sm-inline-block d-md-inline-flex my-5">
              <div className="postinput ">
                {/* 相片上傳區 */}
                <label
                  htmlFor="fileUploader"
                  className="img-uploader"
                  title="點擊以上傳圖片"
                >
                  {/*圖片預覽 | 無圖隱藏 */}
                  <img
                    className={preview ? 'previewer' : 'd-none'}
                    src={preview}
                    alt=""
                  />

                  {/* 圖片 */}
                  <input
                    type="file"
                    id="fileUploader"
                    className="d-none w-100"
                    onChange={(e) => {
                      handleImage(e)
                      handlePreview(e)
                    }}
                    name="image"
                  />
                </label>
                {/* 發文模式切換 */}
                <div className="postClass ">
                  {/* 重要與普通radio */}
                  <div className="com-PostClass">
                    <fieldset id="important">
                      <label
                        htmlFor="1"
                        className={`com-PostButton1 lg ${
                          whichForm === '1' ? 'active' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          id="1"
                          name="important"
                          value="1"
                          check={'1' === whichForm}
                          onClick={(e) => {
                            setWhichForm(e.target.value)
                            handleChange(e)
                          }}
                          className="com-PostCircle"
                        />
                        <span className="com-PostButtontext">重 要</span>
                      </label>

                      <label
                        htmlFor="0"
                        className={`com-PostButton2 lg ${
                          whichForm === '0' ? 'active' : ''
                        }`}
                      >
                        <input
                          type="radio"
                          id="0"
                          name="important"
                          value="0"
                          check={'0' === whichForm}
                          onChange={(e) => {
                            setWhichForm(e.target.value)
                            handleChange(e)
                          }}
                          className="com-PostCircle"
                        />
                        <span className="com-PostButtontext">普 通</span>
                      </label>
                    </fieldset>
                  </div>
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
                  {/* {cards.discussOptions.map((choice) => {
                  return (
                    <> */}
                  <div className="postTag2">
                    {/* {post.tags.map((v) => {
                      return (
                        <> */}
                    {/* <label htmlFor="post-tag-1" className="btnIcon1" key={v}>
                      <input id="post-tag-1" type="checkbox" value={v} />
                      <a>{discussOptions[v]}</a>
                    </label>
                     </> 
                     }) })} */}
                  </div>
                  {/* </>
                  )
                })} */}
                </div>
              </div>
              {/* 撰寫貼文區域 */}
              <div className="post-content-area d-sm-flex d-md-inline-flex ">
                <div className="post-content-container">
                  <div className="post-content-textarea">
                    <Form>
                      <textarea
                        className="community-tittle"
                        placeholder={'請填寫標題'}
                        onChange={handleDailyChange}
                      ></textarea>
                      <textarea
                        className="community-textarea filled-md-100"
                        placeholder={'寫一些內容吧!'}
                        onChange={handleDailyChange}
                      ></textarea>
                    </Form>
                  </div>
                  <button
                    className="community-submit"
                    onClick={handleDailySubmit}
                  >
                    送 出
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="compost-unlogin">登入後尚可留言</div>
          )}
        </div>
      </div>
      {/*postinput*/}
    </div> //Post-page
  )
}

// Member.propTypes = {}

export default ComPost
