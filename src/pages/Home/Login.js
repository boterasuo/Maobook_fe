// 引入 React 功能
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
// 引入 user context
import { useAuth } from '../../context/auth'

// 引入 utils
import { API_URL } from '../../utils/config'

// 引入圖片們
import Logo from '../../img/LOGO_no_word.svg'
import LogoWord from '../../img/LOGO_word.svg'
import LoginWord from '../../img/Login/login_word.svg'
import { ReactComponent as PawBtn } from '../../img/Login/paw_btn.svg'
import './Login.scss'
import { BsGoogle, BsFacebook } from 'react-icons/bs'

function Login(props) {
  const [auth, setAuth] = useState(false)
  // 來自 App 的登入狀態 (舊寫法)
  // const {auth, setAuth} = props;

  // 來自 context 的 user 狀態
  const { user, setUser } = useAuth()
  // 登入 inpuut 輸入
  const [member, setMember] = useState({
    email: '',
    password: '',
  })
  // 登入驗證錯誤訊息
  const [errMsg, setErrMsg] = useState({ msg: '' })

  function handleChange(e) {
    setMember({ ...member, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    // 關掉原本預設送出行為
    e.preventDefault()

    try {
      let response = await axios.post(`${API_URL}/auth/login`, member, {
        // 跨源存取 cookies
        withCredentials: true,
      })
      console.log(response.data)
      // 登入成功 --> 將 user 資料存入 context 中
      setUser(response.data.data)
      // 登入成功 --> auth 狀態改為 true
      setAuth(true)
      // 登入成功 --> user 狀態存入對應資料
      // TODO: 為什麼這樣寫 user 內容存不起來?
      // setUser({...user,
      //   id:response.data.id,
      //   name:response.data.name,
      //   email:response.data.email,
      //   image:response.data.image,
      // });
    } catch (e) {
      console.error('login error', e.response.data)
      // 登入失敗錯誤訊息
      setErrMsg({ ...errMsg, msg: e.response.data.msg })
    }
  }

  if (auth) {
    // 登入成功 --> 自動導向會員頁面
    return <Redirect to="/member/data" />
  }

  return (
    <div>
      <div className="container">
        <form className="row no-gutters" onSubmit={handleSubmit}>
          {/* 排版用空白區塊 */}
          <div className="col-lg-6 d-none d-lg-block"></div>
          {/* 登入區塊 */}
          <div className="col-lg-4">
            {/* maobook 字 logo */}
            <div className="login-logo-word">
              <img alt="" className="img-fluid" src={LogoWord} />
            </div>
            <h4 className="text-secondary text-center py-3 m-0">
              It's Mao Life!
            </h4>
            {/* 登入欄位 */}
            <div className="login-form">
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="帳號"
                  name="email"
                  value={member.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="密碼"
                  name="password"
                  value={member.password}
                  onChange={handleChange}
                />
              </div>
              {/* 登入錯誤訊息 */}
              <div className="errMsg">{errMsg.msg ? errMsg.msg : ' '}</div>
            </div>
          </div>
          {/* 登入按鈕 */}
          <div className="col-lg-2 align-self-end login-btn">
            <button className="btn" type="submit">
              <PawBtn className="paw-btn" />
            </button>
          </div>
        </form>
      </div>
      <div className="bg-primary position-relative login-section">
        <div className="container">
          {/* logo 大圖  */}
          <div className="login-logo-noword position-absolute">
            <img alt="" className="img-fluid" src={Logo} />
          </div>
          {/* 會員登入文字圖 */}
          <div className="position-absolute d-none d-lg-block img-login-word">
            <img alt="" className="img-fluid" src={LoginWord} />
          </div>
          <div className="row">
            {/* 排版用區塊 */}
            <div className="col-lg-6"></div>
            {/* 右方第三方登入區塊 */}
            <div className="col-lg-4">
              <div className="d-flex w-100 thirdParty-login">
                <div className="thirdParty-icon-login">
                  <BsGoogle color="white" fontSize="2.5rem" />
                </div>
                <div className="thirdParty-icon-login">
                  <BsFacebook color="white" fontSize="2.5rem" />
                </div>
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
