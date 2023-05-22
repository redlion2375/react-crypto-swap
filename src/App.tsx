import React from 'react';
import logo from './logo.svg';
import './App.css';
import SwapForm from './components/appspec/swap-box';
import BlackMask from './components/appspec/blackmask';

function App() {
  return (
    <div className="App">
      <BlackMask />
      <SwapForm />
    </div>
  );
}

export default App;
