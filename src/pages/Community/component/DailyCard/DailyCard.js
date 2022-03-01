import React, { useState, useEffect } from 'react'
import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  Form,
  Carousel,
} from 'react-bootstrap'
import './style/DailyCard.scss'
import Hashtag from './HashTag'
import axios from 'axios'
// 引入 context
import { useAuth } from '../../../../context/auth'
// 引入 utils
import { API_URL, IMG_URL } from '../../../../utils/config'
// 元件
// import DailyCardCarousel from './DailyCardCarousel'
// import DailyCardPost from './DailyCardPost'

// 插圖
import photo from './images/card-photo.svg'
import like from './images/icon-like.svg'
import comment from './images/icon-comment.svg'
import cardLeave from './images/ZoomOut.svg'
import pawpaw from './images/icon-paw.svg'

//\\ [[[彈出視窗]]] //\\
function CardModal(modalProps) {
  // 卡片內容
  const [cards, setCards] = useState([])

  const CarouselItems = () => {
    return (
      <>
        {cards.map((CarouselItems) => (
          <Carousel.Item>
            <img
              style={{ width: '100%' }}
              className="d-block w-50"
              src={`${CarouselItems}`}
              // src={`${IMG_URL}${CarouselItem}`}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </>
    )
  }

  // Card-List API
  useEffect(() => {
    let getCardList = async () => {
      try {
        let cardModalInfo = await axios.get(`${API_URL}` + '/daily/card-list')
        // 欲取得後端 http://localhost:3005/api/daily/card-list 資料
        setCards(cardModalInfo.data)

        console.log('CadListResponse.data:  ', cardModalInfo.data)
      } catch (e) {
        console.error('Get card-list Error', e.cardModalInfo.data)
      }
    }
    getCardList()
  }, [])

  // 跳出來的視窗內容
  return (
    <Modal
      {...modalProps}
      size="xl"
      centered
      dialogClassName="modal-90w d-flex position-absulote"
      z-index="999"
    >
      <Container>
        <Row className="card-detail-modal">
          <Col xs={12} md={6} className="card-detail-slider">
            <Carousel fade width="60%">
              <Carousel.Item>
                <div className="carousel-hashtag pl-3 pt-2">
                  <Hashtag />
                </div>
                <img
                  className="d-block w-100"
                  src="https://shoplineimg.com/58a81a0d72fdc0ec2700333f/60a33d32974d6000140df206/800x.webp?source_format=jpg"
                  alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={6} md={6} className=" w-100 h-100 px-5 overflow-y-scroll">
            {cards.map((card) => {
              return (
                <>
                  {/* 縮小圖 */}
                  <div className="zoomOut-btn" tittle="關閉視窗">
                    <img
                      src={cardLeave}
                      onClick={modalProps.onHide}
                      tittle="關閉視窗"
                    />
                  </div>

                  <Container fluid className="scrolling-area">
                    {/* 發文者抬頭 */}
                    <Row className="mt-4" key={card.id}>
                      <Col className="">
                        <Row>
                          <Col sm={2} md={2}>
                            {/* 大頭貼 */}
                            <div className="daily-post-avatar ">
                              <img src={card.avatar} />
                            </div>
                          </Col>
                          <Col sm={3} md={3}>
                            {card.poster}
                            {/* 地點 */}
                            {/* <br />
                        ＠maobook */}
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* 發文者抬頭 end */}
                    {/* 內文 */}
                    <Row
                      className="daily-post-body border-top-primary"
                      key={card.id}
                    >
                      <Col>
                        {/* 內文標題 */}
                        <Row className="pt-2">
                          <Col>
                            <h4>{card.tittle}</h4>
                            <h6 className="text-muted">{card.created_at}</h6>
                          </Col>
                          <Col
                            sm={{ span: 2, offset: 3 }}
                            md={{ span: 2, offset: 3 }}
                            className="text-center text-primary"
                          >
                            <img src={pawpaw} />
                            收藏
                          </Col>
                        </Row>
                        <Row className="py-3" key={card.id}>
                          <Col className="text-indent">{card.content}</Col>
                        </Row>
                      </Col>
                    </Row>
                    {/* 內文 end */}
                    {/* 留言 */}
                    <Row className="daily-post-comment border-top-primary">
                      <Col>
                        <div className="comment-bar"></div>
                        <ul className="comment-list">
                          {/* 留言輸入欄位 */}
                          <Form className="comment-list-rows ">
                            <div className="comment-no py-2 invisibility  mr-1 ">
                              B0
                            </div>
                            <img
                              className="commenter-avatar mx-1 my-2 bd-highlight"
                              src="https://p2.bahamut.com.tw/HOME/creationCover/39/0002366739_B.JPG"
                            />
                            <input
                              type="text"
                              className="comment-border p-2 bd-highlight flex-fill text-wrap"
                            />
                            <button
                              type="submit"
                              className="btn btn-outline-primary rounded-pill py-1 my-1 "
                            >
                              送出
                            </button>
                          </Form>
                          {/* 留言輸入欄位end */}
                          {/* 留言列表 */}
                          <li className="comment-list-rows">
                            {/* {lists} */}
                            <div className="commenter-avatar mx-1 py-2 bd-highlight my-2">
                              {/* 留言者頭貼 */}
                              <img />
                            </div>
                            <div className="comment-border px-3 py-2 bd-highlight flex-fill ">
                              {/* 留言內容 */}
                              {/* {card.} */}
                            </div>
                          </li>
                          {/* 留言列表end */}
                        </ul>
                      </Col>
                    </Row>
                    {/* 留言 end */}
                  </Container>
                </>
              )
            })}
          </Col>
        </Row>
      </Container>
    </Modal>
  )
}

//\\ [[[彈出視窗end]]] //\\

// 卡片 card

function DailyCard(props) {
  // 彈跳視窗
  const [modalShow, setModalShow] = React.useState(false)
  //卡片內容
  const [cards, setCards] = useState([])

  // Card-List API
  useEffect(() => {
    let getCardList = async () => {
      try {
        let CadListResponse = await axios.get(`${API_URL}` + '/daily/card-list')
        // 欲取得後端 http://localhost:3005/api/daily/card-list 資料
        setCards(CadListResponse.data)
        let tag = CadListResponse.data.data.tags.split(',')
        // console.log(tag)
        console.log('CadListResponse.data:  ', CadListResponse.data)
      } catch (e) {
        // console.error('Get card-list Error', e.CadListResponse.data)
      }
    }
    getCardList()
  }, [])

  return (
    <>
      {cards.map((card) => {
        let hashtag = card.tags.split(',')
        {
          /* console.log('標籤', [...hashtag]) */
        }
        return (
          <>
            <div
              key={card.id}
              className="daily-card d-inline-block"
              onClick={() => setModalShow(true)}
            >
              {/* [[[頭像、標籤Tag]]] */}
              <Container className="px-2">
                <Row>
                  {/* <Col sm={1} md={1} lg={1}></Col> */}
                  <Col xs={4} sm={4} md={4} lg={4}>
                    <img
                      className="daily-avatar rounded-circle bg-secondary"
                      src={
                        `${card.image}` == null
                          ? photo
                          : `${IMG_URL}${card.avatar}`
                      }
                    />
                  </Col>
                  {/* <Col xs={1} sm={1} md={1} lg={1}></Col> */}
                  <Col sm={8} md={8} className="hash-tag" key={card.id}>
                    {card.tags.split(',').map((tag, i) => {
                      return <div>#{tag}</div>
                    })}
                  </Col>
                  {/* <Col></Col> */}
                </Row>
              </Container>
              {/* [[[卡片主體]]] */}
              <div className="card-body">
                {/* 卡片封面圖 */}
                <img
                  className="card-img"
                  src={`${card.image}` ? `${IMG_URL}${card.image}` : photo}
                  // { photo }
                />

                {/* 內文 */}
                <div className="card-content">
                  {/* 卡片內文預覽 */}
                  {card.content}
                </div>
              </div>
              {/* [[[統計]]] */}
              <div className="card-counter d-line-block text-center my-3">
                {/* 按讚數 */}
                <a key={card.id}>
                  {card.likes} <img src={like} />
                </a>
                {/* 留言數 */}
                <a key={card.id}>
                  {card.comments} <img src={comment} />
                </a>
              </div>
            </div>
          </>
        )
      })}
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default DailyCard
