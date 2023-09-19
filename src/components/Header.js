import React from 'react'
import Button from './Button'

const Header = ({togbut, button}) => {
  return (
    <div className='header'>
        <h1>Task Manager</h1>
       <Button button={button} togbut={togbut} />
    </div>
  )
}

export default Header