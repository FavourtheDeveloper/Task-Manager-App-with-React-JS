import { useState } from "react";

const Addform = ({ button }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <div className={`formarea ${button ? "buttontog" : ""}`}>
      <form>
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
