import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./HelpCard.scss";
import Hashtag from "./HelpTag";

// 插圖
import example from "../img/example.svg";

function HelpCard(props) {
  return (
    <div className="helpcard d-inline-block">

      {/* [[[頭像、標籤Tag]]] */}
      <Container className="px-2">
        <Row>
          <Col xs={4} sm={4} md={4} lg={4}>
            <div className="helpavatar rounded-circle bg-secondary"></div>
          </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

          <Col xs={6} sm={6} md={6} lg={6}>
            <Hashtag style={{ width:'100%'}} className="hash-tag" />
          </Col>
        </Row>
      </Container>

      {/* [[[主體]]] */}
      <div className="card-body">
        {/* 圖片 */}
        <div className="imgandregion">
          <img className="card-img" src={example} alt=""/>
          <div className="cardregion">台北市</div>
        </div>
        {/* 內文 */}
        <div className="card-content pt-3 px-3">
          我是標題標題標題......
        </div>
      </div>

      {/* [[[價格]]] */}
      <div className="card-footer d-line-block text-center my-3">
        <div className="cardprice">$ 1000</div>
      </div>
    </div>
  );
}

HelpCard.propTypes = {};

export default HelpCard;
