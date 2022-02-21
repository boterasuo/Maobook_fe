import React from "react";
import Logo from "../../img/Logo.svg";
import LogoWord from "../../img/LOGO_word.svg";
import BgPaw from "./img/bg_paw.svg"
import Button from "react-bootstrap/Button";

// 引入SCSS樣式
import "./MainHome.scss";

function MainHome(props) {
  return (
    <>
      <div className="main-content">
        {/* 背景灰色大腳印 */}
          <div className="bg-paw">
            <img className="img-fluid" src={BgPaw} alt=""/>
          </div>
        <div className="home1 ">
          <div className="container">
            <div className="row justify-content-md-center">
              {/* 左側內容 */}
              <div className="col col-lg-6">
                <div>
                  <h4 className="text-primary text-left p-3 m-0">
                    最貼心的寵物管家
                  </h4>
                  <div className="p-3 d-none d-sm-block">
                    <img
                      className="LogoWord img-fluid "
                      src={LogoWord}
                      alt=""
                    />
                  </div>
                  <p className="text-primary text-left p-3 m-0">
                    一起書寫 屬於你們的爪爪日記
                  </p>
                  {/* 登入註冊按鈕 */}
                  <div className="login-signup-section p-5 text-center">
                      <Button 
                      className="home-login-btn" 
                      variant="primary text-white" 
                      href="/login">
                        立即登入
                      </Button>
                    {/* 下滑至最下面 */}
                      <Button 
                      className="home-signup-btn" 
                      variant="outline-primary" 
                      href="#signup">
                        立即註冊
                      </Button>
                  </div>
                  <p className="text-primary text-left p-3 m-0">
                    LOOK AHEAD
                  </p>
                </div>
              </div>
              <div className="col-md-auto">{/* SPACE */}</div>
              {/* 右側內容 大Logo */}
              <div className="col col-lg-3 text-center">
                <div className="p-2">
                  <img className="home-logo img-fluid" src={Logo} alt="" />
                  <div className="">{/* SPACE */}</div>
                  <p>It’s mao life!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHome;
