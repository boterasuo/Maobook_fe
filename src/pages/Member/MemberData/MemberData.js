import React, { useState, useEffect } from 'react'
import { Table, Modal, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
// 引入 context
import { useAuth } from '../../../context/auth'
// 引入 utils
import { API_URL, IMG_URL } from '../../../utils/config'
// 引入 icon
import { BsPencilSquare } from 'react-icons/bs'
// 引入圖片
import defaultAvatar from '../../../img/avatar_user.png'
import loading from '../../../img/loading_paw.svg'

function MemberData(props) {
  const { userInfo, setUserInfo } = props
  const { user, setUser } = useAuth()
  // Modal 切換顯示狀態用
  // const [showModal, setShowModal] = useState(true);

  // 性別顯示用陣列
  const gender = ['尚未提供', '生理男', '生理女', '不透漏']

  // 取得使用者詳細資料
  useEffect(() => {
    let getUserInfo = async () => {
      try {
        let result = await axios.get(`${API_URL}/member/info`, {
          withCredentials: true,
        })
        console.log(result.data.data)
        const infoResult = result.data.data
        setUserInfo({
          ...userInfo,
          id: infoResult.id,
          image: infoResult.image,
          name: infoResult.name,
          email: infoResult.email,
          gender: infoResult.gender,
          mobile: infoResult.mobile,
          birthday: infoResult.birthday,
          address: infoResult.address,
        })
      } catch (e) {
        console.error('user info 錯誤', e.response.data)
      }
    }
    getUserInfo()
  }, [])

  useEffect(() => {
    if (userInfo !== undefined) {
      console.log('not undefined!')
      setUser({ ...user, name: userInfo.name, image: userInfo.image })
    }
  }, [userInfo])

  // loading 腳掌動圖
  const loadingPaw = (
    <div className="text-center">
      <div className="spinner-grow text-primary" role="status">
        <img alt="" className="sr-only" src={loading} />
      </div>
    </div>
  )

  // 更改 Modal 顯示狀態函式
  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };
  // // 註冊成功 Modal html
  // const loginModal = (
  //     <Modal show={showModal} onHide={handleCloseModal} style={{borderBottom:"none"}} animation={false}>
  //     <Modal.Header closeButton>
  //       <Modal.Title>歡迎！{user && user.name}</Modal.Title>
  //     </Modal.Header>
  //     <Modal.Body>開始書寫您與毛孩的日記吧</Modal.Body>
  //   </Modal>
  // );
  // TODO: 如何判斷是剛登入才跳出 "歡迎" 的 Modal?

  return (
    <>
      {userInfo ? (
        <div className="info-card position-relative">
          {/* {loginModal} */}
          <div className="row">
            {/* 大頭照區域 */}
            <div className="col-lg-5 w-100">
              <div className="embed-responsive embed-responsive-1by1 avatar-info">
                <img
                  alt=""
                  className="avatar-cover-fit embed-responsive-item"
                  src={
                    userInfo.image
                      ? `${IMG_URL}${userInfo.image}`
                      : defaultAvatar
                  }
                />
              </div>
              {/* 使用者姓名變數 */}
              <div className="text-center pt-3 h4 text-secondary font-weight-bold">
                {userInfo.name ? userInfo.name : '未有資料'}
              </div>
            </div>
            {/* 個人資料表格 */}
            <div className="col-lg-7 text-nowrap info-table">
              <Table borderless size="sm" responsive="sm">
                <tbody>
                  <tr>
                    <td>帳號</td>
                    <td className="text-grey">
                      {userInfo.email ? userInfo.email : '未有資料'}
                    </td>
                  </tr>
                  <tr>
                    <td>密碼</td>
                    <td className="text-grey">**********</td>
                  </tr>
                  <tr className="d-lg-block d-none">
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>性別</td>
                    <td>
                      {userInfo.gender ? gender[userInfo.gender] : '尚未提供'}
                    </td>
                  </tr>
                  <tr>
                    <td>手機</td>
                    <td>{userInfo.mobile ? userInfo.mobile : '尚未提供'}</td>
                  </tr>
                  <tr>
                    <td>生日</td>
                    <td>
                      {userInfo.birthday ? userInfo.birthday : '尚未提供'}
                    </td>
                  </tr>
                  <tr>
                    <td>信箱</td>
                    <td>{userInfo.email ? userInfo.email : '尚未提供'}</td>
                  </tr>
                  <tr>
                    <td>地址</td>
                    <td>{userInfo.address ? userInfo.address : '尚未提供'}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <NavLink as={NavLink} to="/member/data/edit">
            <button className="edit-icon" title="編輯會員資料">
              <BsPencilSquare color="white" fontSize="1.3rem" />
            </button>
          </NavLink>
        </div>
      ) : (
        loadingPaw
      )}
    </>
  )
}

export default MemberData
