import '../Store/style/ProductListStyle.scss';
import { useState, useEffect } from 'react';
import { Col, Row, Accordion, Card } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from "./../../utils/config";
// import { Link } from 'react-router-dom';

//元件
import ProductItem from "./components/ProductItem"

//圖片
import searchIcon from "./storePic/searchIcon.svg";
import dogIcon from "./storePic/dogIcon.svg";
import catIcon from "./storePic/catIcon.svg";
import Checkbox from "./components/Checkbox";
import Pagination from "./components/Pagination";

function ProductList() {

    const [data, setData] = useState([]);
    const [lastPage, setLastPage] = useState(1);
    const [page, setPage] = useState(1);
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState(value);
    let [category, setCategory] = useState('all');//判斷按鈕分類用

    useEffect(() => { //全部產品跟分頁
        const SearchAllfood = async () => {
            let url = `${API_URL}/store/productlist`;
            if (category !== 'all') { //用狀態判斷來串接
                url = url + "/" + category;
            };
            //${API_URL}/store/productlist?page=${page}
            let response = await axios.get(`${url}?page=${page}&search=${value1}`, { withCredentials: true });
            setData(response.data.data);
            setLastPage(response.data.pagination.lastPage);
        };
        SearchAllfood();
    }, [page, category, value1]);

    //四個按鈕分類
    const SearchFood = async () => {
        setPage(1);
        setCategory('food');
    };
    const SearchSnack = async () => {
        setPage(1);
        setCategory('snack');
    };
    const SearchToy = async () => {
        setPage(1);
        setCategory('toy');
    };
    const SearchAll = async () => {
        setPage(1);
        setCategory('all');
        setValue1("");
    };
    const SearchBar = async () => {
        setPage(1);
        setCategory('all');
        setValue1(value);
    };



    //搜尋bar用
    const handleInputChange = (e) => {
        // 拿到 input 的 value
        setValue(e.target.value);
    }

    //篩選bar



    const haveProduct = (
        <Row xs={2} md={3}>

            {data.map((product) => {
                return (
                    <Col className="mb-3" >
                        <ProductItem name={product.name} price={product.price} des={product.description} stock={product.stock_num} />
                    </Col>
                )
            })}
        </Row>
    );


    const noProduct = (
        
            <div>沒有符合的產品，請重新搜尋</div>
    );


    return (
        <>


            <div>
                <section className='wrap1'>
                    <div className='btnarea mb-5 d-flex justify-content-between'>
                        <div className='protext1 bg-white'>毛孩選物指南</div>
                        <button className='select-btn' onClick={SearchAll} >全部產品</button>
                        <button className='select-btn' onClick={SearchFood} >吃飯飯</button>
                        <button className='select-btn' onClick={SearchSnack} >吃點心</button>
                        <button className='select-btn' onClick={SearchToy}>玩玩具</button>
                        <input className='search' type="text" name="search" value={value} onChange={handleInputChange} placeholder="找什麼呢" />
                        <button onClick={SearchBar}><img className="searchIcon" src={searchIcon} alt="searchIcon" /></button>
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
                                    {/* <ul>{getPages()}</ul> */}
                                    <div className='pages'><Pagination page={page} lastPage={lastPage} setPage={setPage} /></div>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>    {/* 商品列表*/}
    
                                {data.length ? haveProduct : noProduct}

                        </Col>
                    </Row>
                </section>
            </div>
        </>
    )
}

export default ProductList;