import { useState } from 'react';
import Addform from "./components/Addform";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from './components/Footer';
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

const [button, setButton] = useState(true)


const addTask = (title, text, reminder) => {
  let randid = Math.round(Math.random() * 100)

  tasks.forEach((task) => {if(task.id == randid) {alert("same id"); randid = Math.round(Math.random() * 100)}})

  setTask([...tasks, {
      id: randid,
      title: title,
      time: text,
      reminder: reminder
  }])
}



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
      <Addform button={button} addTask={addTask} tasks={tasks} setTask={setTask} />
      <Tasks tasks={tasks}
       onToggle={toggleReminder}
       deleteevent={deleteTask} />
       <Footer text="FavourtheDev" />
    </div>
  );
}

export default App;
