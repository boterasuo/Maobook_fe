/* eslint-disable prettier/prettier */
import React from 'react'
import  { useState } from 'react'

import './Checkbox.scss'

function Checkbox(props) {
  const { filterName, checkeds, setCheckeds } = (props)
  console.log("88",checkeds);

  // checkedProduct.includes(1);
  return (
    <>
      {filterName.map((d) => {
        return (
          <div className="checkbox d-flex">
            <label>
              <input type="checkbox" value={d.id}
                onChange={(e) => {
                    const newcheckedProduct = [...checkeds, e.target.value]
                    setCheckeds(newcheckedProduct)
                  }
                }

              />
              <span>{d.name}</span>
            </label>
          </div>
        )
      })}
    </>
  )
}

export default Checkbox
