import React from 'react'
import loading from "../../../img/loading_paw.svg";

function PetList(props) {
  return (
      <div className="info-card">
        <h2>
          pet list
        </h2>
        {/* loading 動圖 (記得修改圖片路徑) */}
        <div className="text-center">
          <div className="spinner-grow text-primary" role="status">
            <img alt="" className="sr-only" src={loading} />
          </div>
        </div>
        
      </div>

  )
}


export default PetList
