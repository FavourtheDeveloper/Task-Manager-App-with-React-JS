import React from 'react'

const Addform = ({title, text, reminder, button}) => {
  return (
      <div className={`formarea ${button ? 'buttontog' : ""}`} >
        <form>
        <input type="text" name="title" id="title" value={text} placeholder='Enter the Title...'/>
        <input type="text" name="time" id="time" value={title} placeholder='Enter the Time...' />
        <div className='formcontrol'>
          <label htmlFor="reminder">Reminder</label>
        <input type="checkbox" name="reminder" id="reminder" />
        </div>
        <input type="submit" value="Add" />
        </form>
    </div>
  )
}

export default Addform