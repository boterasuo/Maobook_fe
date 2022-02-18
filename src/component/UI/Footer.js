import React from 'react'

function Footer(props) {
  return (
    <>
      <footer className="bg-secondary mt-auto py-3 text-center" style={{ZIndex:9999}}>
        <div className="container">
          <span className="text-white">
          © 2022 Maobook <a className='text-white' href='#'>作業版權免責說明</a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer