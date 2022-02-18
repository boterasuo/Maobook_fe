import React from "react";
import PropTypes from "prop-types";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../index.scss";
import "./Card.scss";
import Hashtag from "./HashTag";

// 插圖
import photo from "./images/card-photo.svg";
import like from "./images/icon-like.svg";
import comment from "./images/icon-comment.svg";
function card(props) {
  return (
    <div className="card">
      {/* [[[頭像、標籤Tag]]] */}
      <Container className="px-2">
        <Row>
        <Col></Col>
          <Col xs sm md lg={4}>
            <div className="avatar rounded-circle bg-secondary ">123</div>
          </Col>
          <Col xs sm md lg={6}>
            <Hashtag style={{ width:'100%'}} className="hash-tag" />
            <Hashtag style={{ width:'100%'}} className="hash-tag" />
            <Hashtag style={{ width:'100%'}} className="hash-tag" />
          </Col>
        <Col></Col>
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
