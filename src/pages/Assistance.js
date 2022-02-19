import React from 'react';
import HelpIntro from './Assistance/HelpIntro';
import HelpCalendar from './Assistance/HelpCalendar';
import DayHelps from './Assistance/DayHelps';
import HelpList from './Assistance/HelpList';
import HelpPost from './Assistance/HelpPost';
import HelpDetail from './Assistance/HelpDetail';

import './Assistance/components/Assistance.scss';

import posticon from './Assistance/img/posticon.svg';
import maoassistance from './Assistance/img/maoassistance.svg';

function Assistance() {
  return (
    <>
    <div className="container">

    <div className="leftandright">
    <div className="leftbackground"><img src={maoassistance} alt="" /></div>
    <div className="posticon"><img src={posticon} alt="" /></div>
    </div>

    <div className="middle">
    <div className="helpintro"><HelpIntro/></div>
    <br/>
    <div className="helpcalendar"><HelpCalendar/></div>
    <br/>
    <div className="dayhelps"><DayHelps/></div>
    <br/>
    <div className="helplist"><HelpList/></div>
    <br/>
    <div className="helppost"><HelpPost/></div>
    <br/>
    <div className="helpdetail"><HelpDetail /></div>
    </div>

    </div>
    </>
  );
}

export default Assistance;
