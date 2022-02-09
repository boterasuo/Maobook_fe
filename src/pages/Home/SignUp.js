import React from 'react';
import Logo from "../../img/SignUp/LOGO_no_word.svg";
import SignupWord from "../../img/SignUp/signupWord.svg";
import LogoWord from "../../img/SignUp/LOGO_word.svg";
import Paws from "../../img/SignUp/paws.svg";
import PawsLg from "../../img/SignUp/paws_lg.svg";
import "./SignUp.scss";
import { BsGoogle, BsFacebook } from "react-icons/bs";

function SignUp(props) {
  return (
  <div className="main-content ">
    <div className="space-section">
        <div className="logo-word d-lg-none">
            <img alt="" className="img-fluid" src={LogoWord}/>
        </div>
    </div>
    <div className='bg-primary position-relative sign-section'>       
        <div className="container">  
            <div className="logo-noword position-absolute">
                <img alt="" className="img-fluid" src={Logo}/>
            </div>
            <div className="position-absolute d-none d-lg-block img-word">
                <img alt="" className="img-fluid" src={SignupWord}/>
            </div>
            <div className="row">
                {/* 左方註冊區塊 */}
                <div className="col-lg-6">
                    <form className="signup-form">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="姓名" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="帳號" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="密碼" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="確認密碼" />
                        </div>
                    </form>
                </div>
                {/* 右方第三方註冊區塊 */}
                <div className="col-lg-6 position-relative">
                    <div className="position-absolute d-none d-lg-block logo-word">
                        <img alt="" className="img-fluid" src={LogoWord}/>
                    </div>
                    <h2 className="text-white text-right d-none d-lg-block sigh-slogan">
                        最貼心的寵物管家
                    </h2>
                    <hr className="d-lg-none divider"/>
                    <div className='d-flex thirdParty-signup'>
                        <div className="thirdParty-icon">
                            <BsGoogle color="white" fontSize="2.5rem"/>
                        </div>
                        <div className="thirdParty-icon">
                            <BsFacebook color="white" fontSize="2.5rem"/>
                        </div>
                    </div>
                    <div className="d-none d-lg-block img-paws">
                        <img alt="" className="img-fluid" src={Paws}/>
                    </div>

                    <div className="position-absolute d-lg-none img-paws-lg">
                        <img alt="" className="img-fluid" src={PawsLg}/>
                    </div>
                    <div className="signUp-btn">
                        <button className="btn px-4 py-1 text-primary">
                            立即註冊
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}


export default SignUp;
