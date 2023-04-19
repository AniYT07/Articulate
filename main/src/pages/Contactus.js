import React from 'react'
import Navbar from '../components/Navbar'

const myStyle={
  backgroundColor: 'black',
  height: '896px'
}

function Contactus() {

  return (
    <>
    <Navbar/>
    <div style={myStyle}>
      
    <div className="card mb-3  p-4" style={{height: '33rem', width: '50%', position: 'absolute', marginTop: '130px', marginLeft: '460px', backgroundColor: '#E3B1D8'}}>
      <div className="card-body">
        <h1 className="card-title" style={{fontFamily: "'Dancing Script', cursive", textAlign: 'center', fontSize: '60px'}}>Share your story</h1>
        <p className="card-text" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px'}}> Have any problems to define? any ideas? Make sure to contact us using the form below. If you want your own ideas to be featured on the discussions page with proper credits, then feel free to contact us with a defined problem and a proposed solution.
        </p>
        <form action="https://formspree.io/f/mknaknjd" method="POST">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label" style={{fontFamily: "'Dancing Script', cursive", fontSize: '20px',}}>Email address</label>
  <input type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style={{fontFamily: "'Dancing Script', cursive", fontSize: '20px',}}>Talk to us</label>
  <textarea class="form-control" name="message" id="message" rows="3"></textarea>
</div>
        <button type="submit" class="btn btn-primary">Submit</button></form>
        
      </div>
      </div>
      
    </div>
    </>
  )
}

export default Contactus
