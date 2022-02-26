import React from 'react';
import {useState, useEffect} from "react";
import axios from 'axios';
import PetData from "./PetData/PetData";

// 測試 PetData 元件用頁面 (非獨立頁面)
function PetDataTest(props) {
  return (
    <div className="container">
        <PetData />
    </div>
  )
}


export default PetDataTest
