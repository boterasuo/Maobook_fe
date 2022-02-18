import React from 'react';
import './components/HelpIntro.scss';

import walkingthedog from './img/walkingthedog.svg';
import slogans from './img/slogans.svg';
import downarrow from './img/downarrow.svg';
import maintitle from './img/maintitle.svg';
import backgroundpaw from './img/backgroundpaw.svg';


function HelpIntro(props) {

  return (

    <>
      <div className="container">

      <div></div>
      <br/>

        <div className="helpintro">

              <div className="slogans">
                <img src={slogans} alt="" />
              </div>

            <div className="background">
              <img src={backgroundpaw} alt="" />
            </div>

            <div className="walkingthedog">
                <img src={walkingthedog} alt="" /> 
              </div>
            
            <div className="title">
              <img src={maintitle} alt="" />
            </div>


            <div className="leadingdown">
              <div className="arrowtext1">找一位朋友</div>
              <div className="arrowtext2">一起來幫你吧</div>
              <img className="arrowicon" src={downarrow} alt="" />
            </div>

        </div>
      </div>

    </>
  )
}


export default HelpIntro;