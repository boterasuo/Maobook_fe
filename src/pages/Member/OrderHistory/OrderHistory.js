import React, { useState, useEffect } from 'react'
import { NavDropdown, Table, Modal, Button } from 'react-bootstrap'
import { NavLink, Route, Switch, useHistory } from 'react-router-dom'
import axios from 'axios'
// import { API_URL } from '../utils/config'

// 引入 user context
import { useAuth } from '../../../context/auth'

// 引入元件
import Cancel from '../../Member/OrderHistory/Cancel'
import Done from '../../Member/OrderHistory/Done'

function OrderHistory(props) {
  return (
    <div className="info-card">
      <div className="member-content ">
        <div className="container">
          <div className="row">
            {/* side nav */}
            <div className="col-lg-2 member-sidenav">
              <nav className="d-flex flex-row flex-lg-column justify-content-center text-right">
                <NavLink
                  activeClassName="active"
                  className="nav-link d-md-block d-none"
                  to="/member/order/Cancel"
                >
                  已完成訂單
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="nav-link d-md-block d-none"
                  to="/member/order/Done"
                >
                  已取消訂單
                </NavLink>
              </nav>
            </div>
            {/* 可切換資料卡 */}
            <div className="col-lg-10 member-info">
              <Switch>
                {/* 日常 Route */}
                <Route path="/member/order/Cancel">
                  <Cancel />
                </Route>
                <Route path="/member/order/Done">
                  <Done />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderHistory
