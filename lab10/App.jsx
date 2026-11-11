// purpose: define the top-level component for our application injected into the root
import React, { useState } from "react";
import Student from "./Student";
import "./index.css";

function App() {
  const [showStudent, setShowStudent] = useState(true);

  return (
    <article>
      <h1>Week 10 - React Events and Lifecycle</h1>
      <button onClick={() => setShowStudent(!showStudent)}>
        {showStudent ? "Hide" : "Show"} Student
      </button>

      {showStudent && <Student />}
    </article>
  );
}

export default App;
