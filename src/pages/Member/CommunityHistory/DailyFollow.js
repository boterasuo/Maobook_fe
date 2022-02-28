import React, { useState, useEffect } from 'react'
import { NavDropdown, Table, Modal, Button } from 'react-bootstrap'
import { NavLink, Route, Switch, useHistory } from 'react-router-dom'
import axios from 'axios'
// import { API_URL } from '../utils/config'

// 引入 user context
import { useAuth } from '../../../context/auth'

// 引入樣式和圖片
// 引入元件

function DailyFollow(props) {
  // 來自 context 的 user 狀態
  const { user, setUser } = useAuth()
  console.log(user)
  // 取得會員詳細資料
  const [userInfo, setUserInfo] = useState()

  return (
    <>
      <div className="info-card h-100">
        <div className="member-content h-100">
          <div className="container h-100">
            <div className="row">
              {/* side nav */}
              <div className="col-lg-2 member-sidenav h-100">
                <nav className="d-flex flex-row flex-lg-column justify-content-center text-right">
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/CommunityHistory/DailyHistory"
                  >
                    發表日常文
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/CommunityHistory/DailyFollow"
                  >
                    追蹤日常文
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/CommunityHistory/DiscussHistory"
                  >
                    發表社群文
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/CommunityHistory/DiscussFollow"
                  >
                    追蹤社群文
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/CommunityHistory/MemberFollow"
                  >
                    追蹤毛主人
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DailyFollow
