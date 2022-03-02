import React from 'react'
// 引入圖片
import Calender from '../img/calender.svg'
import BgPaw from '../img/bg_paw.svg'
// 引用共同Intro樣式
import '../intro/HomeIntro.scss'
// 引入動態特效文件
import './IntroAnimation'

function HomeSchedule() {
  return (
    <>
      <div className="home-intro">
        <div className="home-intro-page">
          {/* 1. 簡介文字 */}
          <div className="home-info-txt">
            <h2>提醒您</h2>
            <h2>毛孩生活的大小事</h2>
            <br />
            <h5>打疫苗、散散步</h5>
            <h5>細心記錄下毛孩每一個生長狀況</h5>
            <h5>讓毛孩健康長大</h5>
          </div>
          {/* 2. 對話框 */}
          <div className="home-dialog">
            <div className="dialogBox1">
              <p>下週要幫毛孩打疫苗</p>
            </div>
            <div className="dialogBox2">
              <p>已經預約了寵物美容</p>
            </div>
            <div className="dialogBox3">
              <p>差不多該買飼料嘍！</p>
            </div>
          </div>
          {/* 3. 主角插畫 */}
          <div className="home-intro-down">
            <div className="home-main-pic mx-auto">
              <img src={Calender} alt="calender" />
            </div>
          </div>
          {/* 4. 中文大標題 */}
          <div className="home-intro-title">
            <h1>
              毛孩
              <br />
              行事曆
            </h1>
          </div>
          {/* 5. 背景大腳印 */}
          <div className="home-bg-paw">
            <img src={BgPaw} alt="bg-paw" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSchedule
