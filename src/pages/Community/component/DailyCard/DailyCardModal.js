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
import Swal from 'sweetalert2'
// 引入 context
import { useAuth } from '../../../../context/auth'
// 引入 utils
import { API_URL, IMG_URL } from '../../../../utils/config'

// 圖片
import cardLeave from './images/ZoomOut.svg'
import { Link } from 'react-router-dom'

//\\ [[[彈出視窗]]] //\\
function DailyCardModal(modalProps) {
  const { cardID } = modalProps
  // 處理會員
  const { user, setUser } = useAuth()
  // console.log('用戶', user)
  // console.log('set用戶', user.id)
  // console.log('用戶ID', )
  //   送出留言的state
  const [inputComment, setInputComment] = useState({
    id: '0',
    cardID: '0',
    memberID: '',
    comment: '',
    // createdAt: ' ',
  })
  // console.log('user.id', user.id)
  //   console.log('123', inputComment)
  // 卡片內容
  const [cards, setCards] = useState([])
  console.log('cards', cards)
  //  留言列表
  const [comments, setComments] = useState([])

  // 處理錯誤
  const [errMsg, setErrMsg] = useState({ msg: '' })
  console.log('cardID', cardID)

  // Card-List API
  useEffect(() => {
    let getCardList = async () => {
      let cardModalInfo = await axios.get(`${API_URL}` + '/daily/card-list')
      // console.log(cardModalInfo.data)
      // 欲取得後端 http://localhost:3005/api/daily/card-list 資料
      let cardIDContent = cardModalInfo.data.filter((v) => {
        return v.id === cardID
      })
      console.log('cardIDContent', cardIDContent)
      setCards(cardIDContent)
      // console.log('cardIDContent', cardIDContent)
      // console.log('CadListResponse.data:  ', cardModalInfo.data)
    }
    getCardList()
  }, [cardID])

  // 抓留言列表API
  useEffect(() => {
    console.log('cardID', cardID)
    let getCommentList = async () => {
      let commentArr = await axios.get(
        `${API_URL}/daily/comment-list/${cardID}`
      )
      setComments(commentArr.data)
      console.log('留言列表', commentArr.data)
      // console.log('CadListResponse.data:  ', cardModalInfo.data)
    }
    getCommentList()
  }, [cardID])

  console.log('inputComment', inputComment)
  useEffect(() => {
    setInputComment({ ...inputComment, cardID: cardID })
  }, [cardID])

  function handleChange(e) {
    setInputComment({ ...inputComment, [e.target.name]: e.target.value })
  }
  // 送出留言
  async function handleSubmit(e) {
    e.preventDefault() //關掉預設行為
    try {
      let commentRes = await axios.post(
        'http://localhost:3005/api/daily/AddComment',
        inputComment,
        {
          withCredentials: true,
        }
      )

      Swal.fire('已成功留言', '請重新整理', 'success')
      // 需要清空留言欄位
      console.log('測試', commentRes.data)
    } catch (e) {
      console.error('留言失敗', e.commentRes.data)
      setErrMsg({ ...errMsg, msg: e.commentRes.data.msg })
    }
  }

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
        {/* 彈出式視窗: 左側 */}
        {cards.map((card) => {
          return (
            <>
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
                      alt={'close-Window'}
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
                              <img
                                src={`${IMG_URL}${card.avatar}`}
                                alt={'card-avatar'}
                              />
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
                            {/* <img src={pawpaw} />
                              收藏 */}
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
                          {user ? (
                            <Form className="comment-list-rows">
                              <div className="comment-no py-2 invisibility  mr-1 ">
                                B0
                              </div>

                              <img
                                className="commenter-avatar bd-highlight"
                                alt={'card-avatar'}
                                src={`${IMG_URL}${user.image}`}
                              />

                              {/* 發文者送出留言欄位 */}
                              <input
                                type="text"
                                className="comment-border p-2 bd-highlight flex-fill text-wrap"
                                // value={}
                                onChange={handleChange}
                                value={inputComment.comment}
                                placeholder={'請留言'}
                                name={'comment'}
                                required
                                pattern="1"
                              />
                              {/* 文章ID */}
                              <input
                                type="hidden"
                                name="cardID"
                                // onChange={handleChange}
                                value={cardID}
                              />
                              {/* 貼文時間 */}
                              <input
                                type="hidden"
                                name={`createdAt`}
                                onChange={handleChange}
                                value={inputComment.createdAt}
                              />
                              <button
                                type="submit"
                                className="btn btn-outline-primary rounded-pill py-1 my-1 "
                                onClick={handleSubmit}
                                // value={'送出'}
                              >
                                送出
                              </button>
                            </Form>
                          ) : (
                            <Link
                              className="w-100 text-center btn btn-outline-primary text-decoration-none my-2 h-25"
                              to="/login"
                            >
                              登入後即可留言
                            </Link>
                          )}
                          {comments.map((comment) => {
                            return (
                              <>
                                <li
                                  className="comment-list-rows"
                                  key={comment.diary_id}
                                >
                                  <div className="commenter-avatar bd-highlight">
                                    {/* 留言者頭貼 */}
                                    <img
                                      src={`${IMG_URL}${comment.avatar}`}
                                      alt={'comment-avatar'}
                                    />
                                  </div>
                                  <div className="comment-border px-3 py-2 bd-highlight flex-fill ">
                                    {/* 文字垂直置中 */}
                                    <strong className="align-text-bottom text-dark">
                                      {comment.name}&ensp;
                                    </strong>
                                    {/* 留言內容 */}
                                    <span className="align-text-bottom">
                                      {comment.comment}
                                    </span>
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

export default DailyCardModal
