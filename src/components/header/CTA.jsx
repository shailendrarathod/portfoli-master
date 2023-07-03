import React from 'react';
import CV from 'file:///C:/Users/USER/Downloads/Shailendra_Singh%20Rathod_Resume_29-06-2023-23-03-16%20(1).pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
