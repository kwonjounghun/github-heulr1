import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>header</h1>
      <Link to="/">main</Link>
      <Link to="/sub">sub</Link>
      <Link to="/sub2">sub2</Link>
      <Link to="/sub3">sub3</Link>
    </div>
  );
};

export default App;
