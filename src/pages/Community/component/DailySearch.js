import React from 'react'
import { Button } from 'react-bootstrap'

// 樣式
import './style/DailySearch.scss'
// 插圖
import search from '../images/icon-search.svg'

// 元件

function Search(props) {
  return (
    <>
      {/* 搜尋功能 */}
      <div className=" daily-search input-group justify-content-center pt-3 pb-2">
        <input
          type="search"
          className="border border-primary rounded-pill mx-2 pl-4 vw-md-50 focus-primary"
          placeholder="開個話題吧.."
        />
        <Button className="rounded-circle" onClick="#">
          <img src={search} className="btn" />
        </Button>
      </div>
    </>
  )
}

export default Search
