import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Col } from 'react-bootstrap';
import './CartProductItemStyle.scss';
//元件
import ProductDetails from "../ProductDetails"
//圖片
import Hill from "../productsImages/Hill’s id=2-1.png";
import productCartIcon from "../storePic/productCartIcon.svg";

function ProductItem() {


    const [show, setShow] = useState(false); //Modal

    return (
        <>
            {/* 商品*/}
            <div className="product">
                <button className="productImg" onClick={() => setShow(true)}>
                    <img className="Hill cover-fit" src={Hill} alt="Hill" />
                </button>
                <ProductDetails show={show} setShow={setShow} />
                <div >
                    <h6 className=" s-title m-0">美味無添加<br />香草貓貓化毛膏</h6>
                    <div className="s-price m-0">$1000</div>
                </div>
                <Link className="productCartIcon"> <img src={productCartIcon} alt="productCartIcon" /></Link>
            </div>
        </>
    )

}

export default ProductItem;