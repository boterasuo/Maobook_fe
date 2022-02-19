import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
// import { API_URL } from "../../../utils/config";

import {
    addMonths,
    subMonths,
    getDaysInMonth,
    getDay,
    endOfMonth,
    setDate,
    startOfMonth,
} from 'date-fns'
import enentIcon1 from '../img/eventIcon1.svg'
import enentIcon2 from '../img/eventIcon2.svg'
import enentIcon3 from '../img/eventIcon3.svg'
import enentIcon4 from '../img/eventIcon4.svg'
// import {getschedulebyyearmonth} from '../../../../../back-end/routers/calenderE'


export const MONTHS = [
    'JANuary',
    'FEBruary',
    'MARch',
    'APRil',
    'MAY',
    'JUNe',
    'JULy',
    'AUGust',
    'SEPtember',
    'OCTober',
    'NOVember',
    'DECember',
]
export const WEEKS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
const useCalendar = () => {
    const [today, setToday] = useState(new Date())
    

    const setNextMonth = () => {
        setToday(addMonths(today, 1))
    }

    const setPreMonth = () => {
        setToday(subMonths(today, 1))
    }
    // const yearmonth = '2022-02'
    // const [datasql, setData] = useState([]);

    // useEffect(() => {
    //   let getCalendar = async () => {
    //     let response = await axios.get(`${API_URL}/calenderE/${yearmonth}`);
    //     setData(response.data);
    //   };
    //   getCalendar();
    // }, []);

    const daysInMonth = () => {
        let month = []
        let currentDate = 1
        // 預設迴圈的開頭都為1，代表日期
        let firstDay = getDay(startOfMonth(today))
        let allDays = getDaysInMonth(today)
        let weekNums = Math.ceil((allDays + firstDay) / 7)
        // 算有幾周，取本月總日數+上個月餘日數 / 7 
        // Math.ceil() 函式會回傳大於等於所給數字的最小整數。
        let preMonth = subMonths(today, 1)
        let preDate = endOfMonth(preMonth).getDate() - firstDay + 1
        let nextDate = 1
        let nextMonth = addMonths(today, 1)
        // let datasql=[{date:1,category:[1,2,3]},{date:5,category:[1,4]},{date:17,category:[2,3]},{date:20,category:[1,2,3,4]},{date:28,category:[2,3,4]}]
        // let datasql= getschedulebyyearmonth('2022/2')

        // let response = axios.get("http://localhost:3002/api/calendarE")
        // console.log(response)
        // let datasql = response.data
        // console.log(datasql)



        for (let weekNum = 0; weekNum < weekNums; weekNum++) {
            let week = []
            for (let day = 0; day < 7; day++) {
                let dateInfo = {
                    otherMonth: false,
                    date: null,
                    calenderImgIcon:[1, 2, 3, 4],
                }
                // 上個月空白日
                if (weekNum === 0 && day < firstDay) {
                    week.push({
                        ...dateInfo,
                        date: setDate(preMonth, preDate),
                        otherMonth: true,
                        calenderImgIcon:[],
                    })
                    preDate++
                } else if (currentDate > allDays) {
                    //下個月的空白
                    week.push({
                        ...dateInfo,
                        date: setDate(nextMonth, nextDate),
                        otherMonth: true,
                        calenderImgIcon:[],

                    })
                    nextDate++
                } else {
                    //這個月
                    // let checkdate=datasql.find(a=>a.date==currentDate)
                    // let icondata=checkdate===undefined?[]:checkdate.category
                    week.push({
                        ...dateInfo,
                        date: setDate(today, currentDate),
                        otherMonth: false,
                        calenderImgIcon:[],
                    })
                    currentDate++
                }
            }
            month.push(week)
        }
        return month


    }


    const days = daysInMonth()
    const selectDate = (date) => {
        setToday(date)
    }
    return {
        today,
        days,
        setNextMonth,
        setPreMonth,
        selectDate,
    }
}

const eventSelect=(category)=>{
    category = parseInt(category, 10);
    switch(category) {
        case 1:
          return enentIcon1;
        case 2:
          return enentIcon2;
        case 3:
          return enentIcon3;
        case 4:
          return enentIcon4;
        default:
          return '';
      }
}



    export {useCalendar, eventSelect}
