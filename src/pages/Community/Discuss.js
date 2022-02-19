import React from 'react'
import PropTypes from 'prop-types'

// 樣式
import './style/Discuss.scss'
// import "../Community.scss";

// 圖片
import rightArrow from "./images/icon-right-arrow.svg";

function Discuss(props) {
  return (
    <div className="container">

        <div className="maintitle">2022/03/11的所有案件</div>
     

        <div className="mainframe"> 
        
        <div className="bars">

        <div className="headdate">3/11</div>
        <div className="daily-avatar rounded-circle bg-secondary"></div>
        <div className="datadisplay">

        <div className="category">求助</div>
        <div className="tags">狗狗</div>
        <div className="casetitle">我家狗在吐血怎麼辦！！</div>
        <div className="casetitle text-truncate">我家狗狗12歲，貴賓犬，女生    最近他...！</div>
        <div className="arrowicon"><img src={rightArrow} alt="" /></div>

        </div>
        
        <div className="pawbox">
        {/* <img className="pawicon" src={pawicon} alt="" />   */}
      
        </div>
        </div>

        <div className="bars">

        <div className="headdate">3/11</div>
        <div className="daily-avatar rounded-circle bg-secondary"></div>
        <div className="datadisplay">
        <div className="category">求助</div>
        <div className="tags">狗狗</div>
        <div className="casetitle">我家狗在吐血怎麼辦！！</div>
        <div className="casetitle text-truncate">我家狗狗12歲，貴賓犬，女生    最近他...！</div>
        <div className="arrowicon"><img src={rightArrow} alt="" /></div>
        </div>
        </div>
        </div>
        </div>

  )
}

Discuss.propTypes = {}

export default Discuss
