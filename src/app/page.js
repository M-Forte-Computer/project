'use client';
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to the Task Management App</h1>
        <p>Organize, assign, and track tasks efficiently.</p>
      </main>
      <Footer />
    </div>
  );
}