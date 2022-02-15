
import React from 'react';

function HelpDetail(props) {
  return (
    <>

      <div className="container">
      
        <div className="lefeside">左img</div><br/>

        <div className="rightside">

        <div className="righthead">
        <div>使用者</div><hr/>
        </div>

        <div className="rightbody1">
        <div>地區 標籤</div><br/>
        <div>標題</div><br/>
        <div>時間</div><br/>
        <div>金額</div><br/>
        <div>內文</div><hr/>
        </div>

        <div className="rightfoot" style={ { display:"flex"} }>
        
        <div>爪圖案</div>
        <div>
        <div>聯絡方式</div><br/>
        <div>我要留言</div><br/>
        <div>送出按鈕</div>
        </div>

        </div>
        
        <hr/>
        <div className="">分享按鈕</div>

        </div>
        </div>
   
  </>
  )
}


export default HelpDetail;