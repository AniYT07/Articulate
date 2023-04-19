import React from 'react'
import Navbar from '../components/Navbar';

function Genome_editing() {
  const myStyle = {
    backgroundColor: 'black',
    height: '900px'
  }

  return (
    <>
    <Navbar/>
    <div className="" style={myStyle}>
      <div><h1 className="heading" style={{textAlign: 'center', fontFamily: "'Alkatra', 'cursive'", fontSize: '60px', color: 'white',}}>Genome Editing</h1></div>
      
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>INTRODUCTION</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>If you had an idea that was going to outrage the society, would you keep it to yourself? Genome editing is a way of making specific changes to the DNA of a cell or organism. With this kind of technology we can cure diseases, make human alteration, design babies with selected inheritance, and a lot more, but who will put limitation to this? Who will have the privilege? Who will decide the extent? We are on the verge of changing the future of mankind with genetic engineering but the question is should we?
                 </div> 
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>WHAT IS A GENOME?</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>A genome is a DNA that consists of a DNA codes of four different letter : A, C, G, and T. Gather together all this information about the human genome allowed unprecedented insight into the evolutionary mechanism that created humans. This code allows us to understand how people are made, how it is broken into people with diseases. Here a quick example—One million piece of papers with around 6000 letter printed on them consisting of A, C, G, and T (over 6 billion letters) will make a single genome and change in even one of the letter can cause a serious disease.</div>
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>THE PROBLEM</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>For decades we have debated about this but now finally we can do it. Evolution has existed since the birth of the very first cell and how it has changed life forms over the years is beautiful and scary at the same time. Now we have the technology to create life forms of our own but who gets a say in that? First let’s talk about the technology, Clustered Regularity Interspaced Short Palindromic Repeats (CRISPER) is a technology that allows the scientists to go into the DNA of a plant or an animal, or even a human being and remove or replace a small part of that organism’s DNA code. CRISPER is fast, cheap, and can cut and paste genetic code with great precision. <br /> <br /> What is the dark side of this technology? I mean we’re talking about something that would affect human evolution. CRISPER has raised some concerns some ethical concerns about playing god. This has been a very debatable topic for decades but one thing is certain, we need to create a system in order to set some barriers. </div>
      </div>
      
    </>
  )
}

export default Genome_editing
