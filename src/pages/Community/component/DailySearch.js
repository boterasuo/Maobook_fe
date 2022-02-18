import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

// 樣式
import "./style/DailySearch.scss"
// 插圖
import search from "../images/icon-search.svg";

function Search(props) {
  return (
    <>
      {/* 搜尋功能 */}
      <div  className=" daily-search input-group justify-content-center py-5">
        <input
          type="search"
          className="border border-primary rounded-pill mx-2 form-control"
          placeholder="開個話題吧.."
        />
        <Button className="rounded-circle" onClick="#">
          <img src={search} className="btn" />
        </Button>
      </div>
    </>
  );
}

export default Search;
