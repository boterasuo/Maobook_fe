import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
// 引入 utils
import { API_URL } from "../../utils/config";
// 引入 component
import SwitchBTN from "./SwitchBTN";

function AddPetData(props) {
    // 取得當前 selected pet id (來自 match params)
    const selectedPetId = parseInt(props.match.params.selectedPet, 10);
    // 按鈕狀態 (true 體重 / false 身長)
    const [switchBTN, setSwitchBTN] = useState(false);
    // 身高體重 (height / weight)
    // const [hwSwitch, setHwSwitch] = useState("height");
    // 毛孩列表
    const [petList, setPetList] = useState([]);
    // 被選取毛孩
    const [selectedPet, setSelectedPet] = useState(selectedPetId);
    // 存取身長/體重資料狀態
    const [petHWInfo, setPetHWInfo] = useState([]);
    const petHeightRef = useRef();
    const petWeightRef = useRef();
    // 資料編輯狀態
    const [edit, setEdit] = useState();
    const [editData, setEditData] = useState({});


    // 切換按鈕狀態函式
    const toggleSwitchBTN = () => {
        setSwitchBTN(!switchBTN);
    };
    // 如果按鈕狀態改變, 同步改變身高體重狀態
    // useEffect(() => {
    //     if(switchBTN) {
    //         setHwSwitch("weight");
    //     } else setHwSwitch("height");
    // }, [switchBTN]);

    // 取得毛孩 id & name
    useEffect(() => {
        let getPetInfo = async () => {
        try {
            // 先取得已登入使用者所有毛孩列表
            let listResult = await axios.get(`${API_URL}/pet`, {withCredentials: true,});
            console.log(listResult.data.data);
            let newPetList = [...petList];
            newPetList = listResult.data.data.map((v, i) => [v.id, v.name]);
            // console.log(newPetList);
            // 將所有毛孩 id 依序存入陣列
            setPetList(newPetList);
            // 第一次渲染先取得初始毛孩的原始資料 (好像不用這段?)
            // let heightResult = await axios.get(`${API_URL}/pet/height/${selectedPet}`,
            //     {withCredentials: true,});
            // petHeightRef.current = heightResult.data.data;
            // let weightResult = await axios.get(`${API_URL}/pet/weight/${selectedPet}`, 
            //     {withCredentials: true});
            // petWeightRef.current = weightResult.data.data;
            
        
        } catch(e) {
            console.error("pet data 錯誤", e.response.data);
            
        }};
        getPetInfo();
    }, []);

    // 選取毛孩狀態改變時 => 取得被選取毛孩身長 or 體重資料
    useEffect(() => {
        if(selectedPet) {
            if(switchBTN === false) {
                let getHeight = async () => {
                    try {
                        let heightResult = await axios.get(`${API_URL}/pet/height/${selectedPet}`, {withCredentials: true});
                        // console.log(heightResult.data);
                        // petHeightRef.current = heightResult.data.data; 用 Ref 只有剛開始有用, 後面還是會跟著 petHWInfo 跑??
                        setPetHWInfo(heightResult.data.data);
                    } catch(e) {
                        console.error("all height 錯誤", e.response.data);
                    }
                }; getHeight();
            } else if(switchBTN === true) {
                let getWeight = async () => {
                    try {
                        let weightResult = await axios.get(`${API_URL}/pet/weight/${selectedPet}`, {withCredentials: true});
                        // console.log(weightResult.data);
                        // petWeightRef.current = weightResult.data.data;
                        setPetHWInfo(weightResult.data.data);
                    } catch(e) {
                        console.error("all height 錯誤", e.response.data);
                    }
                }; getWeight();
            }
        }
    }, [selectedPet, switchBTN]);


    // 切換編輯狀態函式
    const handleEdit = (e) => {
        const btnId = e.target.name;
        console.log(btnId);
        setEdit(btnId);
    };
    const handleCancel = () => {
        setEdit();
        if(switchBTN === false) {
            // alert("確認取消修改?")
            let getHeight = async () => {
                try {
                    let heightResult = await axios.get(`${API_URL}/pet/height/${selectedPet}`, {withCredentials: true});
                    // console.log(heightResult.data);
                    setPetHWInfo(heightResult.data.data);
                } catch(e) {
                    console.error("all height 錯誤", e.response.data);
                }
            }; getHeight();
        }else {
            // alert("確認取消修改?")
            let getWeight = async () => {
                try {
                    let weightResult = await axios.get(`${API_URL}/pet/weight/${selectedPet}`, {withCredentials: true});
                    // console.log(weightResult.data);
                    setPetHWInfo(weightResult.data.data);
                } catch(e) {
                    console.error("all height 錯誤", e.response.data);
                }
            }; getWeight();
        }
    }

    // input onChange 函式
    function handleChange(e) {
        const editId = petHWInfo.findIndex((data) => {
            return data.id === parseInt(edit)
        });
        // console.log(petHWInfo[editId]);
        let newEditData = petHWInfo[editId];
        newEditData[e.target.name] = e.target.value;
        let temPetHWInfo = [...petHWInfo];
        temPetHWInfo[editId] = newEditData;
        setPetHWInfo(temPetHWInfo);
    };
 

  return (
    <div className="info-card pet-data-edit">
        <div className="col-lg-7">
            <div className="d-flex justify-content-start pet-data-select">
                <SwitchBTN type="button" active={switchBTN} clicked={toggleSwitchBTN}></SwitchBTN>
                <select 
                    name="selectedPet"
                    className="form-control"
                    value={selectedPet}
                    onChange={(e) => {
                        setSelectedPet(e.target.value)
                    }}
                >
                {petList.map((pet, i) => {
                    return (<option key={pet[0]} value={parseInt(pet[0])}>{pet[1]}</option>)
                })}                    
                </select>
                <button className="btn">新增資料</button>
            </div>
            <form>
                <table className="table table-hover pet-data-table">
                    <thead>
                        <tr>
                            <th className="d-none">資料id</th>
                            <th>{!switchBTN ? "身長 (cm)" : "體重 (kg)"}</th>
                            <th>資料時間</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {petHWInfo.map((data, i) => {
                            return (
                                <tr key={data.id}>
                                    <td className="d-none">
                                        <input type="text" value={data.id} name="dataId" readOnly/>
                                    </td>
                                    <td>{edit !== data.id.toString() ? data.value : 
                                        <input 
                                            type="number"
                                            min="1.0" max="999.9" step="0.1"
                                            name="value"
                                            value={data.value}
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                        />}
                                    </td>
                                    <td className="date-form">
                                        {edit !== data.id.toString() ? data.time : 
                                        <input 
                                            type="date"
                                            name="time"
                                            value={data.time}
                                            className="form-control"
                                            onChange={(e) => handleChange(e)}
                                        />}
                                    
                                    </td>
                                    <td>
                                        <div className="d-flex">
                                            {edit !== data.id.toString() ? (
                                                <>
                                                    <button name={data.id} type="button" className="btn" onClick={(e) => handleEdit(e)}>修改</button>
                                                    <button type="button" className="btn">刪除</button>
                                                </>
                                            ) : (
                                                <>
                                                    <button type="button" className="btn">確認</button>
                                                    <button type="button" className="btn" onClick={handleCancel}>取消</button>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </form>
        </div>
        <div className="col-lg-5"></div>
    </div>
  )
}


export default withRouter(AddPetData)
