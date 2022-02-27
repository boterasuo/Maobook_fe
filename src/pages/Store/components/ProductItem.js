import { Link } from 'react-router-dom';
import { useState } from 'react'
// import { Col } from 'react-bootstrap';
import './CartProductItemStyle.scss';
//元件
import ProductDetails from "../ProductDetails"
//圖片
import Hill from "../productsImages/Hill’s id=2-1.png";
import productCartIcon from "../storePic/productCartIcon.svg";

function ProductItem(props) {

    const { name, price, des, stock } = props;
    const [show, setShow] = useState(false); //Modal

    return (
        <>
            {/* 商品*/}
            <div className="product mt-4">
                <button className="productImg" onClick={() => setShow(true)}>
                    <img className="Hill cover-fit" src={Hill} alt="Hill" />
                </button>
                <ProductDetails show={show} setShow={setShow} name={name} price={price} des={des} stock={stock} />
                <div >
                    <h6 className=" s-title m-0">{name}</h6>
                    <div className="s-price m-0">${price}</div>
                </div>
                <Link className="productCartIcon"> <img src={productCartIcon} alt="productCartIcon" /></Link>
            </div>
        </>
    )

}

export default ProductItem;