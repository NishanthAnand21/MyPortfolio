// components/Terminal.js
import React from 'react';
import './styles/Terminal.css';

const Terminal = ({ children }) => {
  return (
    <div className="terminal">
      <pre>{children}</pre>
    </div>
  );
};

export default Terminal;