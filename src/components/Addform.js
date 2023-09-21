import { useState } from "react";

const Addform = ({ button, addTask, tasks, setTask }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    let error = ""

    if(!title) {
      error += "Please enter a Title";
    }

    if(!text) {
      error += "Please enter a Text";
    }

    if(error) {
     alert(error)
    } else {

    
   
    addTask(title, text, reminder);

    setTitle('')
    setText('')
    setReminder(false)
    
   
    }
  }

  return (
    <div className={`formarea ${button ? "buttontog" : ""}`}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the Title..."
        />
        <input
          type="text"
          name="time"
          id="time"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the Time..."
        />
        <div className="formcontrol">
          <label htmlFor="reminder">Reminder</label>
          <input
            type="checkbox"
            name="reminder"
            id="reminder"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default Addform;
