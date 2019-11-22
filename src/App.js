import React from 'react';
import Input from './Components/Input';
import './index.scss';

function App() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Input
        className="fnt-m"
        placeholder="Enter Email"
      />
    </div>
  );
}

export default App;
