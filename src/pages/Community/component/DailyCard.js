import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./style/DailyCard.scss";
import Hashtag from "./HashTag";

// 插圖
import photo from "./images/card-photo.svg";
import like from "./images/icon-like.svg";
import comment from "./images/icon-comment.svg";
function card(props) {
  return (
    <div className="daily-card d-inline-block">
      {/* [[[頭像、標籤Tag]]] */}
      <Container className="px-2">
        <Row>
        {/* <Col sm={1} md={1} lg={1}></Col> */}
          <Col xs={4} sm={4} md={4} lg={4}>
            <div className="daily-avatar rounded-circle bg-secondary"></div>
          </Col>

        <Col xs={1} sm={1} md={1} lg={1}></Col>

          <Col xs={6} sm={6} md={6} lg={6}>
            <Hashtag style={{ width:'100%'}} className="hash-tag" />
          </Col>
        {/* <Col></Col> */}
        </Row>
      </Container>
      {/* [[[主體]]] */}
      <div className="card-body">
        {/* 圖片 */}
        {/* <div className="card-img"> */}
          <img className="card-img"  src={photo} />
        {/* </div> */}
        {/* 內文 */}
        <div className="card-content pt-3 px-3">
          白日依山盡黃河入海流 欲求千里目更上一層樓 新年快樂快樂過年紅包......
        </div>
      </div>
      {/* [[[統計]]] */}
      <div className="card-counter d-line-block text-center my-3">
        <a>
          300 <img src={like} />
        </a>
        <a>
          15 <img src={comment} />
        </a>
      </div>
    </div>
  );
}

card.propTypes = {};

export default card;