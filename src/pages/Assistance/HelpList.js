import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PropTypes from 'prop-types'
import { Form, FormControl, Button, Row, Col, Container } from 'react-bootstrap'
import { HiPlus } from 'react-icons/hi'

// 樣式
import './components/HelpList.scss'

// 插圖
import listtitle from './img/listtitle.svg'
import downpointer from './img/downpointer.svg'
import pen from './img/pen.svg'
import Hashtag from './components/HelpTag'
import userimage from './img/helpuserimage.svg'

// 插圖
import example from './img/helpexample.jpeg'

function HelpList(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    let cardData = async () => {
      let response = await axios.get(
        'http://localhost:3002/api/help/helpcard/台北市'
      )
      setData(response.data)
    }
    cardData()
  }, [])

  return (
    <>
      <div className="helplist">
        <div className="helplisttopbar">
          <img className="listtitle" src={listtitle} alt="" />

          <div className="listfilter">
            {/* 依地區 <img src={downpointer} alt="" /> */}
            <div class="dropdown">
              <button
                class="dropdown-toggle takemaoout"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                選擇地區
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button class="dropdown-item" type="button">
                  台北市
                </button>
                <button class="dropdown-item" type="button">
                  桃園市
                </button>
                <button class="dropdown-item" type="button">
                  台中市
                </button>
                <button class="dropdown-item" type="button">
                  台南市
                </button>
                <button class="dropdown-item" type="button">
                  高雄市
                </button>
              </div>
            </div>
          </div>
          <div className="listpost">
            <Button variant="outline-primary rounded-pill text-end">
              <HiPlus /> 發個文吧
            </Button>
            <img className="penimg" src={pen} alt="" />
          </div>
        </div>

        <div className="helppostarea border border-primary mao-rounded mt-lg-2 mt-md-2">
          <div className="helpcards">
            {data.map((data) => {
              return (
                <div className="helpsinglecard">
                  <div className="helpcardtop">
                    <div className="carduserimage">
                      {/* {data.user_image} */}
                      <img className="helpuserimage" src={userimage} alt="" />
                    </div>

                    <div className="cardcategoryandtag">
                      <div className="cardcategory"># {data.category}</div>
                      <div className="cardtagname"># {data.tag_name}</div>
                    </div>
                  </div>

                  <div className="helpcardbody">
                    <div className="upperbody">
                      <img
                        className="cardimage"
                        src={require('./img/' + [data.image])}
                        alt=""
                      />
                      <div className="cardbasicinfo">
                        <div className="carddate">
                          {data.date.substring(0, 10)}
                        </div>
                        <div className="cardregion">{data.region}</div>
                      </div>
                    </div>

                    <div className="lowerdody">
                      <div className="cardtitle">{data.title}</div>
                      <div className="cardcontent">{data.content}</div>
                    </div>
                  </div>

                  <div className="helpcardfooter">
                    <div className="cardprice">NT $ {data.price}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="listmorebutton">查看更多</div>
      </div>
    </>
  )
}

export default HelpList
