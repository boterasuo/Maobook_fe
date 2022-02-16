import React from 'react';

function HelpPost(props) {
  return (
    <>

      <div className="container">
      
        <div className="">忙碌的你</div>

      </div>

        <div className="container" style={ { border: "2px orange solid" ,background: "orange"} }>    

        <div className="">需要幫忙嗎</div><br/>

        <div className="mainpost" style={ { border: "1px orange solid", display:"flex"} }>

        <div className="img" style={ { border: "1px white solid"} }>img</div>
        <div className="tag" style={ { border: "1px white solid"} }>tag</div>
        <div className="textarea" style={ { border: "1px white solid"} }>textarea</div>
        <div className="price" style={ { border: "1px white solid"} }>price</div>
        <div className="postbutton" style={ { border: "1px white solid"} }>送出</div>

        </div>
        
        <hr/>
        <div className="">免責聲明</div>

        </div>
   

  </>
  )
}


export default HelpPost;