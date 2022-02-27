import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap'
import './style/DailyCard.scss'
import Hashtag from './HashTag'
import axios from 'axios'
// 引入 context
import { useAuth } from '../../../../context/auth'
// 引入 utils
import { API_URL, IMG_URL } from '../../../../utils/config'
// 元件
import DailyCardCarousel from './DailyCardCarousel'
// import DailyCardPost from './DailyCardPost'

// 插圖
import photo from './images/card-photo.svg'
import like from './images/icon-like.svg'
import comment from './images/icon-comment.svg'
import cardLeave from './images/ZoomOut.svg'
import pawpaw from './images/icon-paw.svg'

//\\ [[[彈出視窗end]]] //\\

// 卡片 card
function Card(props) {
  // 彈跳視窗
  const [modalShow, setModalShow] = React.useState(false)

  //卡片內容
  const [cards, setCards] = useState({
    id: '',
    user_id: '',
    image: '',
    tittle: '',
    content: '',
    created_at: '',
    tags: [],
  })

  // API
  useEffect(() => {
    let queryEvent = async () => {
      // 欲取得後端 http://localhost:3005/api/daily/card 資料
      let response = await axios.get('http://localhost:3005/api/daily/card')
      setCards(response.data)
      console.log('測試response.data', response.data)
    }
    queryEvent()
  }, [])

  return (
    <>
      {cards.map((item, i) => {
        return (
          <>
            <div
              className="daily-card d-inline-block"
              onClick={() => setModalShow(true)}
            >
              {/* [[[頭像、標籤Tag]]] */}
              <Container className="px-2">
                <Row>
                  {/* <Col sm={1} md={1} lg={1}></Col> */}
                  <Col xs={4} sm={4} md={4} lg={4}>
                    <div className="daily-avatar rounded-circle bg-secondary"></div>
                  </Col>

                  <Col xs={1} sm={1} md={1} lg={1}></Col>

                  <Col xs={6} sm={6} md={6} lg={6}>
                    {item.tags.map((tag, i) => {
                      return <div>#{tag}</div>
                    })}
                    {/* <Hashtag style={{ width: '100%' }} className="hash-tag" /> */}
                  </Col>
                  {/* <Col></Col> */}
                </Row>
              </Container>
              {/* [[[主體]]] */}
              <div className="card-body">
                {/* 圖片 */}
                <img className="card-img" src={photo} />
                {/* 內文 */}
                <div className="card-content pt-3 px-3">
                  {item.content}
                  {/* 白日依山盡黃河入海流 欲求千里目更上一層樓
              新年快樂快樂過年紅包...... */}
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
          </>
        )
      })}
      {/* <CardModal show={modalShow} onHide={() => setModalShow(false)} /> */}
    </>
  )
}

export default Card
