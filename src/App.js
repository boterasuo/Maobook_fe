import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// 引入 context
import { AuthContext } from './context/auth';

// 引入 API 相關工具
import {API_URL} from "./utils/config";
import axios from 'axios';
// 錯誤頁面
import NotFound404 from "./pages/Home/NotFound404";
// 主頁面
import Home from "./pages/Home.js";
import Login from "./pages/Home/Login";
import Schedule from "./pages/Schedule.js"
import Store from "./pages/Store.js";
import Community from "./pages/Community.js";
import Assistance from "./pages/Assistance.js";
import Member from "./pages/Member.js";

// 引入元件
import MyNav from "./component/UI/MyNav";
// import Navbar from "./component/UI/Navbar";
import ScrollToTop from "./component/UI/ScrollToTop";
import Footer from "./component/UI/Footer";



function App() {
  const [user, setUser] = useState(null);
  // 舊寫法 (auth 狀態改設在 login page)
  // const [auth, setAuth] = useState(false);
  // 舊寫法 (改為 useContext)
  // const [user, setUser] = useState({
  //   id:"",
  //   name:"",
  //   email:"",
  //   image:"",
  // });
  // 檢查登入狀態函式 (舊寫法)
  // let checkLogin = async () => {
  //   try {
  //     let response = await axios.get(`${API_URL}/member`, {
  //       withCredentials: true,
  //     });
  //     console.log(response.data);
  //     if(response.data.id > 0) {
  //       setAuth(true);
        // 舊寫法 (改為 useContext)
        // setUser({...user, 
        //   id:response.data.id,
        //   name:response.data.name,
        //   email:response.data.email,
        //   image:response.data.image,
        // });
  //     };
  //   } catch(e){
  //     console.log(e.response.data);
  //   }
  // };
  // 檢查登入狀態 (新寫法: context)
  // 若有查到 session --> 重新設定 user 的內容
  useEffect(() => {
    const getUser = async () => {
      try {
        let result = await axios.get(`${API_URL}/member`, {
              withCredentials: true,
            });
            setUser(result.data);
      } catch(e) {
        console.error(e.response.data);
      }
    };
    getUser();
  },[]);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <>
          <MyNav />
            <ScrollToTop>
              <Switch>
                <Route path="/assistance">
                  <Assistance />
                </Route>
                <Route path="/community">
                  <Community />
                </Route>
                <Route path="/member">
                  <Member />
                </Route>
                <Route path="/store">
                  <Store />
                </Route>
                <Route path="/schedule">
                  <Schedule />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="*">
                  <NotFound404/>
                </Route>
              </Switch>
            </ScrollToTop> 
            <Footer/>
        </>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;
