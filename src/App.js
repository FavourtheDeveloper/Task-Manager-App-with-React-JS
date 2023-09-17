import { useState } from 'react';
import Addform from "./components/Addform";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {

  const [tasks, setTask] = useState([
    {
        id: 1,
        title: "Go to work",
        time: "8am",
        reminder: true
    },
    {
        id: 2,
        title: "Go to Swim",
        time: "6pm",
        reminder: true
    },
    {
        id: 3,
        title: "Eat well and sleep",
        time: "10pm",
        reminder: false
    }
]
)

const [button, setButton] = useState(false)

const [title, setTitle] = useState("")
const [text, setText] = useState("")
const [reminder, setReminder] = useState(false)

const deleteTask = (id) => {
  setTask(
    tasks.filter((task) => task.id != id )
  )
}

const toggleReminder = (id) => {
  setTask(
    tasks.map((task) => task.id == id ? {...task, reminder : !task.reminder} : task
      
  )
  )
}

const togbut = () => {
  setButton(!button)
}

  return (
    <div className="App">
      <Header togbut={togbut} button={button} />
      <Addform title={title} text={text} reminder={reminder} button={button}  />
      <Tasks tasks={tasks}
       onToggle={toggleReminder}
       deleteevent={deleteTask} />
    </div>
  );
}

export default App;
