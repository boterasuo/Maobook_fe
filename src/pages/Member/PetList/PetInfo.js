import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import { NavLink, withRouter, Link } from "react-router-dom";
import axios from "axios";
import differenceInMonths from "date-fns/differenceInMonths";
// 引入 context
import { useAuth } from "../../../context/auth";
// 引入 utils
import { API_URL, IMG_URL } from '../../../utils/config';
// 引入 icon
import { BsPencilSquare } from "react-icons/bs";
import defaultPet from "../../../img/avatar_pet.png";



function PetInfo(props) {
  const {pet, setPet, petList, setPetList} = props;
  // const [pet, setPet] = useState({
  //     id:"",
  //     user_id:"",
  //     name:"",
  //     image:"",
  //     arrDay:"",
  //     birthday:"",
  //     gender:"",
  //     cate:"",
  //     height:0,
  //     weight:0,
  //     vaccine:[],
  //     health:[],
  // });

  // 取得當前 pet id (來自 match params)
  const petId = parseInt(props.match.params.petId, 10);
  const foundPet = petList.find((v, i) => v.id === petId);
  // 性別顯示用陣列
  const gender = ["尚未提供", "男孩", "女孩", "不確定"];
  // 種類顯示用陣列
  const category = ["尚未提供", "狗狗", "貓貓"];
  // 年齡分類顯示用陣列
  const ageCate = ["尚未提供生日", "幼齡", "成年", "熟齡"];
  // 疫苗 checkbox
  const vaccineValues = ["1", "2", "3"];
  const vaccineOptions = ["三合一", "五合一", "狂犬病"];
  // 健康狀態 checkbox
  const healthValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const healthOptions = ["慢性腎衰竭", "糖尿病", "下泌尿道症候群", "體重過重", "關節炎", "腸胃敏感", "皮膚敏感", "心臟疾病", "心血管疾病"];
  // 有時間的話改將 vaccine 和 health 統一存入 pet 狀態中 --> done
  // 這樣就只要改變一次狀態就好

  // 處理歲數 TODO: 應可將歲數處理改寫成 function ?
  let ageY, ageM;
  if (pet.birthday) {
      const today = new Date();
      let todayY = today.getFullYear();
      let todayM = today.getMonth();
      let todayD = today.getDate();
      // console.log("today", todayY, todayM, todayD);
      let birthY = pet.birthday.split("-")[0];
      let birthM = parseInt(pet.birthday.split("-")[1]) - 1;
      if (birthM <10) {
          birthM = `0${birthM}`;
      }
      let birthD = pet.birthday.split("-")[2];
    //   console.log("birthday", birthY, birthM, birthD);
      let monthDiff = differenceInMonths(new Date(todayY, todayM, todayD), new Date(birthY, birthM, birthD));
      ageY = Math.floor(monthDiff / 12);
      ageM = monthDiff % 12;
  }


  useEffect(() => {
    if (foundPet) {
        console.log("foundPet", foundPet);
        const getMoreInfo = async () => {
            let result = await axios.get(`${API_URL}/pet/info/${petId}`, 
            {withCredentials: true});
            console.log(result.data);
            setPet({
                id:foundPet.id,
                user_id:foundPet.user_id,
                name:foundPet.name,
                image:foundPet.image,
                arrDay:foundPet.adoptime,
                birthday:foundPet.birthday,
                ageCate: foundPet.age_category,
                gender:foundPet.gender,
                cate:foundPet.category,
                height:result.data.height,
                weight:result.data.weight,
                vaccine: [...result.data.vaccine],
                health: [...result.data.health],
            });
        };
        getMoreInfo();
    } else console.log("no data!");
  }, []);

  return (
    <div className="row position-relative info-card">
        {/* {loginModal} */}
        {/* 大頭照區域 */}
        <div className="col-lg-5 w-100">
            <div className="embed-responsive embed-responsive-1by1 avatar-info">
            <img alt="" className="avatar-cover-fit embed-responsive-item" src={pet.image ? `${IMG_URL}${pet.image}` : defaultPet}/>
            </div>
            {/* 使用者姓名變數 */}
            <div className="text-center pt-3 h4 text-secondary font-weight-bold">
            {pet.name ? pet.name : "未有資料"}
            </div>
        </div>
        {/* 個人資料表格 */}
        <div className="col-lg-7 text-nowrap info-table petList-table">
            <Table borderless size="sm" responsive="sm">
            <tbody>
                <tr>
                <td>到家日</td>
                <td>{pet.arrDay ? pet.arrDay : "尚未提供"}</td>
                </tr>
                <tr>
                <td>生日</td>
                <td>{pet.birthday ? pet.birthday : "尚未提供"}</td>
                </tr>
                <tr className="d-lg-block d-none">
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td>性別</td>
                <td>{pet.gender ? gender[pet.gender] : "尚未提供"}</td>
                </tr>
                <tr>
                <td>種類</td>
                <td>{pet.cate ? category[pet.cate] : "尚未提供"}</td>
                </tr>
                <tr>
                <td>年齡</td>
                <td>
                    {pet.ageCate ? `${ageCate[pet.ageCate]} (${ageY}歲${ageM}個月)` : 
                    "尚未提供"}
                </td>
                </tr>
                <tr>
                <td>體態</td>
                <td>
                    <div className="d-flex justify-content-center align-items-center">
                        {pet.height || pet.weight ? (
                            <div className="mx-1 newest-data">最新資料</div>
                        ) : ""}
                        {pet.height ? (<div className="mx-2">身長 {pet.height} cm</div>) : ""}
                        {pet.weight ? (<div className="mx-2">體重 {pet.weight} kg</div>) : ""}
                        {!pet.height && !pet.weight ? (
                            <div className="mx-1">尚未提供</div>
                        ) : ""}
                        
                    </div>
                </td>
                </tr>
                <tr>
                <td>疫苗</td>
                <td className="edit-gender readOnly-checkbox">
                    {vaccineValues.map((v, i) => {
                        return (
                            <div key={i} className="form-check-inline">
                            <input
                                type="checkbox"
                                name="vaccine"
                                id={`vaccine${v}`}
                                value={v}
                                defaultChecked={pet.vaccine.includes(v)}
                            />
                            <label
                                htmlFor={`vaccine${v}`}
                                className={
                                  pet.vaccine.includes(v) ? "active-label my-1" : "my-1"
                                }
                            >
                                {vaccineOptions[i]}
                            </label>
                            </div>
                        );
                    })}
                </td>
                </tr>
                <tr>
                <td className="align-baseline">狀態</td>
                <td className="edit-gender readOnly-checkbox">
                <div className="d-flex flex-wrap health-checkbox">                
                {healthValues.map((v, i) => {
                  return (
                    <div key={i}>
                      <input
                        type="checkbox"
                        name="health"
                        id={`health${v}`}
                        value={v}
                        defaultChecked={pet.health.includes(v)}
                      />
                      <label
                        htmlFor={`health${v}`}
                        className={
                          pet.health.includes(v) ? "active-label" : ""
                        }
                      >
                        {healthOptions[i]}
                      </label>
                    </div>
                  );
                })}
                </div>
              </td>
                </tr>
            </tbody>
            </Table>
        </div>
        <NavLink as={NavLink} to={`/member/pet/info/edit/${petId}`}>
            <button className="edit-icon" title="編輯毛孩資料">
            <BsPencilSquare color="white" fontSize="1.3rem" />
            </button>
        </NavLink>
    </div>
  )
}


export default withRouter(PetInfo)
