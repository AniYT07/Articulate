import React from 'react'
import Navbar from '../components/Navbar';
import { Link, Navigate, useNavigate } from "react-router-dom";

function About() {
  const myStyle={
    backgroundColor: 'black',
    height: '890px'
  }
  return (
    <>
    <Navbar/>
    <div style={myStyle}>
      {/* <div className="container text-bg-dark p-3" style={{}}><h1 style={{textAlign: 'center',}}>ARTICULATE</h1><p style={{}}>Articulate is a blog website which defines major world problems and provide with ideas to alleviate them in the most simple and easy to comprehend language. The goal of articulate is to provide people with proper insight about the major problems world is facing and spread awareness. More content will be available very soon.</p></div> */}
      <div className="card mb-3  p-4" style={{height: '23rem', width: '50%', position: 'absolute', marginTop: '130px', marginLeft: '460px', backgroundColor: '#E3B1D8'}}>
      <div className="card-body">
        <h1 className="card-title" style={{fontFamily: "'Dancing Script', cursive", textAlign: 'center', fontSize: '60px'}}>Articulate</h1>
        <p className="card-text" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px'}}>Articulate is a blog website which defines major world problems and provide with ideas to alleviate them in the most simple and easy to comprehend language. The goal of articulate is to provide people with proper insight about the major problems world is facing and spread awareness. More content will be available very soon.</p>
        <Link to="/" className="btn btn-primary" style={{}}>Go to home</Link>
      </div>
      </div>
    </div>
    </>
  )
}

export default About
