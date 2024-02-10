import React, { useState } from 'react';
import '../styles/Experience.css';
import OneJob from './OneJob';

function Experience(props) {
  const [numJobs, setNumJobs] = useState(1); // State to track the number of jobs

  const addJob = () => {
    setNumJobs(prevNumJobs => prevNumJobs + 1); // Increment the number of jobs
  };

  return (
    <div className="experience">
      <div className='title'>Experience</div>
      <div className='sections'>
      {/* Render OneJob component based on the number of jobs */}
      {[...Array(numJobs)].map((_, index) => (
        <OneJob key={index} />
      ))}
      {/* Span to add another job */}
      </div>
      <span className="material-symbols-outlined" onClick={addJob}>
        add_circle
      </span>
    </div>
  );
}

export default Experience;
