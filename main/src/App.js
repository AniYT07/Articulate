import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Flex from './components/Flex';

function App() {
  const myStyle={
    backgroundColor: 'black',
    height: '100px',
  }
  return (
    <>
      <Navbar/>
      <Flex/>
      <div style={myStyle}></div>
    </>
)
}

export default App;
