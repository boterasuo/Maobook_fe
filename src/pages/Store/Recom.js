// import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Store/style/RecomStyle.scss';

//元件
import ProductItem from "./components/ProductItem"
//圖片
import weRecom from "./storePic/weRecom.svg";
import Hill from "./productsImages/Hill’s id=2-1.png";
import productCartIcon from "./storePic/productCartIcon.svg";


function Recom () {
    return (
        <>
            <section className="d-flex justify-content-center">
                <div className="yourpets d-flex">
                    <div className="text6 text-center">
                        <div>今天的你</div>
                        <div>想為哪個毛孩買禮物呢</div>
                    </div>
                    <ul className="allpet list-unstyled d-flex m-0">
                        <li><button className="pet"></button></li>
                        <li><button className="pet"></button></li>
                        <li><button className="pet"></button></li>
                    </ul>
                </div>
            </section>

            <section className="d-flex justify-content-center">
                <div className="recomArea d-flex">
                    <div className="mainpet ">
                        <div className="avatar"></div>
                        <div className="petname text-center mb-3 ">汪汪</div>
                        <div className="describe text-center ">今天的牠四歲<br />是隻成年的小狗狗<br />過去曾有看過獸醫<br />有著過肥、不愛喝水的問題</div>
                    </div>
                    <div className="recomlist">
                        <img className="weRecom" src={weRecom} alt="weRecom" />
                        <div className="recomPro d-flex">
                            {/* 推薦商品 */}
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Recom;





