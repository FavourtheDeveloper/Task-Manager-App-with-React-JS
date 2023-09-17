  import {FaTimes} from 'react-icons/fa'

  const Task = ({task, deleteevent, onToggle}) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ""}`} 
    onDoubleClick={() => onToggle(task.id)} >
      <div className='icondiv'>
        <h3>{task.title}  </h3>
        <FaTimes onClick={() => deleteevent(task.id)} />
        </div>
        <p>{task.time}</p>
    </div>
  )
}

export default Task