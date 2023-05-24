import React from 'react';
import "../../styles/Resume.css";
import pdf from "../../../src/resume.pdf"

export default function Resume() {
  return (
    <div className="Resume">
      <h1>Resume</h1>
      <a href={pdf}>Download</a>
      <p>
        **Resume pdf coming soon**
      </p>
      <p>Proficencies
        <li>C++</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>More to come</li>
      </p>
    </div>
  );
}
