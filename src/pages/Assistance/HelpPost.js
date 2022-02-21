import React from 'react';
import {ButtonGroup , Button , Form} from 'react-bootstrap';
import './components/HelpPost.scss';
import cameraicon from './img/camera.svg';

function HelpPost(props) {
  return (
    <>
    <h1 className="postH1">忙碌的你</h1>

    <div className="bg-primary position-relative">
      <div className="helppost"> 
        <h2 className="postH2">需要幫忙嗎</h2>

        <div className="postinput">
          <div className="postDate"> 
            <img src={cameraicon} className="cameraicon" alt=""/>  
          </div>
          <div className="postClass ">
            <buttongroup vertical>
              <button className="button1 lg"> 狗狗</button>
              <button className="button2 lg"> 貓貓</button>
            </buttongroup>
          </div>

          <div className="postTag">
            <div className="postTag1">
            <input className="helpdata" type="date" value="2020-06-25" min="2020-01-01" max="2020-12-31" />
              <div class="dropdown">
                <button class="dropdown-toggle takemaoout" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  地區
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <button class="dropdown-item" type="button">台北市</button>
                  <button class="dropdown-item" type="button">桃園市</button>
                  <button class="dropdown-item" type="button">台中市</button>
                  <button class="dropdown-item" type="button">台南市</button>
                  <button class="dropdown-item" type="button">高雄市</button>
                </div>
              </div>
              <form>
                <label for="fname" className="postLabel">$</label>
                <input className="scheduleInput" type="text" id="fname" name="fname" />
              </form>

            </div>
            <div className="postTag2">
                <button className="tagIcon1">代遛</button>
                <button className="tagIcon2">代買</button>
                <button className="tagIcon3">收養</button>
                <button className="tagIcon4">借宿</button>
                <button className="tagIcon5">便車</button>
                <button className="tagIcon6">其他</button>
            </div>
          </div>
      
          <div className="postSaySomethingdiv">
            <div className="postSaySomething">
              <Form>
              <textarea className="givertitle">標題</textarea>
              <textarea className="helptextarea" >案件內容</textarea>
              </Form>
            </div>
            {/* <div className="buttonDiv"> */}
              <button className="helpSummitButton">送  出</button>
            {/* </div> */}
          </div>



        </div>
      </div>
    </div>
    </>
  )
}


export default HelpPost;



{/* <div className="container">
      
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

</div> */}