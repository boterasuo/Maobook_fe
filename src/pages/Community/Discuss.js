import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Row, Col, Modal } from 'react-bootstrap'

// 圖示
import { HiPlus } from 'react-icons/hi'
// 樣式
import './style/Discuss.scss'
import '../Community.scss'

// 元件
import Bar from './component/Discuss/DiscussBar'
// 插圖
import diccuss from './images/text-diccuss.svg'
// 圖片
import rightArrow from './images/icon-right-arrow.svg'

function Discuss(props) {
  return (
    <>
      <Container className="px-5">
        <div className="w-50 w-sm-75 mt-5"></div>
        <Row className="daily-title">
          <Col className="">
            <img src={diccuss} />
          </Col>
          <Col lg={3}>
            <Button variant="outline-primary rounded-pill">
              <HiPlus />
              <a>發個文吧</a>
            </Button>
          </Col>
        </Row>
        <div className="discuss-post-area  mao-rounded mt-lg-2 mt-md-2">
          <div className="dicuss-container">
            <div className="d-inline-block">
              <Bar />
              <button className="Add-btn-discuss"> 查看更多</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Discuss
