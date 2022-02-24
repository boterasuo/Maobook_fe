import React from "react";
import 'react-bootstrap';
// 樣式
import '../style/UI/global.scss'
import "./Community.scss";

// 次頁面(錨點)
import Intro from "./Community/Intro";
import Discuss from "./Community/Discuss";
import Daily from "./Community/Daily";
import Post from "./Community/ComPost";

// 懸浮元件
import Tools from './Community/component/Tools'

// 插圖
import coummunity from './Community/images/text-mao-community.svg'

function Community() {
  // console.log();
  return (
    <>
    
    <Tools/>
    <img src={coummunity} className="text-community " alt="coummunity" />

      <div className="container">
      <div className="Intro-Page">
        <Intro/>
      </div>
      <div className="Daily-Page">
        <Daily/>

      </div>
      <div className="Discuss-Page">
        <Discuss/>
      </div>
      </div>
      <div className="Post-Page"> 
        <Post/>
      </div>
    </>
  );
}

export default Community;
