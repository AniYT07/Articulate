import React from 'react'
import Navbar from '../components/Navbar'

function News() {
    const myStyle={
        backgroundColor: 'black',
        height: '899px'
      }
  return (
    <>
        <Navbar/>
        <div className="" style={myStyle}>
        <h1 style={{color: 'white', fontFamily: "'Dancing Script', cursive", textAlign: 'center',}}>we are currently working on this feature</h1>
        </div>
    </>
  )
}

export default News
