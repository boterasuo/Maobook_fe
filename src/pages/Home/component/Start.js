import React from "react";
// 引入圖片
import Paw from "../img/paw.svg";
import Gift from "../img/gift.svg";
import "./Start.scss";

function Start() {
  return (
    <>
    <div className="main-content text-center py-2">
        {/* 小腳印*4 */}
        <div className="content-up">
            <div className="paw1">
                <img className="paw1 img-fluid" src={Paw} alt="paw" />
            </div>
            <div className="paw2">
                <img className="img-fluid" src={Paw} alt="paw" />
            </div>
            <p>你也有一個<br/>
            一直陪伴著你的毛孩嗎</p>
            <div className="paw3">
                <img className="img-fluid" src={Paw} alt="paw" />
            </div>
            <div className="paw4">
                <img className="img-fluid" src={Paw} alt="paw" />
            </div>
        </div>
        {/* 禮物 */}
        <div className="content-down">
            <p>每個毛小孩的到來<br/>
            都是一份獨一無二的禮物</p>
            <div className="giftbox">
                <img className="img-fluid" src={Gift} alt="giftbox" />
            </div>
            <p>讓毛毛日記和你一起用心陪伴牠們的一生<br/>
            MAO BOOK 您最貼心的寵物管家</p>
        </div>
        </div>
    </>
  )
}

export default Start