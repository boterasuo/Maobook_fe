import './style/OrderDetailStyle.scss'
import { Container, Button } from 'react-bootstrap'
import OrderDetailTable from './components/OrderDetailTable'
import React, { useState, useEffect } from 'react'

//圖片
import MaoStore from './storePic/MaoStore.png'
import prolistBG from './storePic/prolistBG.svg'
import arrow from './storePic/arrow.svg'
import money from './storePic/money.svg'

function OrderDetail() {
  return (
    <Container>
      <section className="orderbgAREA">
        <img className="MaoStore3 img-fluid" src={MaoStore} alt="MaoStore" />
        <img className="prolistBG img-fluid" src={prolistBG} alt="prolistBG" />
      </section>

      <section className="orderdetailArea p-2">
        <OrderDetailTable />

        <div className=" flex-column d-flex  justify-content-center  align-items-center ">
          <p className="calculate">運費 $60 + 折扣 $0 +商品總額 $36000</p>
          <p className="finaltotal">結帳總金額 $36060</p>
        </div>

        <form className="maildetail d-flex  flex-column ">
          請正確填寫以下配送資訊：
          <label className="maillabel">
            宅配地址
            <input
              className="mailinput"
              type="text"
              placeholder="新北市XX區XX路XX號"
            />
          </label>
          <label className="maillabel">
            支付方式
            <input className="mailinput" type="text" />
          </label>
          <label className="maillabel">
            聯絡姓名
            <input className="mailinput" type="text" placeholder="毛小孩" />
          </label>
          <label className="maillabel">
            聯絡電話
            <input className="mailinput" type="text" placeholder="0912345678" />
          </label>
          <label className="maillabel">
            E-mail
            <input
              className="mailinput"
              type="text"
              placeholder="test@test.com"
            />
          </label>
        </form>
      </section>

      <div>
        <img className="order-arrow" src={arrow} alt="arrow" />
      </div>
      <div className="d-flex justify-content-center mt-2 mb-5">
        <Button className="checkoutBtn" variant="primary">
          <img className="pr-2" src={money} alt="money" />
          結帳
        </Button>
      </div>
    </Container>
  )
}

export default OrderDetail
