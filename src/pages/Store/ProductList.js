/* eslint-disable prettier/prettier */
import '../Store/style/ProductListStyle.scss';
import { useState, useEffect } from 'react';
import { Col, Row, Accordion, Card ,Modal, Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
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

function ProductList(props) {

    const [data, setData] = useState([]);//存商品資料
    const [lastPage, setLastPage] = useState(1);
    const [page, setPage] = useState(1);
    const [value, setValue] = useState("");//搜尋Bar存值
    const [value1, setValue1] = useState(value);//搜尋Bar渲染用
    const [category, setCategory] = useState('all');//判斷按鈕分類用

    //篩選bar用
    const [filter, setFilter] = useState('犬');
    const [filterPet, setFilterPet] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);
    const [filterBrand, setFilterBrand] = useState([]);
    //紀錄checkbox選取項目
    const [checkedPet, setCheckedPet] = useState([]);
    const [checkedProduct, setCheckedProduct] = useState([]);
    const [checkedBrand, setCheckedBrand] = useState([]);

    //加入購物車
    const [mycart, setMycart] = useState([])
    const [show, setShow] = useState(false)
    const [productName, setProductName] = useState('')

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)


//購物車判斷
    const ADDToLocalStorage = (item) => {
        const currentCart = JSON.parse(localStorage.getItem('cart')) || []
      
        // find if the product in the localstorage with its id
        const index = currentCart.findIndex((v) => v.id === item.id)
        console.log("index",index)
        // found: index! == -1
        if (index > -1) {
            //currentCart[index].amount++
            setProductName('這個商品已經加過了')
            handleShow()
            return
        } else {
            currentCart.push(item)
        }

        localStorage.setItem('cart', JSON.stringify(currentCart))

        // 設定資料
        setMycart(currentCart)
        setProductName('產品：' + item.name + '已成功加入購物車')
        handleShow()
    }


  //商品細節 加商品用
  // const detailAddProduct = () => {
  //   const currentCart = JSON.parse(localStorage.getItem('cart')) || []

  //   // find if the product in the localstorage with its id
  //   const index = currentCart.findIndex((v) => v.id === item.id)

  //   if (index !== -1) {
  //     //每次只有加1個數量
  //     //newMycartDisplay[index].amount++
  //     //假設是加數量的
  //     newMycartDisplay[index].amount += mycart[i].amount
  //   } else {
  //     //沒有的話就把項目加入，數量為1
  //     const newItem = { ...mycart[i] }
  //     newMycartDisplay = [...newMycartDisplay, newItem]
  //   }

  // }





//篩選
    useEffect(() => { //全部產品跟分頁
        const Search = async () => {
            let url = `${API_URL}/store/productlist`;
            if (category !== 'all') { //用狀態判斷來串接
                url = url + "/" + category;
            };

            //${API_URL}/store/productlist?page=${page}&search=${value1}&animal=${filter}&checkedPet=${checkedPet}&checkedProduct=${checkedProduct}&checkedBrand=${checkedBrand}
            //全部產品+searchbar+ filter分類名稱
            let response = await axios.get(`${url}?page=${page}&search=${value1}&animal=${filter}&checkedPet=${checkedPet}&checkedProduct=${checkedProduct}&checkedBrand=${checkedBrand}`, { withCredentials: true });
            setData(response.data.data);
            setLastPage(response.data.pagination.lastPage);
            setFilterPet(response.data.filterPet);
            setFilterProduct(response.data.filterProduct);
            setFilterBrand(response.data.filterBrand);
        };
        Search();
    }, [page, category, value1, filter, checkedPet, checkedProduct, checkedBrand]);

    //四個按鈕分類
    const SearchFood = async () => {
        setPage(1);
        setCategory('food');
        setValue1("");
        setCheckedPet("")
        setCheckedProduct("")
        setCheckedBrand("")
    };
    const SearchSnack = async () => {
        setPage(1);
        setCategory('snack');
        setValue1("");
        setCheckedPet("")
        setCheckedProduct("")
        setCheckedBrand("")
    };
    const SearchToy = async () => {
        setPage(1);
        setCategory('toy');
        setValue1("");
        setCheckedPet("")
        setCheckedProduct("")
        setCheckedBrand("")
    };
    //搜尋bar,存值用
    const handleInputChange = (e) => {
        setValue(e.target.value); // 拿到 input 的 value
    }
    const SearchAll = async () => {
        setPage(1);
        setCategory('all');
        setValue1("");
        setCheckedPet("")
        setCheckedProduct("")
        setCheckedBrand("")
    };
    const SearchBar = async () => {
        setPage(1);
        setCategory('all');
        setValue1(value);
        setCheckedPet("")
        setCheckedProduct("")
        setCheckedBrand("")
    };



    //篩選bar
    const filterDog = async () => {
        setFilter('犬');
        setCheckedPet("")
        setCheckedProduct("")
        setCheckedBrand("")
    };
    //{filter? filterDog()'}
    const filterCat = async () => {
        setFilter('貓');
        setCheckedPet("")
        setCheckedProduct("")
        setCheckedBrand("")
    };


    const haveProduct = ( //渲染產品
        <Row xs={2} md={3}>

            {data.map((product) => {
                return (
                    <Col className="mb-3" >
                        <ProductItem name={product.name} price={product.price} des={product.description} stock={product.stock_num} image={product.image} id={product.id} ADDToLocalStorage={ADDToLocalStorage} />
                    </Col>
                )
            })}
        </Row>
    );

    const noProduct = (

        <div>沒有符合的產品，請重新搜尋</div>
    );

    //購物車加入視窗
    const messageModal = (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>加入購物車訊息</Modal.Title>
          </Modal.Header>
          <Modal.Body>{productName} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              繼續購物
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                props.history.push('/Store/CartDetail')
              }}
            >
              前往購物車結帳
            </Button>
          </Modal.Footer>
        </Modal>
      )





    return (
        <>
         {messageModal}
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
                                    <button className="mr-4" onClick={filterDog}><img className="dogIcon" src={dogIcon} alt="dogIcon" /></button>
                                    <button onClick={filterCat} ><img className="catIcon" src={catIcon} alt="catIcon" /></button>
                                </Col>
                                <Col className=' d-flex mt-3 justify-content-center' > {/* 分類區*/}

                                    <Accordion className='categoryArea pt-3' defaultActiveKey="0">
                                        <Card className='categoryCard'>
                                            <Accordion.Toggle className='categoryHeader' as={Card.Header} eventKey="0">
                                                年齡
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className='categoryBody'>
                                                    <Checkbox filterName={filterPet} checkeds={checkedPet} setCheckeds={setCheckedPet} />
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className='categoryCard'>
                                            <Accordion.Toggle className='categoryHeader' as={Card.Header} eventKey="1">
                                                品牌
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body className='categoryBody'>
                                                    <Checkbox filterName={filterProduct} checkeds={checkedProduct} setCheckeds={setCheckedProduct} />
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className='categoryCard'>
                                            <Accordion.Toggle className='categoryHeader' as={Card.Header} eventKey="2">
                                                別類
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className='categoryBody'>
                                                    <Checkbox filterName={filterBrand} checkeds={checkedBrand} setCheckeds={setCheckedBrand} />
                                                </Card.Body>
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

export default  withRouter(ProductList); 