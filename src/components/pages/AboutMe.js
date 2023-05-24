import React from 'react';
import logo from '../../LukeHeadshot.PNG';
import '../../styles/AboutMe.css';

export default function AboutMe() {
  return (
    <div className="AboutMe">
      <h1>About Me:</h1>
      <a>
      <img src={logo} alt="Logo" />
      </a>
      <p>
        This is a REALLY REALLY REALLY short bio about me.
      </p>
    </div>
  );
}
