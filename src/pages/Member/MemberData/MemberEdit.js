import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from 'axios';

// 引入 utils
import { API_URL, IMG_URL } from '../../../utils/config';

// 引入 圖片 icon
import { BsReply } from "react-icons/bs";
import defaultAvatar from "../../../img/avatar_user.png";


function MemberEdit(props) {
    const history = useHistory();
    const {userInfo} =props;
    const [preview, setPreview] = useState("");
    const [editInfo, setEditInfo] = useState({
        id:userInfo.id,
        image:userInfo.image,
        name:userInfo.name,
        email:userInfo.email,
        gender:userInfo.gender,
        mobile:userInfo.mobile,
        birthday:userInfo.birthday,
        address:userInfo.address,
    });
    
    // useEffect(() => {
    //     setEditInfo({...editInfo, 
    //         id:userInfo.id,
    //         image:userInfo.image,
    //         name:userInfo.name,
    //         email:userInfo.email,
    //         gender:userInfo.gender,
    //         mobile:userInfo.mobile,
    //         birthday:userInfo.birthday,
    //         address:userInfo.address,
    //     });
    //     console.log(userInfo);
    // }, []);
    
    function handleChange(e) {
        setEditInfo({...editInfo, [e.target.name]:e.target.value});
    };

    function handlePreview(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            setPreview(reader.result);
        }, false);

        if(file) {
            reader.readAsDataURL(file);
        }
    }

    function handleImage(e) {
        setEditInfo({...editInfo, image:e.target.files[0]});        
    };

    // 上傳圖片用 formData
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            let formData = new FormData();
            formData.append("id", editInfo.id);
            formData.append("image", editInfo.image);
            formData.append("name", editInfo.name);
            formData.append("email", editInfo.email);
            formData.append("gender", editInfo.gender);
            formData.append("mobile", editInfo.mobile);
            formData.append("birthday", editInfo.birthday);
            formData.append("address", editInfo.address);

            let response = await axios.post(`${API_URL}/member/edit`, formData, {
                withCredentials: true,
            });
            console.log(response.data);
            if(response.data.message === "ok") {
                alert("修改成功");
                window.location.reload();
            };

        } catch(e) {
            console.error("更新失敗: ", e.response.data);
        }
    }

  return (
    <form className="row position-relative info-card">
            {/* 大頭照區域 */}
            <div className="col-lg-5 w-100">
                <div className="embed-responsive embed-responsive-1by1 avatar">
                    <img alt="" className="cover-fit embed-responsive-item" src=
                    {editInfo.image ? `${IMG_URL}${editInfo.image}` : defaultAvatar}
                    />
                    <img alt="" className="cover-fit embed-responsive-item" src=
                    {preview}
                    />
                </div>
                <input 
                    type="file"
                    name="image"
                    onChange={(e) => {handleImage(e); handlePreview(e);}}
                />
                {/* 使用者姓名變數 */}
                <div className="text-center pt-3 h4 text-secondary font-weight-bold">
                    <input 
                        type="text"
                        className="form-control text-center w-50 m-auto"
                        name="name"
                        value={editInfo.name}
                        onChange={handleChange}
                    />
                </div>
            </div>
            {/* 個人資料表格 */}
            <div className="col-lg-7 text-nowrap info-table">
                <Table borderless size="sm" responsive="sm">
                    <tbody>
                      <tr>
                        <td>帳號</td>
                        <td className="text-grey">
                          {editInfo.email} (帳號不可修改)
                        </td>
                      </tr>
                      <tr>
                        <td>密碼</td>
                        <td>
                        <button className="btn btn-secondary" title="修改密碼" >
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
                        <td>
                            <input 
                                type="text"
                                className="form-control"
                                name="gender"
                                value={editInfo.gender ? editInfo.gender : ""}
                                onChange={handleChange}
                            />
                        </td>
                      </tr>
                      <tr>
                        <td>手機</td>
                        <td>
                            <input 
                                type="tel"
                                className="form-control"
                                name="mobile"
                                value={editInfo.mobile ? editInfo.mobile : ""}
                                onChange={handleChange}
                            />
                        </td>
                      </tr>
                      <tr>
                        <td>生日</td>
                        <td>
                            <input 
                                type="date"
                                className="form-control"
                                name="birthday"
                                value={editInfo.birthday ? editInfo.birthday : ""}
                                onChange={handleChange}
                            />
                        </td>
                      </tr>
                      <tr>
                        <td>信箱</td>
                        <td>
                            {editInfo.email} (信箱同帳號不可修改)
                        </td>
                      </tr>
                      <tr>
                        <td>地址</td>
                        <td>
                            <input 
                                type="text"
                                className="form-control"
                                name="address"
                                value={editInfo.address ? editInfo.address : ""}
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
  )
}


export default MemberEdit
