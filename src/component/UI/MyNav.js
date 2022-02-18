import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Container,
} from "react-bootstrap";
import axios from "axios";
// 引入 context
import { useAuth } from "../../context/auth";
// 引入 utils
import {API_URL} from "../../utils/config";
import Logo from "../../img/Logo_nav.svg";


// 要使用能有active css效果的NavLink元件
import { NavLink } from "react-router-dom";

function MyNav(props) {
  // 來自 context 的 user 狀態
  const {user, setUser} = useAuth();
  // 登出功能
  const handleLogout = async () => {
    await axios.get(`${API_URL}/auth/logout`, {withCredentials:true});
    setUser(null);
  }

  return (
    <>
      <Navbar
        className="navbar text-center"
        collapseOnSelect
        expand="lg px-3"
        fixed="top"
      >
      {/* Nav左側Logo */}
        <Navbar.Brand href="/">
          <img className="navbar-logo mr-2" src={Logo} width="200" alt="Logo" />
        </Navbar.Brand>
      {/* Nav中間 連結各平台頁面 */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav className="me-auto px-4">
              <Nav.Link as={NavLink} to="/">
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
          </Container>

        {/* Nav右側*/}
          {/* 登入前 */}
          {/* Sign in按鈕 */}
          {!user && (
            <Nav className="nav-login-btn ">
            <Nav.Link as={NavLink} to="/login">
              <div className="btn btn-outline-primary">
                SIGN IN
              </div>
            </Nav.Link>
            {/* {auth && (
              <Nav.Link as={NavLink} to="/member">
                會員專區
              </Nav.Link>
            )} */}
          </Nav>
          )}
          

          {/* 登入後 */}
          {/* 會員專區 下拉式選單 */}
          {user && (
            <Form className="d-flex">
            <NavDropdown title="會員專區" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                <p>HI, 毛毛日記 <br></br>
                  您有 3 則提醒未讀</p>
              </NavDropdown.Item>
              {/* 主要資訊功能 */}
              <NavDropdown.Item as={NavLink} to="/member">
                查看會員專區
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/MemberData">
                會員資料
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/PetList">
                毛孩資料
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/OrderHistory">
                選物紀錄
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/CommunityHistory">
                社群紀錄
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/member/AssistanceHistory">
                互助紀錄
              </NavDropdown.Item>
            {/* 登出按鈕 */}
              <Nav.Link as={NavLink} to="/" onClick={handleLogout}>
                登出
              </Nav.Link>
            </NavDropdown>
            <div className="d-inline-block"></div>
            {/* 會員頭像 */}
            <Nav.Link as={NavLink} to="/member/MemberData">
            <div className="avatar rounded-circle mx-2"></div>
            </Nav.Link>
          </Form>
          )}
          
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default MyNav;