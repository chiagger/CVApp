import React, { useState } from 'react';
import '../styles/General.css';
import OneExperience from './OneExperience';

function Education(props) {
  const [numExperiences, setNumExperiences] = useState(1); // State to track the number of experiences

  const addExperience = () => {
    setNumExperiences(prevNumExperiences => prevNumExperiences + 1); // Increment the number of experiences
  };

  return (
    <div className="education">
      <div className='title'>Education</div>
      <div className="sections">
      {/* Render OneExperience component based on the number of experiences */}
      {[...Array(numExperiences)].map((_, index) => (
        <OneExperience key={index} />
      ))}
      {/* Span to add another experience */}
      </div>
      <span className="material-symbols-outlined" onClick={addExperience}>
        add_circle
      </span>
    </div>
  );
}

export default Education;
