import { Link } from 'react-router-dom'
import { useState } from 'react'
// import { Col } from 'react-bootstrap';
import './ProductItemStyle.scss'
//元件
import ProductDetails from '../ProductDetails'
//圖片
import Hill from '../productsImages/Hill’s-001-1.png'
import productCartIcon from '../storePic/productCartIcon.svg'

function ProductItem(props) {
  const { name, price, des, stock, id, image, item, ADDToLocalStorage } = props
  const [show, setShow] = useState(false) //Modal
  return (
    <>
      {/* 商品*/}
      <div className="setbg">
        <div className="product mt-4">
          <button onClick={() => setShow(true)}>
            <img
              className="Hill s-image cover-fit mb-4"
              src={Hill}
              alt="Hill"
            />
          </button>
          <ProductDetails
            show={show}
            setShow={setShow}
            id={id}
            name={name}
            price={price}
            des={des}
            stock={stock}
          />
        </div>
        <div>
          <h6 className=" s-title">{name}</h6>
          <div className="s-price">${price}</div>
        </div>
      </div>
      <button
        className="productCartIcon"
        type="button"
        onClick={() => {
          ADDToLocalStorage({
            id: id,
            name: name,
            des: des,
            amount: 1,
            price: price,
          })
        }}
      >
        <img src={productCartIcon} alt="productCartIcon" />
      </button>
    </>
  )
}

export default ProductItem
