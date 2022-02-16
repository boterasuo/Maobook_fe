import React, { useState } from 'react';
import { Table } from "react-bootstrap";
// 引入 user context
import { useAuth } from '../../../context/auth';
// 引入 utils
import { API_URL } from '../../../utils/config';
// 引入 icon
import { BsPencilSquare } from "react-icons/bs";
// 引入預設大頭照
import defaultAvatar from "../../../img/avatar_user.png";
import axios from 'axios';

function MemberData(props) {
    const [avatar, setAvatar] = useState(defaultAvatar);
  // 來自 context 的 user 狀態
  const {user, setUser} = useAuth();

  // 取得使用者詳細資料
  let getUserInfo = async () => {
    try {
      let result = await axios.get(`${API_URL}/member/info`, {withCredentials: true,});
      console.log(result.data);
    } catch(e) {
      console.error("user info 錯誤", e.response.data);
    }
  }
  getUserInfo();
  console.log(user);

  return (
    <>
        <div className="row position-relative">
                {/* 大頭照區域 */}
                <div className="col-lg-5 w-100">
                  <div className="embed-responsive embed-responsive-1by1 avatar">
                    <img alt="" className="cover-fit embed-responsive-item" src={avatar}/>
                  </div>
                  {/* 使用者姓名變數 */}
                  <div className="text-center pt-3 h4 text-secondary font-weight-bold">
                    {user ? user.name : "處理中"}
                  </div>
                </div>
                {/* 個人資料表格 */}
                <div className="col-lg-7 text-nowrap info-table">
                  <Table borderless size="sm" responsive="sm">
                    <tbody>
                      <tr>
                        <td>帳號</td>
                        <td className="text-grey">{user ? user.email : "處理中"}</td>
                      </tr>
                      <tr>
                        <td>密碼</td>
                        <td  className="text-grey">**********</td>
                      </tr>
                      <tr>
                        <td><br className="d-lg-block d-none"/></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>性別</td>
                        <td>男</td>
                      </tr>
                      <tr>
                        <td>手機</td>
                        <td>0912-345-678</td>
                      </tr>
                      <tr>
                        <td>生日</td>
                        <td>1999 / 12 / 25</td>
                      </tr>
                      <tr>
                        <td>信箱</td>
                        <td>{user ? user.email : "處理中"}</td>
                      </tr>
                      <tr>
                        <td>地址</td>
                        <td>桃園市中壢區聖德基督學院</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <button className="edit-icon" title="編輯會員資料">
                  <BsPencilSquare color="white" fontSize="1.3rem" />
                </button>


            </div>
    </>
  )
}


export default MemberData;
