import React from 'react'
import './components/HelpIntro.scss'

import walkingthedog from './img/walkingthedog.svg'
import slogans from './img/slogans.svg'
import downarrow from './img/downarrow.svg'
import maintitle from './img/maintitle.svg'
import backgroundpaw from './img/backgroundpaw.svg'

function HelpIntro(props) {
  return (
    <>
      <div className="helpintro">
        <div>
          <img className="slogans" src={slogans} alt="" />
        </div>

        <div>
          <img className="background" src={backgroundpaw} alt="" />
        </div>

        <div>
          <img className="walkingthedog" src={walkingthedog} alt="" />
        </div>

        <div>
          <img className="title" src={maintitle} alt="" />
        </div>

        <div className="leadingdown">
          <div className="arrowtext1">找一位朋友</div>
          <div className="arrowtext2">一起來幫你吧</div>
          <img className="downarrow" src={downarrow} alt="" />
        </div>
      </div>
    </>
  )
}

export default HelpIntro
