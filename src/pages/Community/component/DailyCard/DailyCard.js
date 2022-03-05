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
import axios from 'axios'
import 'sweetalert2'
import { getDate } from 'date-fns'
import { id } from 'date-fns/locale'
// 引入 context
import { useAuth } from '../../../../context/auth'
// 引入 utils
import { API_URL, IMG_URL } from '../../../../utils/config'
// 元件
import CardModal from './DailyCardModal'

// 插圖
import Hashtag from './HashTag'
import photo from './images/card-photo.svg'
import like from './images/icon-like.svg'
import comment from './images/icon-comment.svg'

// 卡片 card
function DailyCard(modalProps) {
  // 彈跳視窗
  const [modalShow, setModalShow] = React.useState(false)
  //卡片內容
  const [cards, setCards] = useState([])
  const [cardID, setCardID] = useState()
  console.log('cardID父元件', cardID)
  //卡片數量
  const [cardNum, setCardNum] = useState('')
  // 在打開卡片的Detail
  const openCardDetail = (findCardId) => {
    setCardID(findCardId)
    // setInputComment({ ...inputComment, cardID: findCardId })
  }
  // 最新一筆留言
  const [addComment, setAddComment] = useState([])

  // Card-List API
  useEffect(() => {
    let getCardList = async () => {
      try {
        let CadListResponse = await axios.get(`${API_URL}/daily/card-list`)
        // 欲取得後端 http://localhost:3005/api/daily/card-list 資料
        // 只顯示四個卡片
        let cardNum = 5
        console.log('CadListResponse', CadListResponse.data)

        let cardShow4 = CadListResponse.data.slice(0, cardNum)
        // var cardAdd() {
        //   cardNum += 4
        // }
        setCards(CadListResponse.data)
        // setCards(CadListResponse.data)
        // console.log('四張卡片', cardShow4)
        // console.log(tag)
        // console.log('所有資料.data:  ', CadListResponse.data)
      } catch (e) {
        // console.error('Get card-list Error', e.CadListResponse.data)
      }
    }
    getCardList()
  }, [])

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
                setCardID(card.id)
              }}
            >
              {/* [[[頭像、標籤Tag]]] */}
              <Container className="px-2">
                <Row className="card-tittle">
                  {/* <Col sm={1} md={1} lg={1}></Col> */}
                  <Col xs={4} sm={4} md={4} lg={4}>
                    <img
                      className="daily-avatar rounded-circle bg-secondary"
                      src={`${IMG_URL}${card.avatar}`}
                      alt={'daily-avatar'}
                    />
                  </Col>
                  {/* <Col xs={1} sm={1} md={1} lg={1}></Col> */}
                  <Col sm={8} md={8} className="hash-tags">
                    {card.tags.split(',').map((tag, i) => {
                      return (
                        <div className="hash-tag" key={card.id}>
                          #{tag}
                        </div>
                      )
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
              <div className="card-counter d-line-block text-center">
                {/* 按讚數 */}
                <a>
                  {card.likes} <img src={like} />
                </a>
                {/* 留言數 */}
                <a>
                  {card.comments} <img src={comment} />
                </a>
              </div>
            </div>
          </>
        )
      })}
      <button className="Add-btn"> 查看更多</button>
      <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cardID={cardID}
      />
    </>
  )
}

export default DailyCard
