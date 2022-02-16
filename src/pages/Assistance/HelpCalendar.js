import React from 'react';
import { format, getDate, isSameDay } from 'date-fns';
import useCalendar, { WEEKS } from './components/UseCalendar';
import 'react-bootstrap';
import './components/Calendar.scss';
import buttonIconL from './img/calArrowL.svg';
import buttonIconR from './img/calArrowR.svg';
import dateCircle from './img/calDateCircle.svg';

const HelpCalendar = () => {
    const calendar = useCalendar()
    return (
        <div>

        {/* 年月 & setState前後按鈕 */}
        <table border="0" cellPadding="0" cellSpacing="0" className="">
                <thead>
                    <tr>
                        <td colSpan="100%" className="calenderHead">
                        <div className="d-flex justify-content-center">

                        <img src={buttonIconL} className="imgIcon mx-5" onClick={calendar.setPreMonth} alt="上一個月"/>

        {/* 可替換format: dd(加上日期) MM(數字月) MMMM(完整英文月) */}
                        <div className="thisYear d-inline-block">
                            {format(calendar.today, 'MMM yyyy')}</div>
                        
                        <img src={buttonIconR} className="mx-5" onClick={calendar.setNextMonth} alt="下一個月"/>
                        </div>

                        </td>
                    </tr>
                </thead>

                <br/>

                <tbody>

        {/* 印出星期標頭 */}
                    <tr className="week">
                        {WEEKS.map((title, i) => {
                            return (
                            <td key={i}>{title}</td>
                            )
                        })}                 
                    </tr>
                    
        {/* 分隔線 */}
                    <tr>
                    <td colSpan="100%"> <hr/> </td>
                    </tr> 

        {/* 印出日期 */}
                    {calendar.days.map((week, i) => {
                        return (
                            <>
                            <tr key={i}>
                            
                                {week.map((date, i) => {
                            
                                    const otherMonth = date.otherMonth
                                    const isSelected = isSameDay(calendar.today,date.date)
                                    const className = `${
                                        otherMonth && 'other'
                                    } ${isSelected && 'selected'}`
                                    const selectedToday = () => {
                                        calendar.selectDate(date.date)
                                    }
        
                                    return (
                                        <>
                                        <td
                                            key={i}
                                            // className={className}
                                            className="today"
                                            onClick={selectedToday}>

                                        <tr>
                                            <td>{!otherMonth && getDate(date.date)}</td>
                                        </tr>    

                                        <tr> 
                                           <td >                                           
                                           {!otherMonth &&                                            
                                            <div className="linkCircle">
                                            <img src={dateCircle} className="dateCircle" alt=""/>
                                            <div className="circleText">{getDate(date.date)}</div>
                                            </div>
                                            }
                                            </td>
                                        </tr>
                                        
                                        </td>
                                        
                                        </>
                                       
                                    )
                                })}
                            </tr>
                            
                            </>
                        )
                    })}
                    
                </tbody>
                </table>
        </div>
    )
}


export default HelpCalendar;