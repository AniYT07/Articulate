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

function signup() {
  const myStyle={
    backgroundColor: 'black',
    height: '149px'
  } 
  return (
    <>
    <Navbar/>
    {/* <div style={myStyle}></div> */}
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-black'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          {/* <MDBBtn className='mb-4 w-50 gradient-custom-4' size='lg'>Register</MDBBtn> */}
          {/* <button type="button" class="btn btn-outline-primary">Primary</button> */}
          <button type="button" class="btn btn-primary btn-lg mb-4 w-100">Register</button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    <div style={myStyle}></div>
    </>
  )
}

export default signup
