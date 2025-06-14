import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(["Task 1"]);
  const [newTask, setNewTasks] = useState("");

function HandleInputChange(event){
  setNewTasks(event.target.value);
}
function add(){
  setTasks(t => [...t,newTask])
  setNewTasks("");
}

  return (
    <>
      <div className="todolist">
        <input
        type="text"
        placeholder="type somthing.."
        value={newTask}
        onChange={HandleInputChange}
        />
        <button onClick={add}>Add</button>
        <ol>
          {tasks.map((task,index) =>
          <li key={index}>
            <span>{task}</span>
          </li>         
          )}
        </ol>

      </div>
    </>
  );
}

export default App;
