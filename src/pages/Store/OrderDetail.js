import './style/OrderDetailStyle.scss'
import { Container, Button, Modal } from 'react-bootstrap'
import OrderDetailTable from './components/OrderDetailTable'
import React, { useState, useEffect } from 'react'
import { withRouter, Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../utils/config'
import { useAuth } from '../../context/auth'
//圖片
import MaoStore from './storePic/MaoStore.png'
import prolistBG from './storePic/prolistBG.svg'
import arrow from './storePic/arrow.svg'
import money from './storePic/money.svg'

function OrderDetail(props) {
  const { user, setUser } = useAuth() //會員資料
  let cart = props.location.state.cart
  let sum = props.location.state.sum
  let checkout = props.location.state.checkout
  let fee = props.location.state.fee
  // console.log('props:', props)
  // console.log('cart:', cart, 'sum:', sum, 'checkout', checkout, 'fee', fee)
  console.log('會員編號', user.id)
  // 轉頁用
  const history = useHistory()
  //送出成功提視窗用
  const [show, setShow] = useState(false)
  // input 輸入值
  const [Order, setOrder] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
    user_id: user.id,
    payment_category_id: '',
    cart,
  })

  console.log('Order', Order)
  // 錯誤訊息
  // const [OrderErr, setOrderErr] = useState({
  //   address: '',
  //   payment: '',
  //   name: '',
  //   mobile: '',
  //   email: '',
  // })

  // 偵測表單內容變化 (onChange)
  function handleChange(e) {
    setOrder({ ...Order, [e.target.name]: e.target.value })
    // setOrderErr({ ...OrderErr, [e.target.name]: '' })
  }

  // 送出表單 (onSubmit)
  async function handleSubmit(e) {
    e.preventDefault()
    localStorage.removeItem('cart')
    try {
      let response = await axios.post(`${API_URL}/order`, Order)
      console.log(response.data.message)
      if (response.data.message === 'ok') {
        // 客製化 Modal
        setShow(true)
      }
    } catch (e) {
      console.error('error', e.response.data)
      // 後端驗證
      // setOrderErr({
      //   ...OrderErr,
      //   address: e.response.data.address,
      //   payment: e.response.data.payment,
      //   name: e.response.data.name,
      //   mobile: e.response.data.mobile,
      //   email: e.response.data.email,
      // })
    }
  }

  let deliveryWay = ''
  if (fee === '80') {
    deliveryWay = '郵寄'
  }
  if (fee === '200') {
    deliveryWay = '宅配'
  }

  const handleCloseModal = () => {
    setShow(false)
    history.push('/store')
  }

  const successModal = (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header>
        <Modal.Title>訂單已送出</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={handleCloseModal}>
          確定
        </Button>
      </Modal.Footer>
    </Modal>
  )

  return (
    <Container>
      <section className="orderbgAREA">
        <img className="MaoStore3 img-fluid" src={MaoStore} alt="MaoStore" />
        <img className="prolistBG img-fluid" src={prolistBG} alt="prolistBG" />
      </section>
      {successModal}
      <section className="orderdetailArea p-2">
        <OrderDetailTable cart={cart} />

        <div className=" flex-column d-flex  justify-content-center  align-items-center ">
          <p className="calculate">
            {deliveryWay} 運費 ${fee} + 商品總額 ${sum}
          </p>
          <p className="finaltotal">結帳總金額 ${checkout}</p>
        </div>

        <form className="maildetail d-flex  flex-column">
          請正確填寫以下配送資訊：
          <label className="maillabel">
            配送地址
            <input
              className="mailinput"
              type="text"
              name="address"
              value={Order.address}
              placeholder="新北市XX區XX路XX號"
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </label>
          <label className="maillabel">
            支付方式
            <input
              className="mailinput"
              type="text"
              name="payment_category_id"
              value={Order.payment_category_id}
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </label>
          <label className="maillabel">
            聯絡姓名
            <input
              className="mailinput"
              type="text"
              placeholder="毛小孩"
              name="name"
              value={Order.name}
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </label>
          <label className="maillabel">
            聯絡電話
            <input
              className="mailinput"
              type="tel"
              placeholder="0912345678"
              name="mobile"
              value={Order.mobile}
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </label>
          <label className="maillabel">
            E-mail
            <input
              className="mailinput"
              type="email"
              placeholder="test@test.com"
              name="email"
              value={Order.email}
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </label>
        </form>
      </section>

      <div>
        <img className="order-arrow" src={arrow} alt="arrow" />
      </div>
      <div className="d-flex justify-content-center mt-2 mb-5">
        <Button
          className="checkoutBtn"
          variant="primary"
          onClick={handleSubmit}
        >
          <img className="pr-2" src={money} alt="money" />
          結帳
        </Button>
      </div>
    </Container>
  )
}

export default withRouter(OrderDetail)
