"use client";

import { useState } from "react";
import Link from "next/link";

export default function ViewTasksPage() {
  const [tasks] = useState([
    { id: 1, name: "Task 1", status: "Pending" },
    { id: 2, name: "Task 2", status: "In Progress" },
    { id: 3, name: "Task 3", status: "Completed" },
  ]);

  return (
    <div>
      <h1>View Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong> - {task.status}
          </li>
        ))}
      </ul>
      <Link href="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}