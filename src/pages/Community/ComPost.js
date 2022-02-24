import { ButtonGroup, Button, Form, Row, Col } from "react-bootstrap";
import "./style/ComPost.scss";

// 引入圖片
import photoUpload from "./images/icon-camera.svg";
import React from "react";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import 'react-icons'
import { GrPowerReset } from "react-icons/gr";

// 引入元件
// import second from '..'

function Post() {
//   // 相片上傳
//   class Uploader extends React.Component {
//     render() {
//       return (
//         <form className="uploader" encType="multipart/form-data">
//           <input type="file" id="file" multiple />
//         </form>
//       );
//     }
//   } //相片上傳end

  // 拖曳圖片
  const dropbox = document.getElementById("upload_zone");
  const preview = document.getElementById("preview");

  function handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();
    const fileUploader = document.getElementById("fileUploader");
    fileUploader.click();
  }

  const click = (e) => handleFileSelect(e);

  // prevent the default method working
  function dragenter(e) {
    // add the styling to div
    dropbox.classList.add("upload_zone_enter");
    e.stopPropagation();
    e.preventDefault();
  }

  const dragleave = () => dropbox.classList.remove("upload_zone_enter");

  // prevent the default method working
  function dragover(e) {
    e.stopPropagation();
    e.dragover().stopPropagation();
    e.preventDefault();
  }

  function handleFiles(files) {
    for (var i = 0; i < files.length; i++) {
      const file = files[i];
      const imageType = /image.*/;

      if (!file.type.match(imageType)) {
        continue;
      }

      const img = document.createElement("img");
      img.classList.add("obj");
      img.file = file;
      preview.appendChild(img);

      const reader = new FileReader();
      reader.onload = (e) => (img.src = e.target.result);
      reader.readAsDataURL(file);

    }
  }

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    const dt = e.dataTransfer;
    const files = dt.files;

    handleFiles(files);
    dropbox.classList.remove("upload_zone_enter");
  }
  // function preventer(e) {
  //   e.preventDefault();
    // dropbox.addEventListener("click", click, false);
    // dropbox.addEventListener("dragenter", dragenter, false);
    // dropbox.addEventListener("dragleave", dragleave, false);
    // dropbox.addEventListener("dragover", dragover, false);
    // dropbox.addEventListener("drop", drop, false);
  // }
  function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  
  function dragover(e) {
    e.dragover.stopPropagation();
    e.preventDefault();
  }
  // 拖曳圖片 end //

  return (
    <div id="Post-Page">
      {/* 標題 */}
      <h1 className="post-h1">今天</h1>
      <div className="bg-primary position-relative">
        <div className="community-post">
          <h2 className="post-h2">&emsp;想分享什麼嗎❓</h2>
          {/* 表單 */}
          <div className="post-controll mt-md-50 d-sm-inline-block d-md-inline-flex">
            <div className="postinput">
              {/* 相片上傳 */}
              <form className="img-uploader"  action="/action.php" encType="multipart/form-data">
                  <input
                  type="file"
                  id="fileUploader"
                  className=" d-none"
                  onchange={handleFiles}
                  multiple
                />
                {/* [[[DropBox]]] */}
                <div
                id="upload_zone" 
                className=" upload_zone"
                >
                  {/* 請將要上傳的圖片拖曳至此 */}
                </div>
                <div id="preview"></div>
              </form>
              {/* 發文模式切換 */}
              <div className="postClass ">
                <buttongroup vertical>
                  <button className="button1 l-01"> 日常 </button>
                  <button className="button2 l-01 "> 普通 </button>
                </buttongroup>
              </div>
              {/* 兩個標籤區 */}
              <div className="postTag">
                <div className="postTag1">
                  <form action="/action.php">
                    <label for="fname" className="postLabel">
                      ＃
                    </label>
                    <input
                      className="community-Input"
                      type="text"
                      id="fname"
                      name="fname"
                    />
                    <br />
                    <label for="lname" className="postLabel">
                      ＃
                    </label>
                    <input
                      className="community-Input"
                      type="text"
                      id="lname"
                      name="lname"
                    />
                  </form>
                </div>
                {/* 討論文：固定標籤 */}
                <div className="postTag2">
                  <label id="post-tag-1" className="btnIcon1">
                    <input type="checkbox" />
                    <a for="post-tag-1">問卦</a>
                  </label>

                  <label id="post-tag-2" className="btnIcon2">
                    <input type="checkbox" />
                    <a for="post-tag-2">求助</a>
                  </label>

                  <label className="btnIcon3">
                    <input id="post-tag-3" type="checkbox" />
                    <a for="post-tag-3">求助</a>
                  </label>

                  <label className="btnIcon4">
                    <input id="post-tag-4" type="checkbox" />
                    <a for="post-tag-4">黑特</a>
                  </label>
                </div>
              </div>
            </div>
            {/* 撰寫貼文區域 */}
            <div className="post-content-area d-sm-flex d-md-inline-flex mt-md-50 ">
              <div className="post-content-container">
                <div className="post-content-textarea">
                  <Form>
                    <textarea className="community-textarea filled-md-100">
                      寫一些記錄吧！
                    </textarea>
                  </Form>
                </div>
                <button className="community-submit">送 出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*postinput*/}
    </div> //Post-page
  );
}

// Member.propTypes = {}

export default Post;
