import React from 'react'

const Button = ({button, togbut}) => {
  return (
    <button className={`${!button ? 'redbut' : ""}`} onClick={togbut}>{button ? "Add New" : "Close"}</button>
  )
}

export default Button