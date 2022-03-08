import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CartProductItemStyle.scss'
import { IMG_URL } from './../../../utils/config'
//元件
import Counter from './Counter'
import ProductDetails from '../ProductDetails'
//圖片
import Hill from '../productsImages/Hill’s-001-1.png'
import deletIcon from '../storePic/deletIcon.svg'

function CartProductItem(props) {
  const {
    setMycart, //計數器變動連動用
    item,
    name,
    price,
    des,
    stock,
    id,
    amount,
    updateCartToLocalStorage,
    deletItem,
    image,
  } = props
  console.log('item', item)
  //計算數量總和小計
  const [num, setNum] = useState(0)
  const [show, setShow] = useState(false) //Modal

  return (
    <>
      {/* 商品*/}
      <button
        className="deletIcon"
        onClick={() => {
          deletItem(item, true)
        }}
      >
        <img src={deletIcon} alt="deletIcon" />
      </button>
      <div className="setbgg">
        <div className="cart-product mt-4 ">
          <button
            className="d-flex justify-content-center"
            onClick={() => setShow(true)}
          >
            <img
              className="cover-fit "
              src={`${IMG_URL}/static/products/${image}`}
              alt={image}
            />
          </button>

          <ProductDetails
            setMycart={setMycart}
            show={show}
            setShow={setShow}
            id={id}
            name={name}
            price={price}
            des={des}
            stock={stock}
            item={item}
            amount={amount}
          />
        </div>
        <div>
          <h6 className="cart-title">{name}</h6>
          <p className="cart-price">${price}</p>
          <p className="cart-price2">小計 NT${price * amount}</p>
        </div>
      </div>
      <div className="counter d-flex justify-content-center">
        <Counter
          item={item}
          amount={amount}
          updateCartToLocalStorage={updateCartToLocalStorage}
        />{' '}
        {/*將值傳入屬性*/}
      </div>
    </>
  )
}

export default CartProductItem
