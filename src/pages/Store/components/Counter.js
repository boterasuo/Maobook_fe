import React from 'react'

//圖片
import minusIcon from "../storePic/minusIcon.svg";
import plusIcon from "../storePic/plusIcon.svg";

function Counter (props) {

    const { num, setNum } = props;

    return (
        <>
            <button className="minusIcon" onClick={() => { if (num <= 0) { setNum(num = 0) } else setNum(num - 1) }}><img src={minusIcon} alt="minusIcon" /></button>
            <span className='num'>{num}</span>
            <button className="plusIcon"
                onClick={() => { if (num < 0) { setNum(num = 0) } else setNum(num + 1) }}>
                <img src={plusIcon} alt="plusIcon" />
            </button>
        </>
    )
}

export default Counter;