// 引入 React 功能
import axios from 'axios'
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
// 引入 user context
import { useAuth } from '../../context/auth'
// 引入 utils
import {API_URL} from "../../utils/config";

// 要使用能有active css效果的NavLink元件
import { NavLink } from 'react-router-dom'

// 小歐測試用 Navbar
function MyNav(props) {
  console.log('props', props)
  
  // 傳入登入狀態屬性 props
  // const { auth, setAuth } = props
  
  // 來自 context 的 user 狀態
  const {user, setUser} = useAuth();
  const {userLoggedIn, setUserLoggedIn} = props;
  console.log(user);

  // 登出功能
  const handleLogout = async () => {
    await axios.get(`${API_URL}/auth/logout`, {withCredentials:true});
    setUser(null);
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        fixed="top"
        className="shadow-sm"
      >
        <Navbar.Brand href="/">React REST範例</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto nav-middle">
            {/* 利用as屬性來作選單link的整合 */}
            {/* 參考：https://react-bootstrap.github.io/components/navs/#nav-link-props */}

              <Nav.Link as={NavLink} to="/" exact>
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to="/schedule">
                SCHEDULE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/store">
                STORE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/community">
                COMMUNITY
              </Nav.Link>
              <Nav.Link as={NavLink} to="/assistance">
                ASSISTANCE
              </Nav.Link>
          </Nav>
          <Nav className="nav-right">
            <Navbar.Text>
              {/* {auth ? "歡迎光臨! " : <Link to="/login">登入</Link>} */}
              {/* 測試用 */}
              {user ? "歡迎光臨! " + user.name : <Link to="/login">登入</Link>}
            </Navbar.Text>
            <Navbar.Text className="pl-2">
              {user && <Link to="/login" onClick={handleLogout}>登出</Link>}
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default withRouter(MyNav);
