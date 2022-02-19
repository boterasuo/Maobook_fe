
import React from 'react';

function HelpList(props) {
  return (
    <>
      <div className="container">

      <div className="head" style={ { display:"flex"} }>
      
        <div className="">互助專區</div>
        <div className="">filter選單</div>
        <div className="" style={ { border: "1px solid"}}>發個文吧</div>

      </div>

        <div className="container" style={ { border: "2px orange solid"} }>    

        <div>    {/*  map出下列 */}

        <div>user img & tag</div>
        <br/>
        <div>img</div>
        <br/>
        <div>地區</div>
        <br/>
        <div>標題</div>
        <br/>
        <div>價格</div>

        </div>

        </div>
        
        <br/>
        <div className="" style={ { border: "1px solid"}}>查看更多</div>

        </div>

  </>
  )
}


export default HelpList;