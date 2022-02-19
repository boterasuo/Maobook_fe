import React from 'react';
import './Checkbox.scss';

function Checkbox(props) {
  return (
    <>
      <div className="checkbox d-flex">
        <label>
          <input
            type="checkbox"
          />{' '}
          <span>幼犬</span>
        </label>

        <label>
          <input
            type="checkbox"
          />{' '}
          <span>成犬</span>
        </label>

        <label>
          <input
            type="checkbox"
          />{' '}
          <span>全齡犬</span>
        </label>

      </div>
    </>
  )
}

export default Checkbox;
