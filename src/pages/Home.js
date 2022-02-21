import React from 'react';
// 引入個頁面 Intro
import MainHome from "./Home/MainHome";
import Schedule from "./Schedule/Intro";
import Store from "./Store/Intro";
import Community from "./Community/Intro";
import Assistance from './Assistance/HelpIntro';
import SignUp from "./Home/SignUp";
// 引入串場元件 
import Start from "./Home/component/Start";
import End from "./Home/component/End";
import Footprint from "./Home/component/Footprint"


function Home(props) {
  return (
    <>
      <MainHome />
        <Start />
      <Schedule />
        <Footprint />
      {/* <Store /> */}
      <Community />
      <Assistance />
        <End />
      <SignUp />
    </>
  )
}

export default Home;