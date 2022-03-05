import React from 'react'
import { useState, useEffect } from 'react'
import HelpIntro from './Assistance/HelpIntro'
import HelpCalendar from './Assistance/HelpCalendar'
import DayHelps from './Assistance/DayHelps'
import HelpList from './Assistance/HelpList'
import HelpPost from './Assistance/HelpPost'
import HelpDetail from './Assistance/HelpDetail'

import './Assistance/components/Assistance.scss'

import posticon from './Assistance/img/posticon.svg'
import maoassistance from './Assistance/img/maoassistance.svg'

function Assistance() {
  const [HelpDate, setHelpDate] = useState(new Date())
  return (
    <>
      <div className="assistance">
        <div className="leftandright">
          <img className="maoassistance" src={maoassistance} alt="" />
          <img className="helpposticon" src={posticon} alt="" />
        </div>

        <div className="middle">
          <div className="helpintro">
            <HelpIntro />
          </div>
          <br />
          <div className="helpcalendar">
            <HelpCalendar setHelpDate={setHelpDate}/>
          </div>
          <div className="dayhelps">
            <DayHelps HelpDate={HelpDate}/>
          </div>
          <br />
          <div className="helplist">
            <HelpList />
          </div>
          <br />
          <div className="helppost">
            <HelpPost />
          </div>
        </div>
      </div>
    </>
  )
}

export default Assistance
