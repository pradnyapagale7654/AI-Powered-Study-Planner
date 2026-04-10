import React, { useState } from "react";

function TaskForm() {

const [task, setTask] = useState("");
const [date, setDate] = useState("");
const [tasks, setTasks] = useState([]);

const handleSubmit = (e) => {
e.preventDefault();

if (task === "") return;

const newTask = {
task,
date,
completed: false
};

setTasks([...tasks, newTask]);

setTask("");
setDate("");
};

const deleteTask = (index) => {
const newTasks = tasks.filter((_, i) => i !== index);
setTasks(newTasks);
};

const toggleComplete = (index) => {
const updatedTasks = tasks.map((t, i) => {
if (i === index) {
return { ...t, completed: !t.completed };
}
return t;
});

setTasks(updatedTasks);
};

const completedCount = tasks.filter(t => t.completed).length;

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

<input
type="date"
value={date}
onChange={(e) => setDate(e.target.value)}
/>

<button type="submit">Add</button>

</form>

{/* Progress */}
<h4>
Progress: {completedCount} / {tasks.length} completed
</h4>

<h3>Task List</h3>

<ul>
{tasks.map((t, index) => (
<li key={index}>

<span style={{
textDecoration: t.completed ? "line-through" : "none"
}}>
{t.task} — {t.date}
</span>

<button onClick={() => toggleComplete(index)}>
{t.completed ? "Undo" : "Complete"}
</button>

<button onClick={() => deleteTask(index)}>
Delete
</button>

</li>
))}
</ul>

</div>
);
}

export default TaskForm;