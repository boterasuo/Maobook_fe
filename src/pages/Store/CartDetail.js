import './style/CartDetailStyle.scss';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
//元件
import CartProductItem from './components/CartProductItem';

//圖片
import MaoStore from "./storePic/MaoStore.png";
import cartListBG from "./storePic/cartListBG.svg";
import arrow from "./storePic/arrow.svg";

function CartDetail () {

    const history1 = useHistory();


    return (
        <>
            <Container>
                {/* 上區背景圖 */}
                <Row className="cartbg">
                    <Col md={2}>
                        <img className="MaoStore2 img-fluid" src={MaoStore} alt="MaoStore" />
                    </Col>
                    <Col md={10}>
                        <img className="cartListBG img-fluid" src={cartListBG} alt="cartListBG" />
                    </Col>
                </Row>

                <section className='cart-list mt-5 '>{/* 購物車商品區*/}
                    <Row className=' pt-3 m-auto justify-content-center ' xs={2} md={4}>
                        <Col className="p-0" >
                            <CartProductItem />{/*購物車商品元件*/}
                        </Col>
                        <Col className="p-0" >
                            <CartProductItem />{/*購物車商品元件*/}
                        </Col>
                        <Col className="p-0" >
                            <CartProductItem />{/*購物車商品元件*/}
                        </Col>
                        <Col className="p-0" >
                            <CartProductItem />{/*購物車商品元件*/}
                        </Col>
                        <Col className="p-0" >
                            <CartProductItem />{/*購物車商品元件*/}
                        </Col>
                        <Col className="p-0" >
                            <CartProductItem />{/*購物車商品元件*/}
                        </Col>
                    </Row>

                    <Row className='mt-5 mb-2 delivery-area'>
                        <Col className='delivery pl-5'>

                            <div >共 3 件商品，請選擇運送方式</div>
                            <select className='mt-2 deliveryWay'>
                                <option value="超商取貨">超商取貨 NT$60</option>
                                <option value="郵寄">郵寄 NT$80</option>
                                <option selected value="宅配">宅配 NT$200</option>
                            </select>

                        </Col>
                        <Col >
                            <div>商品總計 NT$30000</div>
                            <div className='mt-2'>運費總計 NT$60</div>
                        </Col>
                    </Row>
                    <Row className='mt-4'>
                        <Col className='text-center '>
                            <div className='fintotal'>結帳總金額 NT$36000</div>
                        </Col>
                    </Row>
                </section>

                <div><img className='cart-arrow' src={arrow} alt="arrow" /></div>
                <div className='d-flex justify-content-center mt-2 mb-5' >
                    <Button  onClick={() => {
                    history1.push('/Store/CartDetail/OrderDetail')
                }} className='gobuyBtn' variant="primary">去買單</Button>
                </div>
            </Container>
        </>



    )
}

export default CartDetail;