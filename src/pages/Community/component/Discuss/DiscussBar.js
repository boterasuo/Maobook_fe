import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'

// 引入 utils
import { API_URL, IMG_URL } from '../../../../utils/config'
// 樣式
import './style/DiscussBar.scss'
// 元件
import DiscussModal from './DiscussModal'
// 插圖
import rightArrow from './images/icon-right-arrow.svg'

function DiscussBar(props) {
  // 彈跳視窗
  const [barModalShow, setBarModalShow] = React.useState(false)
  //討論內容
  const [bars, setBars] = useState([])
  const [barID, setBarID] = useState()
  console.log('barIDFU', barID)
  // 在打開卡片的Detail
  const openBarDetail = (findBarId) => {
    setBarID(findBarId)
    // setInputComment({ ...inputComment, cardID: findCardId })
  }
  // Bar-List API
  useEffect(() => {
    let getCardList = async () => {
      try {
        let BarResponse = await axios.get(`${API_URL}/discuss/bar-list`)
        console.log('BarResponse', BarResponse.data)
        setBars(BarResponse.data)
        // console.log(tag)
        console.log('所有資料.data:  ', BarResponse.data)
      } catch (e) {
        // console.error('Get card-list Error', e.CadListResponse.data)
      }
    }
    getCardList()
  }, [])
  return (
    <>
      {bars.map((bar) => {
        return (
          <>
            <div
              className="bars pointer"
              key={bar.id}
              id={bar.id}
              onClick={() => {
                setBarModalShow(true)
                openBarDetail(bar.id)
                setBarID(bar.id)
              }}
            >
              <div className="head-date">
                {bar.month}/{bar.date}
              </div>
              <img
                className="daily-avatar rounded-circle bg-secondary"
                src={`${IMG_URL}${bar.avatar}`}
              />
              <div className="data-display bg-white">
                {/* <div className="category">{bar.category}</div> */}
                <div className="tags">{bar.category}</div>
                <div className="bar-title text-truncate">{bar.tittle}</div>
                <div className="bar-title text-truncate">{bar.content}</div>
                <div className="arrowicon">
                  <img src={rightArrow} alt="" />
                </div>
              </div>
            </div>
          </>
        )
      })}
      <DiscussModal
        show={barModalShow}
        onHide={() => setBarModalShow(false)}
        barID={barID}
      />
    </>
  )
}

DiscussBar.propTypes = {}

export default DiscussBar
