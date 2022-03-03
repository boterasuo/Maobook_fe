import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { API_URL } from "../../utils/config"

import { ButtonGroup, Button, Form } from 'react-bootstrap'
import './components/HelpPost.scss'
import cameraicon from './img/camera.svg'

function HelpPost(props) {
  return (
    <>
      <h1 className="helpposttitle1">忙碌的你</h1>

      <div className="bg-primary position-relative">
        <div className="helppost">
          <h2 className="helpposttitle2">需要幫忙嗎</h2>

          <div className="helppostinput">
            <div className="helppostimage">
              <img src={cameraicon} className="cameraicon" alt="" />
            </div>
            <div className="helppostcategory">
              <buttongroup vertical>
                <button className="buttondog"> 狗狗</button>
                <button className="buttoncat"> 貓貓</button>
              </buttongroup>
            </div>

            <div className="helppostinfo">
              <div className="helppostdate">
                <input
                  className="helpchoosedate"
                  type="date"
                  value="2022-03-11"
                  min="2022-01-01"
                  max="2099-12-31"
                />
                <div className="helpdropdownregion">
                  <button
                    className="dropdown-toggle takemaoout"
                    type="button"
                    id="helpdropdownregion"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    選擇地區
                  </button>
                  <div className="dropdown-menu" aria-labelledby="helpdropdownregion">
                    <button className="dropdown-item" type="button">
                      台北市
                    </button>
                    <button className="dropdown-item" type="button">
                      桃園市
                    </button>
                    <button className="dropdown-item" type="button">
                      台中市
                    </button>
                    <button className="dropdown-item" type="button">
                      台南市
                    </button>
                    <button className="dropdown-item" type="button">
                      高雄市
                    </button>
                  </div>
                </div>
                <form>
                  <label for="fname" className="helppostpricetitle">
                    報酬 $
                  </label>
                  <input
                    className="helppostprice"
                    type="text"
                    id="fname"
                    name="fname"
                  />
                </form>
              </div>
              <div className="helpposttag">
              <buttongroup>
                <button className="helptag1">代遛</button>
                <button className="helptag2">代買</button>
                <button className="helptag3">收養</button>
                <button className="helptag4">借宿</button>
                <button className="helptag5">便車</button>
                <button className="helptag6">其他</button>
                </buttongroup>
              </div>
            </div>

            <div className="helpposttext">
              <div className="helpposttitleandcontent">
                <Form>
                  <textarea className="givertitle">標題</textarea>
                  <textarea className="helptextarea">案件內容</textarea>
                </Form>
              </div>
              <button className="helpSummitButton">送 出</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HelpPost

{
  /* <div className="container">
      
<div className="">忙碌的你</div>

</div>

<div className="container" style={ { border: "2px orange solid" ,background: "orange"} }>    

<div className="">需要幫忙嗎</div><br/>

<div className="mainpost" style={ { border: "1px orange solid", display:"flex"} }>

<div className="img" style={ { border: "1px white solid"} }>img</div>
<div className="tag" style={ { border: "1px white solid"} }>tag</div>
<div className="textarea" style={ { border: "1px white solid"} }>textarea</div>
<div className="price" style={ { border: "1px white solid"} }>price</div>
<div className="postbutton" style={ { border: "1px white solid"} }>送出</div>

</div>

<hr/>
<div className="">免責聲明</div>

</div> */
}
