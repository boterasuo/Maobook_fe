import React, { useState, useEffect } from 'react';
import { Nav, NavDropdown, Table } from "react-bootstrap";
import { NavLink, Route, Switch, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/config";

// 引入 user context
import { useAuth } from '../context/auth';

// 引入樣式和圖片
import "./Member.scss"
import loading from "../img/loading_paw.svg";

// 引入元件
import MemberData from './Member/MemberData/MemberData';
import PetList from "./Member/PetList/PetList";
import OrderHistory from "./Member/OrderHistory/OrderHistory";
import CommunityHistory from "./Member/CommunityHistory/CommunityHistory";
import AssistanceHistory from "./Member/AssistanceHistory/AssistanceHistory";


function Member(props) {
  // 來自 context 的 user 狀態
  const {user, setUser} = useAuth();
  const history = useHistory();
  console.log(user);

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
        {/* side nav */}
          <div className="col-lg-2 member-sidenav">
          <nav className="d-flex flex-row flex-lg-column justify-content-center text-right">
            <NavLink
              activeClassName="active"
              className="nav-link d-md-block d-none"
              to="/member/data">
              會員資料
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link d-md-block d-none"
              to="/member/pet">
              毛孩資料
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link d-md-block d-none"
              to="/member/order">
              選物紀錄
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link d-md-block d-none"
              to="/member/community">
              社群紀錄
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link d-md-block d-none"
              to="/member/assistance">
              互助紀錄
            </NavLink>
            <NavDropdown title="會員資料" id="nav-dropdown" className="d-md-none d-block">
              <NavDropdown.Item as={NavLink} to="/member/data">會員資料</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/pet">毛孩資料</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="會員紀錄" id="nav-dropdown" className="d-md-none d-block">
              <NavDropdown.Item as={NavLink} to="/member/order">選物紀錄</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/community">社群紀錄</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/assistance">互助紀錄</NavDropdown.Item>
            </NavDropdown>            
          </nav>
          </div>
          {/* 可切換資料卡 */}
          <div className="col-lg-10 member-info">
          <Switch>
            <Route path="/member/data">
              <MemberData />
            </Route>
            <Route path="/member/pet">
              <PetList />
            </Route>
            <Route path="/member/order">
              <OrderHistory />
            </Route>
            <Route path="/member/community">
              <CommunityHistory />
            </Route>
            <Route path="/member/assistance">
              <AssistanceHistory />
            </Route>
          </Switch>
            {/* { user ? (switchPage(selectedPage)) : loadingPaw } */}
                        
          </div>
        </div>
      </div>
    </div>
  );

  
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
