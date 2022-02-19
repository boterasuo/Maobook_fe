import '../Store/style/ProductListStyle.scss';
import React from 'react'
import { Col, Row, Accordion, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

//元件
import ProductItem from "./components/ProductItem"

//圖片
import searchIcon from "./storePic/searchIcon.svg";
import dogIcon from "./storePic/dogIcon.svg";
import catIcon from "./storePic/catIcon.svg";
import Checkbox from "./components/Checkbox";
import Pagination from "./components/Pagination";

function ProductList () {
    return (
        <>
            <section className='wrap1'>
                <div className='btnarea mb-5 d-flex justify-content-between'>
                    <div className='protext1 bg-white'>毛孩選物指南</div>
                    <button className='select-btn'>吃飯飯</button>
                    <button className='select-btn'>吃點心</button>
                    <button className='select-btn'>玩玩具</button>
                    <form>
                        <input className='search' type="text" name="search" placeholder="找什麼呢" />
                        <button type="submit"><img className="searchIcon" src={searchIcon} alt="searchIcon" /></button>
                    </form>
                </div>
            </section>


            <section >
                <Row className='wrap2' xs={1} md={2}>
                    <Col xs={6} md={3}>
                        <Row xs={1} md={1} className='d-flex mt-5'>
                            <Col className='d-flex justify-content-center' >  {/* 狗貓Btn*/}
                                <button className="mr-4"><img className="dogIcon" src={dogIcon} alt="dogIcon" /></button>
                                <button ><img className="catIcon" src={catIcon} alt="catIcon" /></button>
                            </Col>
                            <Col className=' d-flex mt-3 justify-content-center' > {/* 分類區*/}

                                <Accordion className='categoryArea pt-3' defaultActiveKey="0">
                                    <Card className='categoryCard'>
                                        <Accordion.Toggle className='categoryHeader' as={Card.Header} eventKey="0">
                                            年齡
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body className='categoryBody'><Checkbox /></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className='categoryCard'>
                                        <Accordion.Toggle className='categoryHeader' as={Card.Header} eventKey="1">
                                            品牌
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body className='categoryBody'><Checkbox /></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card className='categoryCard'>
                                        <Accordion.Toggle className='categoryHeader' as={Card.Header} eventKey="2">
                                            別類
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body className='categoryBody'><Checkbox /></Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                            </Col>
                            <Col> {/* 分頁區*/}
                                <div className='pages'><Pagination /></div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>    {/* 商品列表*/}
                        <Row xs={2} md={3}>
                            <Col className="mb-3" >
                                <ProductItem />
                            </Col>
                            <Col className="mb-3" >
                                <ProductItem />
                            </Col>
                            <Col className="mb-3" >
                                <ProductItem />
                            </Col>
                            <Col className="mb-3" >
                                <ProductItem />
                            </Col>
                            <Col className="mb-3" >
                                <ProductItem />
                            </Col>
                            <Col className="mb-3" >
                                <ProductItem />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>




        </>



    )
}

export default ProductList;