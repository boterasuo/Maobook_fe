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


function App() {
  // 全域狀態
  const [auth, setAuth] = useState(false)
  const [user, setUser] = useState({ id: 0, name: '' })

  return (
    <Router>
      <MyNavbar/>
      <MainContent auth={auth} user={user}>
      <Switch>
        <Route path="/community">
          <Community/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="*">
          <NotFound404/>
        </Route>
      </Switch>
      </MainContent>
      
    </Router>
  );
}

export default App;
