import React, { useState } from "react";

function TaskForm() {

const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);

const handleSubmit = (e) => {
e.preventDefault();

if(task === "") return;

setTasks([...tasks, task]);
setTask("");
};

return (
<div>

<h3>Add Study Task</h3>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Enter task"
value={task}
onChange={(e) => setTask(e.target.value)}
/>

<button type="submit">Add</button>

</form>

<h3>Task List</h3>

<ul>
{tasks.map((t,index)=>(
<li key={index}>{t}</li>
))}
</ul>

</div>
);

}

export default TaskForm;