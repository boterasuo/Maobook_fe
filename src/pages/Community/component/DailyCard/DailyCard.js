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
// import { useAuth } from '../../../../context/auth'
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
  //  留言
  const [comments, setComments] = useState([])
  // 處理錯誤
  const [ErrComment, setErrComment] = useState({ msg: '' })
  const { cardID } = modalProps

  // 送出表單 (onSubmit)
  const [comment, setComment] = useState({
    comment: '',
  })
  // function handleChange(e) {
  //   setComments({ ...comment, [e.target.name]: e.target.value })
  // }

  // 留言處理
  // async function handleSubmit(e) {
  //   Swal.fire('已成功留言', '請重新整理', 'success')
  //   e.preventDefault() //關掉預設行為
  //   try {
  //     let commentRes = await axios.post(
  //       'http://localhost:3002/api/daily/AddComment',
  //       comment,
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //   } catch (e) {
  //     console.error('留言失敗', e.commentRes.data)
  //     setErrComment({ ...errMsg, msg: e.commentRes.data.msg })
  //   }

  // Card-List API
  useEffect(() => {
    let getCardList = async () => {
      let cardModalInfo = await axios.get(`${API_URL}` + '/daily/card-list')
      // console.log(cardModalInfo.data)
      // 欲取得後端 http://localhost:3005/api/daily/card-list 資料
      let cardIDContent = cardModalInfo.data.filter((v) => {
        return v.id === cardID
      })
      // console.log('XXX', cardIDContent)
      setCards(cardIDContent)
      // console.log('cardIDContent', cardIDContent)
      // console.log('CadListResponse.data:  ', cardModalInfo.data)
    }
    getCardList()
  }, [cardID])

  // 抓留言列表API
  useEffect(() => {
    let getCommentList = async () => {
      let commentArr = await axios.get(
        `${API_URL}` + '/daily' + '/comment-list'
      )
      let commentList = commentArr.data.filter((v) => {
        return v.id === cardID
      })
      setComments(commentList)
      console.log('留言列表', commentArr)
      // console.log('CadListResponse.data:  ', cardModalInfo.data)
    }
    getCommentList()
  }, [cardID])

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
        {cards.map((card) => {
          return (
            <>
              {/* 彈出式視窗: 左側 */}

              <Row className="card-detail-modal" key={card.id}>
                <Col xs={12} md={6} className="card-detail-slider bg-black">
                  <div className="carousel-hashtag">{/* <Hashtag /> */}</div>
                  <img
                    className="carousel-img"
                    src={`${IMG_URL}${card.image}`}
                    alt="First slide"
                  />
                </Col>
                <Col xs={6} md={6} className="px-5 overflow-y-scroll">
                  {/* 關閉 */}
                  <div className="zoomOut-btn" tittle="關閉視窗">
                    <img
                      src={cardLeave}
                      onClick={modalProps.onHide}
                      tittle="關閉視窗"
                    />
                  </div>
                  {/* 彈出式視窗: 右側 */}
                  <Container fluid className="scrolling-area">
                    {/* 發文者抬頭 */}
                    <Row className="mt-4">
                      <Col className="">
                        <Row>
                          <Col sm={2} md={2}>
                            {/* 大頭貼 */}
                            <div className="daily-post-avatar">
                              <img src={`${IMG_URL}${card.avatar}`} />
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
                    <Row className="daily-post-body border-top-primary">
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
                        <Row className="py-3">
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
                          {/* 發文者 */}
                          {comments.map((commentItem) => {
                            return (
                              <>
                                <Form
                                  className="comment-list-rows"
                                  key={commentItem.diaryID}
                                >
                                  <div className="comment-no py-2 invisibility  mr-1 ">
                                    B0
                                  </div>
                                  <img
                                    className="commenter-avatar bd-highlight"
                                    src={`${IMG_URL}${card.avatar}`}
                                  />
                                  {/* 發文者留言欄位 */}
                                  <input
                                    type="text"
                                    className="comment-border p-2 bd-highlight flex-fill text-wrap"
                                    // value={}
                                    // onChange={handleChange}
                                    placeholder="請留言..."
                                    id="tagOne"
                                    name="tagOne"
                                  />
                                  <button
                                    type="submit"
                                    className="btn btn-outline-primary rounded-pill py-1 my-1 "
                                    // onClick={handleSubmit}
                                    data-dismiss="alert"
                                  >
                                    送出
                                  </button>
                                </Form>
                                {/* 留言列表 */}
                                <li className="comment-list-rows">
                                  {/* TODO 文字垂直置中 */}
                                  <span className="align-text-bottom">
                                    {commentItem.name}
                                  </span>
                                  <div className="commenter-avatar bd-highlight">
                                    {/* 留言者頭貼 */}
                                    <img
                                      src={`${IMG_URL}${commentItem.commenter}`}
                                    />
                                  </div>
                                  <div className="comment-border px-3 py-2 bd-highlight flex-fill ">
                                    {/* 留言內容 */}
                                    {commentItem.comment}
                                  </div>
                                </li>
                              </>
                            )
                          })}
                          {/* 留言列表end */}
                        </ul>
                      </Col>
                    </Row>
                    {/* 留言 end */}
                  </Container>
                </Col>
              </Row>
            </>
          )
        })}
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
  const [cardID, setCardID] = useState('')
  // 在打開卡片的Detail
  const openCardDetail = (findCardId) => {
    setCardID(findCardId)
  }

  // Card-List API
  useEffect(() => {
    let getCardList = async () => {
      try {
        let CadListResponse = await axios.get(`${API_URL}` + '/daily/card-list')
        // 欲取得後端 http://localhost:3005/api/daily/card-list 資料
        // 只顯示四個卡片
        let cardShow4 = CadListResponse.data.slice(0, 4)
        setCards([...cardShow4])
        // setCards(CadListResponse.data)
        console.log('四張卡片', cardShow4)
        // console.log(tag)
        // console.log('所有資料.data:  ', CadListResponse.data)
      } catch (e) {
        // console.error('Get card-list Error', e.CadListResponse.data)
      }
    }
    getCardList()
  }, [cardID])

  return (
    <>
      {cards.map((card) => {
        {
          /* console.log('標籤', [...hashtag]) */
        }
        return (
          <>
            <div
              key={card.id}
              id={card.id}
              className="daily-card d-inline-block"
              // 跳出視窗的點擊事件
              onClick={() => {
                setModalShow(true)
                openCardDetail(card.id)
              }}
            >
              {/* [[[頭像、標籤Tag]]] */}
              <Container className="px-2">
                <Row>
                  {/* <Col sm={1} md={1} lg={1}></Col> */}
                  <Col xs={4} sm={4} md={4} lg={4}>
                    <img
                      className="daily-avatar rounded-circle bg-secondary"
                      src={`${IMG_URL}${card.avatar}`}
                    />
                  </Col>
                  {/* <Col xs={1} sm={1} md={1} lg={1}></Col> */}
                  <Col sm={8} md={8} className="hash-tag" key={card.id}>
                    {card.tags.split(',').map((tag, i) => {
                      return <div>#{tag}</div>
                    })}
                  </Col>
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
      <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cardID={cardID}
      />
    </>
  )
}

export default DailyCard
