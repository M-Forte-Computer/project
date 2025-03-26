"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddTasksPage() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName.trim() === "") return;
    const newTask = { id: tasks.length + 1, name: taskName };
    setTasks([...tasks, newTask]);
    setTaskName("");
  };

  return (
    <div>
      <h1>Add Tasks</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}