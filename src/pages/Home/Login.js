import React from 'react';
import Logo from "../../img/LOGO_no_word.svg";
import LogoWord from "../../img/LOGO_word.svg";
import LoginWord from "../../img/Login/login_word.svg";
import { ReactComponent as PawBtn } from "../../img/Login/paw_btn.svg";
import "./Login.scss";
import { BsGoogle, BsFacebook } from "react-icons/bs";

function Login(props) {
  return (
    <div>
      <div className="container">
          <div className="row no-gutters">
              {/* 排版用空白區塊 */}
              <div className="col-lg-6 d-none d-lg-block"></div>
              {/* 登入區塊 */}
              <div className="col-lg-4">
                {/* maobook 字 logo */}
                <div className="login-logo-word">
                  <img alt="" className="img-fluid" src={LogoWord}/>
                </div>
                <h4 className="text-secondary text-center py-3 m-0">It's Mao Life!</h4>
                {/* 登入欄位 */}
                <form className="login-form">
                  <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="帳號" />
                  </div>
                  <div className="input-group mb-3">
                      <input type="password" className="form-control" placeholder="密碼" />
                  </div>
                </form>
              </div>
              {/* 登入按鈕 */}
              <div className="col-lg-2 align-self-end login-btn">
                <button className="btn">
                  <PawBtn className="paw-btn" />
                </button>
              </div>
          </div>
        
    </div>
    <div className='bg-primary position-relative login-section'>       
        <div className="container"> 
            {/* logo 大圖  */}
            <div className="login-logo-noword position-absolute">
                <img alt="" className="img-fluid" src={Logo}/>
            </div>
            {/* 會員登入文字圖 */}
            <div className="position-absolute d-none d-lg-block img-login-word">
                <img alt="" className="img-fluid" src={LoginWord}/>
            </div>
            <div className="row">
                {/* 排版用區塊 */}
                <div className="col-lg-6"></div>
                {/* 右方第三方登入區塊 */}
                <div className="col-lg-4">
                    <div className='d-flex w-100 thirdParty-login'>
                        <div className="thirdParty-icon-login">
                            <BsGoogle color="white" fontSize="2.5rem"/>
                        </div>
                        <div className="thirdParty-icon-login">
                            <BsFacebook color="white" fontSize="2.5rem"/>
                        </div>
                    </div>                    
                </div>
                <div className="col-lg-2"></div>
            </div>
        </div>
    </div>
  </div>
  );
}


export default Login;
