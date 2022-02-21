import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink} from "react-router-dom";
// 引入 context
import { useAuth } from "../../../context/auth";
// 引入 utils
import { API_URL, IMG_URL } from "../../../utils/config";
// 引入圖片 icon scss
import defaultPet from "../../../img/avatar_pet.png";
import { BsPlusLg } from "react-icons/bs";
import loading from "../../../img/loading_paw.svg";
import "./PetList.scss";

function PetList(props) {
  const {user, setUser} = useAuth();
  const [petList, setPetList] = useState([]);
  console.log("petList:", user);
  const loadingPaw = (
        <div className="text-center">
          <div className="spinner-grow text-primary" role="status">
            <img alt="" className="sr-only" src={loading} />
          </div>
        </div>
  );

  // 取得毛孩列表
  useEffect(() => {
    let getPetList = async () => {
      try {
        let result = await axios.get(`${API_URL}/pet`, {withCredentials: true,});
        console.log(result.data.data);
        setPetList(result.data.data);
      } catch(e) {
        console.error("pet list 錯誤", e.response.data);
        
      }
    };
    getPetList();
  }, []);

  return (
      <div className="info-card text-secondary">
        <h3>
          毛孩列表
        </h3>
        <div className="d-flex justify-content-around flex-wrap">
          {petList.map((pet, i) => {
            return (
              <div key={pet.id} className="d-flex flex-column">
                <div className="embed-responsive embed-responsive-1by1 pet-avatar">
                    <img alt="" className="avatar-cover-fit embed-responsive-item" 
                      src={pet.image.length ? `${IMG_URL}${pet.image}` : defaultPet}/>
                </div>
                <div className="text-center">{pet.name}</div>
              </div>
            )
          })}
            <NavLink to="/member/pet/add" className="align-self-center">
              <div className="add-pet-btn position-relative" title="新增毛孩">
                    <BsPlusLg className="plus-icon"/>
              </div>
            </NavLink>
        </div>                
      </div>

  )
}


export default PetList
