import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
// 引入頁面
import Member from "./pages/Member";
import Login from "./pages/Home/Login";
// 錯誤頁面
import NotFound404 from "./pages/Home/NotFound404";
// 主頁面
import Home from "./pages/Home.js";
import Schedule from "./pages/Schedule.js"
import Store from "./pages/Store.js";
import Community from "./pages/Community.js"
import Assistance from "./pages/Assistance.js"

// 引入元件
import MyNav from "./component/UI/MyNav";
import ScrollToTop from "./component/UI/ScrollToTop";
import Footer from "./component/UI/Footer";



function App() {

  return (
    <Router>
      <>
        <MyNav />
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
                <Login/>
              </Route>
              <Route path="/" exact>
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
