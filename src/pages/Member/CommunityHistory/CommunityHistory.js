import React, { useState, useEffect } from 'react'
import { NavDropdown, Table, Modal, Button } from 'react-bootstrap'
import { NavLink, Route, Switch, useHistory } from 'react-router-dom'
import axios from 'axios'
// import { API_URL } from '../utils/config'

// 引入 user context
import { useAuth } from '../../../context/auth'

// 引入元件
import DailyFollow from './DailyFollow'
import DailyHistory from './DailyHistory'
import DiscussHistory from './DiscussHistory'
import DiscussFollow from './DiscussFollow'
import MemberFollow from './MemberFollow'

function CommunityHistory(props) {
  const memberPage = (
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
  )

  return <></>
}

export default CommunityHistory
