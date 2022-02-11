import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from 'react'

// 引入頁面
import Home from "./pages/Home";
import Login from "./pages/Home/Login";
import Community from "./pages/Community";
import NotFound404 from "./pages/Home/NotFound404";

// 引入元件
import MyNavbar from "./component/UI/MyNavbar";
import MainContent from "./component/UI/MainContent";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import MyNav from "./component/UI/MyNav";
import ScrollToTop from "./component/UI/ScrollToTop";
import Store from "./pages/Store.js";


function App() {
  // 全域狀態
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState({ id: 0, name: '' })

  return (
    <Router>
      <>
        <MyNav />
          <ScrollToTop>
            <Switch>
              <Route path="/store">
                <Store />
              </Route>
                <Home />
            </Switch>
          </ScrollToTop>
      </>
    </Router>
  )
}

export default App;
