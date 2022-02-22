import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Table, Modal, Button } from "react-bootstrap";
import axios from "axios";

// 引入 utils
import { API_URL, IMG_URL } from "../../../utils/config";

// 引入 圖片 icon css
import { BsReply, BsPencilSquare } from "react-icons/bs";
import defaultAvatar from "../../../img/avatar_user.png";
import "./MemberEdit.scss";

function MemberEdit(props) {
  const history = useHistory();
  const { userInfo, setUserInfo } = props;
  console.log(userInfo);
  const [preview, setPreview] = useState("");
  const [editErr, setEditErr] = useState({
    mobile: "",
    birthday: "",
  });
  // Modal 切換顯示狀態用
  const [showModal, setShowModal] = useState(false);

  // 性別 radio
  const genderValues = ["1", "2", "3"];
  const genderOptions = ["生理男", "生理女", "不透漏"];

  function handleChange(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    setEditErr({ ...editErr, [e.target.name]: "" });
  }

  // 圖片預覽函式
  function handlePreview(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      function () {
        setPreview(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleImage(e) {
    setUserInfo({ ...userInfo, image: e.target.files[0] });
  }

  // 表單有不合法的檢查出現時
  // name 欄位前端檢查
  const handleNameInvalid = (e) => {
    e.preventDefault();
    if (!e.target.value) {
      setEditErr({ ...editErr, [e.target.name]: "此欄位不可為空" });
    }
  };
  // mobile 欄位前端檢查
  const handleMobileInvalid = (e) => {
    e.preventDefault();
    const regMobile = /^09\d{8}$/;
    if (e.target.value && !regMobile.test(e.target.value)) {
      setEditErr({ ...editErr, [e.target.name]: "手機號碼格式不符" });
    }
  };
  // birthday 欄位前端檢查
  const handleBirthInvalid = (e) => {
    e.preventDefault();
    const today = Date.parse(new Date().toDateString());
    const inputDate = Date.parse(e.target.value);
    console.log(today, inputDate);
    if (e.target.value && inputDate > today) {
      setEditErr({ ...editErr, [e.target.name]: "請選擇早於今天的日期" });
    }
  };

  // 上傳圖片用 formData
  async function handleSubmit(e) {
    e.preventDefault();
    if (editErr.name || editErr.mobile || editErr.birthday) {
      return;
    } else {
      try {
        let formData = new FormData();
        formData.append("id", userInfo.id);
        formData.append("image", userInfo.image);
        formData.append("name", userInfo.name);
        formData.append("email", userInfo.email);
        formData.append("gender", userInfo.gender);
        formData.append("mobile", userInfo.mobile);
        formData.append("birthday", userInfo.birthday);
        formData.append("address", userInfo.address);

        let response = await axios.post(`${API_URL}/member/edit`, formData, {
          withCredentials: true,
        });
        console.log(response.data);
        if (response.data.message === "ok") {
          setShowModal(true);
        }
      } catch (e) {
        console.error("更新失敗: ", e.response.data);
        setEditErr({...editErr,
          name: e.response.data.name,
          mobile: e.response.data.mobile,
          birthday: e.response.data.birthday
        });
      };
    };
  };

  // 更改 Modal 顯示狀態函式
  const handleCloseModal = () => {
    setShowModal(false);
    history.push("/member/data");
  };
  // 註冊成功 Modal html
  const editModal = (
    <Modal show={showModal} onHide={handleCloseModal} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>修改成功！</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCloseModal}>
          確認
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <form className="row position-relative info-card">
      {editModal}
      {/* 大頭照區域 */}
      <div className="col-lg-5 w-100">
        <div className="embed-responsive embed-responsive-1by1 avatar-info position-relative">
          <img
            alt=""
            className="avatar-cover-fit embed-responsive-item"
            src={userInfo.image ? `${IMG_URL}${userInfo.image}` : defaultAvatar}
          />
          <img
            alt=""
            className="avatar-cover-fit embed-responsive-item"
            src={preview}
          />
          <div className="edit-avatar position-absolute">
            <label htmlFor="edit-avatar" className="position-absolute">
                    <BsPencilSquare color="white"/>
                <input
                    type="file"
                    name="image"
                    onChange={(e) => {handleImage(e);handlePreview(e)}}
                    id="edit-avatar"
                    className="d-none"
                />
            </label>
          </div>
        </div>
        {/* 使用者姓名變數 */}
        <div className="text-center pt-3 h4 text-secondary font-weight-bold">
          <input
            type="text"
            className="form-control text-center w-50 m-auto"
            name="name"
            value={userInfo.name}
            onChange={(e) => {
              handleChange(e);
              handleNameInvalid(e);
            }}
          />
          <div className="errMsg">{editErr.name ? editErr.name : ""}</div>
        </div>
      </div>
      {/* 個人資料表格 */}
      <div className="col-lg-7 text-nowrap info-table">
        <Table borderless size="sm" responsive="sm">
          <tbody>
            <tr>
              <td>帳號</td>
              <td className="text-grey">{userInfo.email} (帳號不可修改)</td>
            </tr>
            <tr>
              <td>密碼</td>
              <td>
                <button className="btn btn-secondary" title="修改密碼">
                  修改密碼
                </button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>性別</td>
              <td className="edit-gender">
                {genderValues.map((v, i) => {
                  return (
                    <div key={i} className="form-check-inline">
                      <input
                        type="radio"
                        id={v}
                        value={v}
                        checked={v === `${userInfo.gender}`}
                        onChange={handleChange}
                        name="gender"
                      />
                      <label
                        htmlFor={v}
                        className={
                          v === `${userInfo.gender}` ? "active-label" : ""
                        }
                      >
                        {genderOptions[i]}
                      </label>
                    </div>
                  );
                })}
                {/* <input 
                                type="text"
                                className="form-control"
                                name="gender"
                                value={editInfo.gender ? editInfo.gender : ""}
                                onChange={handleChange}
                            /> */}
              </td>
            </tr>
            <tr>
              <td>手機</td>
              <td>
                <input
                  type="tel"
                  className="form-control"
                  name="mobile"
                  value={userInfo.mobile ? userInfo.mobile : ""}
                  onChange={(e) => {
                    handleChange(e);
                    handleMobileInvalid(e);
                  }}
                />
                <div className="errMsg">
                  {editErr.mobile ? editErr.mobile : ""}
                </div>
              </td>
            </tr>
            <tr>
              <td>生日</td>
              <td>
                <input
                  type="date"
                  className="form-control"
                  name="birthday"
                  value={userInfo.birthday ? userInfo.birthday : ""}
                  onChange={(e) => {
                    handleChange(e);
                    handleBirthInvalid(e);
                  }}
                />
                <div className="errMsg">
                  {editErr.birthday ? editErr.birthday : ""}
                </div>
              </td>
            </tr>
            <tr>
              <td>信箱</td>
              <td>{userInfo.email} (信箱同帳號不可修改)</td>
            </tr>
            <tr>
              <td>地址</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={userInfo.address ? userInfo.address : ""}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <button className="edit-icon" title="儲存會員資料" onClick={handleSubmit}>
        <BsReply color="white" fontSize="1.6rem" />
      </button>
    </form>
  );
}

export default MemberEdit;
