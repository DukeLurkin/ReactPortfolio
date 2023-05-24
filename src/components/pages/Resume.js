import React from 'react';
import "../../styles/Resume.css";
import pdf from "../images/resume.pdf"

export default function Resume() {
  return (
    <div className="Resume">
      <h1>Resume</h1>
      <h3>
      <a href={pdf}>Download</a>
      </h3>
      <p>
        **^^Click "Download" to download a .pdf copy of my resume Click^^**
      </p>
      <p>Proficencies
        <li>C++</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Blockchain/Cryptocurrencies</li>
      </p>
    </div>
  );
}
