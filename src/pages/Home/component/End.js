import React from "react";
// 引入圖片
import Paw from "../img/paw.svg";
import Ending from "../img/home_end.svg";
import "./End.scss";

function End() {
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
            <p>最暖心的毛孩網站<br/>
            歡迎你的加入</p>
            <div className="paw3">
                <img className="img-fluid" src={Paw} alt="paw" />
            </div>
            <div className="paw4">
                <img className="img-fluid" src={Paw} alt="paw" />
            </div>
        </div>
        {/* 結尾 */}
        <div className="content-down">
            <div className="ending width=100px ">
                <img className="img-fluid" src={Ending} alt="ending" />
            </div>
            <h4>開始書寫你和毛孩的故事</h4>
        </div>
        </div>
    </>
  )
}

export default End