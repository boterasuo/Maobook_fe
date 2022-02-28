import { Link } from 'react-router-dom'
import { useState } from 'react'
import './CartProductItemStyle.scss'

//元件
import Counter from './Counter'
import ProductDetails from '../ProductDetails'
//圖片
import Hill from '../productsImages/Hill’s-001-1.png'
import deletIcon from '../storePic/deletIcon.svg'

function CartProductItem(props) {
  const {
    item,
    name,
    price,
    des,
    stock,
    id,
    amount,
    updateCartToLocalStorage,
    deletItem,
  } = props

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
      <div>
        <div className="cart-product mt-4">
          <button onClick={() => setShow(true)}>
            <img className="Hill cover-fit" src={Hill} alt="Hill" />
          </button>
          <ProductDetails
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

//   <>
// <button className="deletIcon">
//   <img src={deletIcon} alt="deletIcon" />
// </button>
// <div className=" cart-product ">
//   <div className="  justify-content-center">
//     <button onClick={() => setShow(true)}>
//       <img className="Hill cover-fit" src={Hill} alt="Hill" />
//     </button>
//     <ProductDetails
//       show={show}
//       setShow={setShow}
//       id={id}
//       name={name}
//       price={price}
//       des={des}
//       stock={stock}
//     />
//   </div>
//   <div>
//     <h6 className="cart-title">{name}</h6>
//     <p className="cart-price">${price}</p>
//     <p className="cart-price2">小計 NT${price * amount}</p>
//   </div>
// </div>

// <div className="counter d-flex justify-content-around">
//   <Counter
//     item={item}
//     amount={amount}
//     updateCartToLocalStorage={updateCartToLocalStorage}
//   />{' '}

// </div >
// </>
