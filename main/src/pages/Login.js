import React from 'react'
import Navbar from '../components/Navbar'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
  const myStyle={
    backgroundColor: 'black',
    height: '899px'
  }
  return (
    <>
      <Navbar/>
      <div style={myStyle}>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-black' style={{padding: '100px'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Login</h2>
          <MDBInput wrapperClass='mb-4' label='Email Address' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
          </div>
          {/* <MDBBtn className='mb-4 w-50 gradient-custom-4' size='lg'>Register</MDBBtn> */}
          {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
          <button type="button" class="btn btn-primary btn-lg mb-4 w-100">Login</button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
      </div>
    </>
  )
}

export default Login
