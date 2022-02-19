import { Link } from 'react-router-dom';
import { useState } from 'react'
import './CartProductItemStyle.scss';

//元件
import Counter from "./Counter"
import ProductDetails from "../ProductDetails"
//圖片
import Hill from "../productsImages/Hill’s id=2-1.png";
import deletIcon from "../storePic/deletIcon.svg";


function CartProductItem() {

    //計算數量總和小計
    const [num, setNum] = useState(0);

    let proprice = 1000;
    let total = num * proprice;
    const [show, setShow] = useState(false); //Modal

    return (
        <>
            <div className=" cart-product ">
                <button className='deletIcon'><img src={deletIcon} alt="deletIcon" /></button>
                <div className=' justify-content-center'>
                    <button className="cart-productImg" onClick={() => setShow(true)}>
                        <img className="Hill cover-fit" src={Hill} alt="Hill" />
                    </button>
                    <ProductDetails show={show} setShow={setShow} />
                    <div >
                        <h6 className=" cart-title m-0">美味無添加<br />香草貓貓化毛膏</h6>
                        <p className="cart-price m-0">${proprice}</p>
                        <p className="cart-price2 m-0">小計 NT${total}</p>
                    </div>
                </div>
                <div className=' d-flex justify-content-around'>
                    <Counter num={num} setNum={setNum} />  {/*將值傳入屬性*/}
                </div>
            </div>
        </>
    )

}

export default CartProductItem;