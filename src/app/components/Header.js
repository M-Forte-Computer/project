import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Task Management App</h1>
      <nav>
         <Link href="/view-tasks">View Tasks</Link> | <Link href="/add-tasks">Add Tasks</Link>
      </nav>
    </header>
  );
}