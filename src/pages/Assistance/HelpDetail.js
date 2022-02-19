import { Modal, Button, Row, Col, Carousel } from 'react-bootstrap';
import React, { useState } from 'react';
import './components/HelpDetail.scss';

import example from './img/example.svg';
import emptypaw from './img/emptypaw.svg';
import helpclosebutton from './img/helpclosebutton.svg';
import fullpaw from './img/paw.svg';



function HelpDetail(props) {
  return (
    <>

      <div className="helpdetail">

      <div>案件細節頁</div>
      
        <div className="lefeside">
          <img src={example} className="helpdetailimg" alt=""/>
        </div>

        <div className="rightside">

        <div className="righthead">
        <div className="helpavatar rounded-circle bg-secondary"></div>
        <div className="helpdetailuser">毛毛<br/>@ Maobook</div>
        <div className="helpdetailclose"><img src={helpclosebutton} alt=""/></div>
        </div>
        <hr className="rightdivider"/>

        <div className="rightbody">

        <div className="bodyinfo1">
        <div className="detailregion">台北市</div>
        <div className="detailcategory">狗狗</div>
        <div className="detailtags">代遛</div>
        <div className="detailimg"><img src={emptypaw} alt=""/></div>
        </div>

        <div className="bodyinfo2">
        <div className="detailcasetitle">我是標題標題標題標題標題...</div>
        <div className="detailtime">2022年03月01日 12:00</div>
        <div className="detailprice">NT$1000</div>
        </div>

        <div className="bodyinfo3">內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容</div>
        
        <hr className="rightdivider"/>

        <div className="rightfoot">

        <div className="showpaw">
        <div className="pawicon"><img src={fullpaw} alt=""/></div>
        <div className="pawtext">我要助人</div>
        </div>

        <div className="takerpost">

        <div className="contactchoice">
        <div className="choosetitle">聯絡方式</div>
        <div className="choosephone">提供手機</div>
        <div className="chooseemail">提供信箱</div>
        </div>

        <div className="textpost">
        <div className="takercontent" >我要留言</div>
        <textarea></textarea>
        </div>
        
        <div className="sendpost">
        <div className="takepostbutton">送出信件</div>
        </div>

        </div>

        </div>
        </div>
        </div>
        </div>
   
  </>
  )
}


export default HelpDetail;