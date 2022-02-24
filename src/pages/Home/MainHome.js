import React from "react";
import Logo from "../../img/Logo.svg";
import LogoWord from "../../img/LOGO_word.svg";
import BgPaw from "../../img/MainHome/bg_paw.svg";
import Button from "react-bootstrap/Button";

// 引入SCSS樣式
import "./MainHome.scss";

function MainHome(props) {
  return (
    <>
      <div className="main-content">
        {/* 背景灰色大腳印 */}
        <div className="bg-paw">
          <img src={BgPaw} alt="bg-paw" />
        </div>
        <div className="home1">
          <div className="container">
            <div className="row justify-content-center">
              {/* 左側內容 */}
              <div className="content-left">
                <h4>最貼心的寵物管家</h4>
                <div>
                  <img
                    className="home-logo-word"
                    src={LogoWord}
                    alt="LogoWord"
                  />
                </div>
                <p>一起書寫 屬於你們的爪爪日記</p>
                {/* 登入註冊按鈕 */}
                <div className="login-signup-section">
                  <Button className="home-login-btn" href="/login">
                    立即登入
                  </Button>
                  <Button className="home-signup-btn" href="#sign-up">
                    立即註冊
                  </Button>
                </div>
                <p>LOOK AHEAD</p>
              </div>
              <div className="col-lg-auto">{/* SPACE */}</div>
              {/* 右側內容 大Logo */}
              <div className="content-right col-lg-3">
                <img className="home-logo " src={Logo} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
