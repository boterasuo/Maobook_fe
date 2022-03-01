// import { Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import '../Store/style/RecomStyle.scss'
import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'
import { API_URL } from './../../utils/config'
//元件
import ProductItem from './components/ProductItem'
//圖片
import weRecom from './storePic/weRecom.svg'
// import Hill from "./productsImages/Hill’s id=2-1.png";
// import productCartIcon from "./storePic/productCartIcon.svg";

function Recom() {
  const [data, setData] = useState([]) //紀錄全部寵物資料
  const [pet, setPet] = useState(null) //紀錄單隻寵物因為要塞進去的資料是物件，不能設陣列

  //寵物清單API 開始
  useEffect(() => {
    let getPetlist = async () => {
      // http://localhost:3002//api/store/petlist
      let response = await axios.get(`${API_URL}/store/petlist`, {
        withCredentials: true,
      })
      setData(response.data)
      setPet(response.data[0])
      console.log('aaa', response.data)
    }
    getPetlist()
  }, [])

  const getlist = () => {
    //建立寵物清單元件
    let list = []
    for (let i = 0; i < data.length; i++) {
      list.push(
        <li
          key={i}
          onClick={(e) => {
            setPet(data[i]) //點下後針對index做寵物切換
          }}
        >
          <button className="recom-pet">{i}</button>
        </li>
      )
    }
    return list
  }

  // const showPet  = () => {

  // };
  //寵物清單API 結束

  return (
    <>
      <section className="d-flex justify-content-center">
        <div className="recom-yourpets d-flex">
          <div className="text6 text-center">
            <div>今天的你</div>
            <div>想為哪個毛孩買禮物呢</div>
          </div>

          <ul className="allpet list-unstyled d-flex m-0">
            {getlist()} {/*印出寵物清單元件*/}
          </ul>
        </div>
      </section>
      <section className="d-flex justify-content-center">
        <div className="recomArea d-flex">
          <div className="mainpet ">
            <div className="recom-avatar"></div>
            <div className="recom-petname text-center mb-3 ">
              {pet ? pet.name : ''}
            </div>
            <div className="recom-describe text-center ">
              今天的牠
              <span className="introTag">{pet ? pet.birthday : ''}歲</span>
              <br />
              是隻<span>{pet ? pet.age_category : ''}</span>的
              <span>{pet ? pet.category : ''}</span>
              <br />
              有著
              {pet
                ? pet.illnessTags.map((data) => {
                    return <span> [ {data} ] </span>
                  })
                : ''}{' '}
              的問題
            </div>
          </div>
          <div className="recomlist">
            <img className="weRecom" src={weRecom} alt="weRecom" />
            <div className="recomPro d-flex">
              {/* 推薦商品 */}
              <Col>
                <ProductItem
                  name="Hill’s希爾思 幼犬/雞肉與大麥/3公斤"
                  price="$3000"
                  des="呵護免疫系統： 特製營養配方 建立最佳成長基礎 促進眼睛健康"
                  stock="3"
                  image="1"
                  id="1"
                />
              </Col>
              <Col>
                <ProductItem />
              </Col>
              <Col>
                <ProductItem />
              </Col>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recom
