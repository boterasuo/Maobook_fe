import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Row, Col } from 'react-bootstrap'

// 圖示
import { HiPlus } from 'react-icons/hi'
// 樣式
import './style/Discuss.scss'
import '../Community.scss'

// 元件
import Bar from './component/DiscussBar'
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
              <HiPlus /> <a>發個文吧</a>
            </Button>
          </Col>
        </Row>
        <div className="discuss-post-area  mao-rounded mt-lg-2 mt-md-2">
          <div className="dicuss-container">
            <div className="d-inline-block">
              <div className="bars">
                <div className="head-date">3/11</div>
                <div className="daily-avatar rounded-circle bg-secondary"></div>
                <div className="data-display bg-white">
                  <div className="category">求助</div>
                  <div className="tags">狗狗</div>
                  <div className="case-title">我家狗在吐血怎麼辦！！</div>
                  <div className="case-title text-truncate">
                    我家狗狗12歲，貴賓犬，女生 最近他...！
                  </div>
                  <div className="arrowicon">
                    <img src={rightArrow} alt="" />
                  </div>
                </div>
              </div>
              <button className="Add-btn-discuss"> 查看更多</button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Discuss
