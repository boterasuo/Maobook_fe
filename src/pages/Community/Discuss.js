import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Row,
  Col,
} from "react-bootstrap";

// 圖示
import { HiPlus } from "react-icons/hi";
// 樣式
import "./style/Discuss.scss";
import "../Community.scss";

// 元件
import Bar from './component/DiscussBar'
// 插圖
import diccuss from "./images/text-diccuss.svg";
// 圖片
import rightArrow from "./images/icon-right-arrow.svg";

function Daily(props) {
  return (
    <>
      {/* <Container> */}
      <div className="w-50 w-sm-75 container mt-5"></div>
      <Row class="daily-title">
        <Col className="">
          <img src={diccuss} />
        </Col>
        <Col lg={3}>
          <Button variant="outline-primary rounded-pill">
            <HiPlus /> 發個文吧
          </Button>
        </Col>
      </Row>
      <div className="daily-post-area border border-primary mao-rounded mt-lg-2 mt-md-2">
        <div className="d-inline-block">
          <Bar/>
          <Bar/>
          <Bar/>
          <Bar/>
        </div>
      </div>
    </>
  );
}

export default Daily;
