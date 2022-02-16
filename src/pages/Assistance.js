import React from 'react';
import HelpIntro from './Assistance/HelpIntro';
import HelpCalendar from './Assistance/HelpCalendar';
import DayHelps from './Assistance/DayHelps';
import HelpList from './Assistance/HelpList';
import HelpPost from './Assistance/HelpPost';
import HelpDetail from './Assistance/HelpDetail';

function Assistance() {
  return (
    <>
    <HelpIntro/>
    <br/>
    <br/>
    <br/>
    <HelpCalendar/>
    <br/>
    <br/>
    <br/>
    <DayHelps/>
    <br/>
    <br/>
    <br/>
    <HelpList/>
    <br/>
    <br/>
    <br/>
    <HelpPost/>
    <br/>
    <br/>
    <br/>
    <HelpDetail />
    </>
  );
}

export default Assistance;
