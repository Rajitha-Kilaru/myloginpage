import { Link } from 'react-router-dom'
import React from 'react'
import './DashBoard.css'

function DashBoard() {
  return (
    <div>
      <div className='dash-board'>
        <div>
          <h3 className='title'>Welcome</h3>
        </div>
        <div className='logout-section'>
          <Link className='logoutLink' to='/'>Logout</Link>
        </div>
      </div>
      <div className='title-section'>Welcome to DashBoard Page</div>
    </div>
  )
}

export default DashBoard