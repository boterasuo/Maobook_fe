import React, { useRef, useEffect } from 'react'
// 引入圖片
import Paw from '../img/paw.svg'
import GiftBox from '../img/giftbox.svg'
import GiftBack from '../img/giftback.svg'
// 引入樣式
import './Start.scss'
// 引入動畫套件
import 'animate.css'
// 引入動畫套件
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function Start() {
  // 動畫ㄧ 腳印fade in
  // 1. 簡易版
  gsap.registerPlugin(ScrollTrigger)

  const el = useRef();
  // const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.from('.starting', {
      scrollTrigger: '.paw3',
      duration: 1,
      opacity: 0,
      // delay: 1,
      stagger: 0.5,
    })
  })

  // 2. 進階版
  // const paws = gsap.utils.toArray('.starting')

  // paws.forEach((starting, i) => {
  //   const anim = gsap.fromTo(
  //     starting,
  //     { autoAlpha: 0, y: 50 },
  //     { duration: 2, delay: 0.5, stagger: 0.2, autoAlpha: 1, y: 0 }
  //   )
  //   // 下滑觸發事件
  //   ScrollTrigger.create({
  //     trigger: '.starting',
  //     animation: anim,
  //     toggleActions: 'play none none none',
  //     once: true,
  //   })
  // })

  return (
    <>
      <div className="home-start">
        {/* 小腳印*4 */}
        <div className="content-up">
          <div className="starting">
            <img className="paw1" src={Paw} alt="paw1" />
          </div>
          <div className="starting">
            <img className="paw2" src={Paw} alt="paw2" />
          </div>
          <div className="starting">
            <p className="paw-txt1">
              你也有一個
              <br />
              一直陪伴著你的毛孩嗎
            </p>
          </div>
          <div className="starting">
            <img className="paw3" src={Paw} alt="paw3" />
          </div>
          <div className="starting">
            <img className="paw4" src={Paw} alt="paw4" />
          </div>
        </div>
        {/* 禮物 */}
        <div className="content-down">
          <div className="paw-txt1">
            <p>
              每個毛小孩的到來
              <br />
              都是一份獨一無二的禮物
            </p>
          </div>
          <div className="gift">
            <img className="giftbox" src={GiftBox} alt="giftbox" />
            <img className="giftback" src={GiftBack} alt="giftback" />
          </div>
          <div>
            <p>
              讓毛毛日記和你一起
              <br />
              用心陪伴牠們的一生
              <br />
              MAO BOOK
              <br />
              您最貼心的寵物管家
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Start
