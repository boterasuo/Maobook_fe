import React from "react";
import PropTypes from "prop-types";
import { Form, FormControl, Button, Row, Col, Container } from "react-bootstrap";
import { HiPlus } from "react-icons/hi";
// 樣式
import "./style/Daily.scss";
import "../Community.scss";

// 元件
import Search from '../Community/component/DailySearch'
// 插圖
import daily from "./images/text-daily.svg";

function Daily(props) {
  return (
    <>
    
      <Container>
      <div className="w-50 w-sm-75 container-fluid">
      <Search/>
      </div>
        <Row class="daily-title">
          <Col lg={3} className="">
            <img src={daily} />
          </Col>
          <Col></Col>
          <Col lg={3}>
            <Button variant="outline-primary rounded-pill text-end">
              <HiPlus /> 發個文吧
            </Button>
          </Col>
        </Row>
        <div className="daily-posts border border-primary mao-rounded mt-lg-3 mt-md-2">
          123
          <br />
          456
        </div>
        </Container>
    </>
  );
}

export default Daily;
