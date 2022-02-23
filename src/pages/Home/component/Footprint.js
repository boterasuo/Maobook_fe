import React from "react"
// 引入圖片
import Paw from "../img/paw.svg";
import { Container, Row, Col } from "react-bootstrap";

function Footprint() {
  return (
    <div className="step-area text-center img-fluid">
        <div className="">
            <img className="paw1" src={Paw} alt="paw" />
        </div>
        <div className="">
            <img className="paw2" src={Paw} alt="paw" />
        </div>
        <div className="">
            <img className="paw3" src={Paw} alt="paw" />
        </div>
    </div>
  )
}

export default Footprint