import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown, Table } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/config";

// 引入 user context
import { useAuth } from '../context/auth';

// 引入樣式和圖片
import "./Member.scss"
import loading from "../img/loading_paw.svg";

// 引入元件
import MemberData from './Member/MemberData/MemberData';
import PetList from "./Member/PetList/PetList"

function Member(props) {
  // 來自 context 的 user 狀態
  const {user, setUser} = useAuth();
  const history = useHistory();
  console.log(user);

  const [selectedPage, setSelectedPage] = useState("member");
  
  // 狀態切換轉頁
  const switchPage = (page) => {
    switch(page) {
      case "member":
        return <MemberData/>
      case "pet":
        return <PetList/>
      default:
        return <MemberData/>
    }
  }

  // loading 動圖
  const loadingPaw = (
    <div className="text-center">
        <div className="spinner-grow text-primary" role="status">
          <img alt="" className="sr-only" src={loading} />
        </div>
    </div>    
  );
  // 會員後台頁面
  const memberPage = (
    <div className="member-content">
      <div className="container h-100">
        <div className="row">
          <div className="col-lg-2 member-sidenav">
            <Nav 
              defaultActiveKey="member" 
              onSelect={(selectedKey) => setSelectedPage(selectedKey)}
              className="flex-row flex-lg-column justify-content-start text-right">
              <Nav.Link eventKey="member" className="d-md-block d-none">會員資料</Nav.Link>
              <Nav.Link eventKey="pet" className="d-md-block d-none">毛孩資料</Nav.Link>
              <Nav.Link eventKey="order" className="d-md-block d-none">選物紀錄</Nav.Link>
              <Nav.Link eventKey="community" className="d-md-block d-none">社群紀錄</Nav.Link>
              <Nav.Link eventKey="assitance" className="d-md-block d-none">互助紀錄</Nav.Link>
              <NavDropdown title="會員資料" id="nav-dropdown" className="d-md-none">
                <NavDropdown.Item eventKey="member">會員資料</NavDropdown.Item>
                <NavDropdown.Item eventKey="pet">毛孩資料</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="會員紀錄" id="nav-dropdown" className="d-md-none">
                <NavDropdown.Item eventKey="order">選物紀錄</NavDropdown.Item>
                <NavDropdown.Item eventKey="community">社群紀錄</NavDropdown.Item>
                <NavDropdown.Item eventKey="assitance">互助紀錄</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
          <div className="col-lg-10 member-info">
            { user ? (switchPage(selectedPage)) : loadingPaw }
                        
          </div>
        </div>
      </div>
    </div>
  );

  // const {auth, user, setUser} = props;
  // let userSession = {};
  // 登入成功 --> user 狀態存入對應資料 (舊寫法可忽略)
  // TODO: 這樣寫才可以成功將 session 資料存入 user 狀態 (why?)
  // useEffect(() => {
  //   let getUserSession = async () => {
  //     let response = await axios.get(`${API_URL}/member`, {
  //       withCredentials: true,
  //     });
  //     console.log("member頁面: ", response.data);
  //     userSession = response.data;
  //     console.log(userSession);
  //     setUser({...user, 
  //       id:userSession.id,
  //       name:userSession.name,
  //       email:userSession.email,
  //       image:userSession.image,
  //     });    
  //   };
  //   getUserSession();
  // }, []);
  // console.log(user);

  // TODO: 重新檢查登入狀態, 不然重新整理的話會壞掉 
  // App.js 那邊也有檢查, 為什麼要再檢查一次??
  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       let result = await axios.get(`${API_URL}/member`, {
  //             withCredentials: true,
  //           });
  //           console.log(result);
  //           setUser(result.data);
  //           console.log(user);
  //     } catch(e) {
  //       console.error(e.response.data);
  //     }
  //   };
  //   getUser();
  // },[]);

  
  // TODO: 未登入者導頁
  useEffect(() => {
    const getUser = async () => {
      try {
        let result = await axios.get(`${API_URL}/member`, {
              withCredentials: true,
            });
            console.log("member try catch:", result);
      } catch(e) {
        console.error(e.response.data);
        if (e.response.data) {
          alert("尚未登入");
          history.push("/login");
        }        
      }
    };
    getUser();
  },[])

  return (
    <>
      { user ? memberPage : loadingPaw }
    </>    
  )
}


export default Member
