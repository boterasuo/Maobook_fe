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

//\\ [[[彈出視窗]]] //\\
function CardModal(modalProps) {
  // 右側: 貼文區 \\
  // [[[留言列表 comment-list]]] \\
  const commentArr = ['頭香~']

  const lists = []

  //  編號 for迴圈
  for (let i = 1; i <= commentArr.length; i++) {
    lists.push(<div className="comment-no py-2 mt-2 mr-1">B{i}</div>)
  }
  const CommentList = () => {
    return (
      <>
        <li className="comment-list-rows">
          {lists}
          {/* 頭貼 */}
          <div className="commenter-avatar mx-1 py-2 bd-highlight my-2">
            <img />
          </div>
          {commentArr.map((item) => (
            <div className="comment-border px-3 py-2 bd-highlight flex-fill ">
              {item}
            </div>
          ))}
        </li>
      </>
    )
  }
  // [[[留言列表 end]]] \\

  // \\ 貼文區 // \\
  function DailyCardPost(props) {
    const { dairyInfo, setDiaryInfo } = props
    const { user, setUser } = useAuth()
    //卡片大頭貼
    const [avatar, setAvatar] = useState('')
    // Hashtag
    const [hashtags, setHashTag] = useState('')

    // 處理會員
    // const { user, setUser } = useAuth()

    // 取得使用者詳細資料
    useEffect(() => {
      let getDiaryInfo = async () => {
        try {
          let result = await axios.get(`${API_URL}/social-diary`, {
            withCredentials: true,
          })
          console.log(result.data.data)
          setDiaryInfo(result.data.data)
        } catch (e) {
          console.error('card info 錯誤', e.response.data)
        }
      }
      getDiaryInfo()
    }, [])

    return (
      <>
        {' '}
        {
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
              <Row className="mt-4">
                <Col className="">
                  <Row>
                    <Col sm={2} md={2}>
                      {/* 大頭貼 */}
                      <div className="daily-post-avatar "></div>
                    </Col>
                    <Col sm={3} md={3}>
                      大毛
                      <br />
                      ＠maobook
                    </Col>
                    <Col
                      sm={{ span: 5, offset: 2 }}
                      md={{ span: 5, offset: 2 }}
                    >
                      2021年9月16日 15:55
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
                      <h4>好味小姐貓年菜</h4>
                      <h6 className="text-muted">2021年9月16日 15:55</h6>
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
                    <Col className="text-indent">
                      {' '}
                      抱歉我話可能了什麼比較之前能。般後是一樣熊先生是
                      ，界的我要都可的文章。到他啊的夜晚村民打電聖誕節：啊
                      啊麼從來沒那時候⋯你自己交換以在想到，之後我占卜結⋯安
                      達我感一想好你就是了是現在，這集認親卡他們幾次是單看
                      看這次。抱歉我話可能了什麼比較之前能。般後是一樣熊先生是
                      ，界的我要都可的文章。到他啊的夜晚村民打電聖誕節：啊
                      啊麼從來沒那時候⋯
                    </Col>
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
                    <CommentList />
                    <CommentList />
                    <CommentList />
                    {/* 留言列表end */}
                  </ul>
                </Col>
              </Row>
              {/* 留言 end */}
            </Container>
          </>
        }
      </>
    )
  }
  //\\ [[[彈出視窗end]]] //\\

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
            <DailyCardCarousel />
          </Col>
          <Col xs={6} md={6} className=" w-100 h-100 px-5 overflow-y-scroll">
            <DailyCardPost />
          </Col>
        </Row>
      </Container>
    </Modal>
  )
}

// 卡片 card
function Card(props) {
  const [modalShow, setModalShow] = React.useState(false)

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
              <Hashtag style={{ width: '100%' }} className="hash-tag" />
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
      <CardModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default Card
