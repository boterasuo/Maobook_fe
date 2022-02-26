import React from "react";
// 引入圖片
import Paw from "../img/paw.svg";
import Gift from "../img/gift.svg";
// 引入樣式
import "./Start.scss";
// 引入動畫套件
import "animate.css";

function Start() {
  return (
    <>
      <div className="home-start">
        {/* 小腳印*4 */}
        <div className="content-up">
          <div><img className="paw1" src={Paw} alt="paw1"/></div>
          <div><img className="paw2" src={Paw} alt="paw2"/></div>
          <div className="paw-txt1"><p>你也有一個<br/>一直陪伴著你的毛孩嗎</p></div>
          <div><img className="paw3" src={Paw} alt="paw3"/></div>
          <div><img className="paw4" src={Paw} alt="paw4"/></div>
        </div>
        {/* 禮物 */}
        <div className="content-down">
          <div className="paw-txt1"><p>每個毛小孩的到來<br/>都是一份獨一無二的禮物</p></div>
          <div><img className="giftbox" src={Gift} alt="giftbox"/></div>
          <div><p>讓毛毛日記和你一起<br/>用心陪伴牠們的一生<br/>
                MAO BOOK<br/>您最貼心的寵物管家</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;