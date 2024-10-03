import React from 'react';

const ProgressBar = ({ total, completed }) => {
  const percentage = (completed / total) * 100;

  const progressBarStyle = {
    height: '20px',
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '18px',
    overflow: 'hidden',
    border: 'solid white 2px'
  };

  const progressStyle = {
    height: '100%',
    width: `${percentage}%`,
    backgroundColor: '#39ff14',
    borderRadius: 'inherit',
    textAlign: 'right',
    lineHeight: '18px',
    color: 'black',
    fontWeight: 'bold',
    paddingRight: '5px',
  };

  return (
    <div style={progressBarStyle}>
      <div style={progressStyle}>
        {`${Math.round(percentage)}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
