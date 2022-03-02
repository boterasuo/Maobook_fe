import { Modal, Button, Row, Col, Carousel } from 'react-bootstrap'

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from "../../utils/config"

import './components/HelpDetail.scss'

import example from './img/helpexample.jpeg'
import emptypaw from './img/emptypaw.svg'
import helpclosebutton from './img/helpclosebutton.svg'
import fullpaw from './img/paw.svg'
import userimage from './img/helpuserimage.svg'

function HelpDetail(props) {
  const [data, setData] = useState([])

  useEffect(() => {
    let getHelpDetail = async () => {
      let response = await axios.get(
        `${API_URL}/help/helpdetails/1`
      )
      setData(response.data)
    }
    getHelpDetail()
  }, [])

  return (
    <>
      {data.map((data) => {
        return (
          <div className="helpdetails">
            <div className="lefeside">
              <img src={example} className="helpdetailimg" alt="" />
              {/* <img src={data.image} className="helpdetailimg" alt=""/> */}
            </div>

            <div className="rightside">
              <div className="righthead">
                <div className="helpdetailuser">
                  {/* {data.user_image} */}
                  <img src={userimage} className="helpdetailuserimage" alt="" />
                </div>
                <div className="helpdetailusername">
                  {data.user_name}
                  <br />@ Maobook
                </div>
                <div className="helpdetailclose">
                  <img
                    className="helpclosebutton"
                    src={helpclosebutton}
                    alt=""
                  />
                </div>
              </div>
              <hr className="rightdivider" />

              <div className="rightbody">
                <div className="bodyinfo1">
                  <div className="detailregion">{data.region}</div>
                  <div className="detailcategory">{data.category}</div>
                  <div className="detailtags">{data.tag_name}</div>
                  <div className="detailprice">報酬 NT$ {data.price}</div>
                  <div className="detailimg">
                    <img src={emptypaw} alt="" />
                  </div>
                </div>

                <div className="bodyinfo2">
                  <div className="detailcasetitle">{data.title}</div>
                  <div className="detailtime">{data.date}</div>
                </div>

                <div className="casecontent">{data.content}</div>

                <hr className="rightdivider" />

                <div className="rightfoot">
                  <div className="showpaw">
                    <img className="pawicon" src={fullpaw} alt="" />
                    <br />
                    <div className="pawtext">我要應徵</div>
                  </div>

                  <div className="takerpost">
                    <div className="contactchoice">
                      <div className="choosetitle">聯絡方式</div>
                      <div className="choosephone">提供手機</div>
                      <div className="chooseemail">提供信箱</div>
                    </div>

                    <div className="textpost">
                      <div className="takercontenttitle">我要留言</div>
                      <textarea className="takertextarea"></textarea>
                    </div>

                    <div className="sendpost">
                      <div className="takepostbutton">送出</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default HelpDetail
