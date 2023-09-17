import React from 'react'

const Header = ({togbut, button}) => {
  return (
    <div className='header'>
        <h1>Task Manager</h1>
        <button className={`${!button ? 'redbut' : ""}`} onClick={togbut}>{button ? "Add New" : "Close"}</button>
    </div>
  )
}

export default Header