import React from "react";
import PropTypes from "prop-types";
import { Form, FormControl, Button, Row, Col, Container } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";

// 樣式
import './components/HelpList.scss';

// 元件
import HelpCard from './components/HelpCard';

// 插圖
import listtitle from "./img/listtitle.svg";
import downpointer from "./img/downpointer.svg";
import pen from "./img/pen.svg";

function HelpList(props) {
  return (
    <> 
        <div className="helplist">

        <div className="helplisttitle">
          <div className="listtitle"><img src={listtitle} alt=""/></div>
          <div className="listfilter">依地區 <img src={downpointer} alt=""/></div>
          <div className="listpost">
            <Button variant="outline-primary rounded-pill text-end">
              <HiPlus /> 發個文吧 
            </Button>
            <img className="penimg" src={pen} alt="" />
          </div>
        </div>

        <div className="helppostarea border border-primary mao-rounded mt-lg-2 mt-md-2">
                
        <div className="helpcards">
         <div className="helpsinglecard"><HelpCard/></div>
         <div className="helpsinglecard"><HelpCard/></div>
         <div className="helpsinglecard"><HelpCard/></div>
         </div>

         </div>
        <div className="listmorebutton">查看更多</div>
        </div>
    </>
  );
}

export default HelpList;