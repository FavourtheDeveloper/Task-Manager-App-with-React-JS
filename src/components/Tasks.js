import React from 'react'
import Task from './Task'

const Tasks = ({tasks, deleteevent, onToggle}) => {
  return (
    <div className='tasks'>
        {tasks.map(task => 
            <Task key={task.id}
             task={task} onToggle={onToggle}
             deleteevent={deleteevent}
              />
        )}
    </div>
  )
}

export default Tasks