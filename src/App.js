import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Filter from './components/Filter';

function App() {
  const [hitParams, setHitParams] = useState({
    role: ''
  })

  const p = {
    hitParams,
    setHitParams
  }

  return (
    <div>
      <Filter {...p} />
    </div>
  );
}

export default App;
