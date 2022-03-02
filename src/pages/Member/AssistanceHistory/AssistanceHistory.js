import React, { useState, useEffect } from 'react'
import { NavDropdown, Table, Modal, Button } from 'react-bootstrap'
import { NavLink, Route, Switch, useHistory } from 'react-router-dom'
import axios from 'axios'
// import { API_URL } from '../utils/config'

// 引入 user context
import { useAuth } from '../../../context/auth'

// 引入元件
import HelpedTask from './HelpedTask'
import Helper from './Helper'
import HelpingTask from './HelpingTask'
import FinishedTask from './FinishedTask'

function AssistanceHistory(props) {
  return (
    <>
      <div className="info-card h-75">
        <div className="member-content ">
          <div className="container">
            <div className="row">
              {/* side nav */}
              <div className="col-lg-2 member-sidenav">
                <nav className="d-flex flex-row flex-lg-column justify-content-center text-right">
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/assistance/HelpedTask"
                  >
                    委託他人
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/assistance/Helper"
                  >
                    應徵名單
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/assistance/HelpingTask"
                  >
                    接單助人
                  </NavLink>
                  <NavLink
                    activeClassName="active"
                    className="nav-link d-md-block d-none"
                    to="/member/assistance/FinishedTask"
                  >
                    完成訂單
                  </NavLink>
                </nav>
              </div>
              {/* 可切換資料卡 */}
              <div className="col-lg-10 member-info">
                <Switch>
                  <Route path="/member/assistance/HelpedTask">
                    <HelpedTask />
                  </Route>
                  <Route path="/member/assistance/Helper">
                    <Helper />
                  </Route>
                  <Route path="/member/assistance/HelpingTask">
                    <HelpingTask />
                  </Route>
                  <Route path="/member/assistance/FinishedTask">
                    <FinishedTask />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AssistanceHistory
