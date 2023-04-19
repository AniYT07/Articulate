import React from 'react'
import Navbar from '../components/Navbar'

function Discussions() {
  const myStyle={
    backgroundColor: 'black',
    height: '896px'
  }
  return (
    <>
     <Navbar/>
     <div style={myStyle}><h1 style={{color: 'white', fontFamily: "'Dancing Script', cursive", textAlign: 'center',}}>we are currently working on this feature</h1></div>
    </>
  )
}

export default Discussions
