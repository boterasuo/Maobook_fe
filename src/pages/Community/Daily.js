import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { HiPlus } from 'react-icons/hi'
// 樣式
import './style/Daily.scss'
import '../Community.scss'

// 元件
import Search from '../Community/component/DailySearch'
import DailyCard from './component/DailyCard/DailyCard'
// 插圖
import daily from './images/text-daily.svg'

function Daily(props) {
  return (
    <>
      {/* <Container> */}
      <div className="w-50 w-sm-75 container">
        <Search />
      </div>
      <Row class="daily-title">
        <Col md={4} className="">
          <img src={daily} />
        </Col>
        <Col></Col>
        <Col md={3}>
          <Button variant="outline-primary rounded-pill text-end">
            <HiPlus /> <a>發個文吧</a>
          </Button>
        </Col>
      </Row>
      <div className="daily-post-area border border-primary mao-rounded mt-lg-2 mt-md-2 container">
        <div className="daily-">
          <div className="d-inline-block">
            <DailyCard />
            <DailyCard />
            <DailyCard />
            <DailyCard />
          </div>
        </div>
      </div>
      {/* </Container> */}
    </>
  )
}

export default Daily
