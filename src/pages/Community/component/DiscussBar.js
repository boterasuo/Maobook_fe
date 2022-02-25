import React from "react";
import {Row, Col}  from "react-bootstrap";

// 樣式
import "./style/DiscussBar.scss";
// 插圖
import rightArrow from "./images/icon-right-arrow.svg";

function DiscussBar(props) {
  return (
    <>
      <div className="bars">
        <div className="headdate">
          3/11
        </div>
        <div className="daily-avatar rounded-circle bg-secondary"></div>
        <div className="datadisplay">
          <div className="category">求助</div>
          <div className="tags">狗狗</div>
          <div className="casetitle">我家狗在吐血怎麼辦！！</div>
          <div className="casetitle text-truncate">
            我家狗狗12歲，貴賓犬，女生 最近他...！
          </div>
        <div className="arrowicon">
          <img src={rightArrow} alt="" />
        </div>
        </div>
      </div>
    </>
  );
}

DiscussBar.propTypes = {};

export default DiscussBar;
