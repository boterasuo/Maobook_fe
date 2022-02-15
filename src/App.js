import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

// 錯誤頁面
import NotFound404 from "./pages/Home/NotFound404";
// 引入 utils
import {API_URL} from "./utils/config";
// 主頁面
import Home from "./pages/Home.js";
import Login from "./pages/Home/Login";
import Schedule from "./pages/Schedule.js"
import Store from "./pages/Store.js";
import Community from "./pages/Community.js"
import Assistance from "./pages/Assistance.js"

// 引入元件
import MyNav from "./component/UI/MyNav";
import ScrollToTop from "./component/UI/ScrollToTop";
import Footer from "./component/UI/Footer";
import axios from 'axios';


function App() {
  
  const [auth, setAuth] = useState(false);
  // 檢查登入狀態函式
  let checkLogin = async () => {
    try {
      let response = await axios.get(`${API_URL}/member`, {
        withCredentials: true,
      });
      if(response.data.id > 0) {
        setAuth(true);
      };
    } catch(e){
      console.log(e.response.data);
    }
  };
  // 檢查登入狀態
  // 若有查到 session --> 更改 auth 為 true
  useEffect(() => {
    if(!auth) {
      checkLogin();
    }
  },[]);


  return (
    <Router>
      <>
        <MyNav auth={auth} setAuth={setAuth} />
          <ScrollToTop>
            <Switch>
              <Route path="/Assistance">
                <Assistance />
              </Route>
              <Route path="/Community">
                <Community />
              </Route>
              <Route path="/store">
                <Store />
              </Route>
              <Route path="/Schedule">
                <Schedule />
              </Route>
              <Route path="/Home">
                <Home />
              </Route>
              <Route path="/login">
                <Login auth={auth} setAuth={setAuth} />
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
  )
}

export default App;
