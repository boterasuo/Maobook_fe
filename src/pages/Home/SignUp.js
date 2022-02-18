// 引入 React 功能
import React from 'react';
import {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
// 引入 utils
import {API_URL} from "../../utils/config";

// 引入圖片們
import Logo from "../../img/SignUp/LOGO_no_word.svg";
import SignupWord from "../../img/SignUp/signupWord.svg";
import LogoWord from "../../img/LOGO_word.svg";
import Paws from "../../img/SignUp/paws.svg";
import PawsLeft from "../../img/SignUp/small_paws_left.svg";
import PawsRight from "../../img/SignUp/small_paws_right.svg";
import "./SignUp.scss";
import { BsGoogle, BsFacebook } from "react-icons/bs";


function SignUp(props) {
    // 註冊 input 輸入值
    const [member, setMember] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    });
    // 註冊驗證錯誤訊息
    const [signUpErr, setSignUpErr] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
    });
    // 轉頁用
    const history = useHistory();

    function handleChange(e) {
        setMember({...member, [e.target.name]:e.target.value});
        setSignUpErr({...signUpErr, [e.target.name]:""});
    };

    // function handleValidation(e) {
    //     e.preventDefault();
    //     setSignUpErr({...signUpErr, [e.target.name]:e.target.validationMessage});
    // };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let response = await axios.post(`${API_URL}/auth/register`, member);
            console.log(response.data.message);
            if(response.data.message === "ok") {
                // TODO: 客製化 modal
                alert("註冊成功！請登入")
                history.push("/login");
            }
        } catch(e) {
            console.error("error", e.response.data);
            setSignUpErr({...signUpErr,
                name: e.response.data.name, 
                email:e.response.data.email,
                password: e.response.data.password,
                confirmPassword: e.response.data.confirmPassword,
            });
        }
    }

  return (
  <div>
    {/* 排版用空白區塊 */}
    <div className="container">
        {/* maobook 字 logo */}
        <div className="logo-word">
            <img alt="" className="img-fluid" src={LogoWord}/>
        </div>
    </div>
    {/* 黃色註冊區塊 */}
    <div className='bg-primary position-relative'>       
        <div className="container">
            {/* 無字 logo 大圖   */}
            <div className="logo-noword position-absolute">
                <img alt="" className="img-fluid" src={Logo}/>
            </div>            
            <div className="row">
                {/* 左方註冊區塊 */}
                <div className="col-lg-3">
                    {/* 立即註冊文字圖 */}
                    <div className="d-none d-lg-block img-word">
                        <img alt="" className="img-fluid" src={SignupWord}/>
                    </div>
                </div>
                <div className="col-lg-3">
                    <form 
                        className="signup-form" 
                        onSubmit={handleSubmit}>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="姓名"
                                name="name"
                                value={member.name}
                                onChange={handleChange}
                            />
                            {/* name 欄位錯誤訊息 */}
                            <div className="errMsg">
                                {signUpErr.name ? signUpErr.name : ""}
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="Email 帳號"
                                name="email"
                                value={member.email}
                                onChange={handleChange}
                            />
                            {/* email 欄位錯誤訊息 */}
                            <div className="errMsg">
                                {signUpErr.email ? signUpErr.email : ""}
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="密碼" 
                                name="password"
                                value={member.password}
                                onChange={handleChange}
                            />
                            {/* password 欄位錯誤訊息 */}
                            <div className="errMsg">
                                {signUpErr.password ? signUpErr.password : ""}
                            </div>
                        </div>
                        <div className="form-group mb-2">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="確認密碼" 
                                name="confirmPassword"
                                value={member.confirmPassword}
                                onChange={handleChange}
                             />
                            {/* confirmPassword 欄位錯誤訊息 */}
                            <div className="errMsg">
                                {signUpErr.confirmPassword ? signUpErr.confirmPassword : ""}
                            </div>
                        </div>
                        {/* 註冊按鈕 */}
                        <div className="signUp-btn position-absolute">
                            <img alt="" className="img-fluid d-lg-none left-paw" src={PawsLeft}/>
                            <button 
                                className="btn px-4 py-1 text-primary"
                                type="submit">
                                立即註冊
                            </button>
                            <img alt="" className="img-fluid d-lg-none right-paw" src={PawsRight}/>
                        </div>
                    </form>
                </div>
                {/* 右方第三方註冊區塊 */}
                <div className="col-lg-6 position-relative">
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
                    {/* 註冊按鈕 */}
                    {/* <div className="signUp-btn">
                        <img alt="" className="img-fluid d-lg-none left-paw" src={PawsLeft}/>
                        <button 
                            className="btn px-4 py-1 text-primary"
                            onClick={handleSubmit}>
                            立即註冊
                        </button>
                        <img alt="" className="img-fluid d-lg-none right-paw" src={PawsRight}/>
                    </div> */}
                    
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}


export default SignUp;
