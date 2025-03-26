"use client";

import { useState } from "react";

export default function MainContent() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, name: `Task ${tasks.length + 1}` };
    setTasks([...tasks, newTask]);
  };

  return (
    <main>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </main>
  );
}