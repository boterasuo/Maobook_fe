import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
// 引入 context
import { AuthContext } from './context/auth';

//錯誤頁面
import NotFound404 from "./pages/Home/NotFound404";

//主頁面
// 引入 API 相關工具
import { API_URL } from "./utils/config";
import axios from 'axios';

// 主頁面
import Home from "./pages/Home.js";
import Login from "./pages/Home/Login";
import Schedule from "./pages/Schedule.js"
import Store from "./pages/Store.js";
import CartDetail from "./pages/Store/CartDetail";
import ProductDetails from "./pages/Store/ProductDetails";
import OrderDetail from "./pages/Store/OrderDetail";
import Community from "./pages/Community.js";
import Assistance from "./pages/Assistance.js";
import Member from "./pages/Member.js";
import PetDataTest from "./pages/PetDataTest.js";


// 引入元件
import MyNav from "./component/UI/MyNav";
// import Navbar from "./component/UI/Navbar";
import ScrollToTop from "./component/UI/ScrollToTop";
import Footer from "./component/UI/Footer";



function App() {
  const [user, setUser] = useState(null);
  
  // 避免重新整理時 user 狀態內的資料變回 null
  useEffect(() => {
    const getUser = async () => {
      try {
        let result = await axios.get(`${API_URL}/member`, {
          withCredentials: true,
        });
        setUser(result.data);

      } catch (e) {
        console.error(e.response.data);
      }
    };
    getUser();
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <>
          <MyNav />
          <ScrollToTop>
            <Switch>
              <Route path="/petdata">
                <PetDataTest />
              </Route>
              <Route path="/assistance">
                <Assistance />
              </Route>
              <Route path="/community">
                <Community />
              </Route>
              <Route path="/member">
                <Member />
              </Route>
              <Route path="/ProductDetails">
                <ProductDetails />
              </Route>
              <Route path="/Store/CartDetail/OrderDetail">
                <OrderDetail />
              </Route>
              <Route path="/Store/CartDetail">
                <CartDetail />
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
                <NotFound404 />
              </Route>
            </Switch>
          </ScrollToTop>
          <Footer />
        </>
      </Router>
    </AuthContext.Provider>
  )
}

export default App;