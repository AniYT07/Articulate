import React from 'react'
import Navbar from '../components/Navbar';

function Education() {
  const myStyle = {
    backgroundColor: 'black',
  }

  return (
    <>
    <Navbar/>
    <div className="" style={myStyle}>
      <div><h1 className="heading" style={{textAlign: 'center', fontFamily: "'Alkatra', 'cursive'", fontSize: '60px', color: 'white',}}>Education</h1></div>
      
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>WHAT IS THE PROBLEM?</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Being a high school student, I can say with confidence that our education system needs some serious development, from availability to practicality. Resentfully, I am a part of the Indian education system which solely focuses on the grades rather than all round development and talents that lie outside of the academic circle. Consider the following factors-:
      <br/><br/>
                  
      1{')'} EDUCATION IS EXPENSIVE- I'll be applying to colleges this year, and it strokes my mind every time I see their full tuition fee. Forget the poor, even somebody who is from a middle-class family won't be able to pay the full tuition of these prestigious colleges without taking huge amounts of loan, how do you suppose students' who come from a poor family to achieve higher education?<br/><br/>
      2{')'} PRACTICALITY - This includes applying your knowledge by actually doing things rather than just writing it down in the paper which is what all schools do, and the worst part is that you are judged on the basis of that. This sphere of problem further expands towards standardized testing. “ONE EXAM CAN'T DECIDE MY FUTURE” that's is so cliché, and a lie, because it can….it so can. <br/><br/>
      3{')'} STRESS - this is a self-explanatory problem that has been an increasing part of our education system for decades. The last 6 months of senior year are the most stressful time of entire high school partially because of the final examination which has the potential to decide your faith and the college application process with each college having like 10 different deadlines. Personally speaking, my school just cares about the final examination rather than providing its student with guidance to what lies ahead.<br/><br/>
      4{')'}  STRESS - this is a self-explanatory problem that has been an increasing part of our education system for decades. The last 6 months of senior year are the most stressful time of entire high school partially because of the final examination which has the potential to decide your faith and the college application process with each college having like 10 different deadlines. Personally speaking, my school just cares about the final examination rather than providing its student with guidance to what lies ahead.</div>

      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>SOLUTIONS</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Well, if I were to end it in one sentence, just make all the above problems go away by introducing a stress-free, choice-free, and a cost cutting education system. As amazing as it sounds, it can't happen for like a decade, even if start working on it right now, but we have to, so might as well be now.<br/><br/>
      
      1{')'} Raising and Providing sufficient funds could be great. I want to say provide education loans at a low rate of interest but I personally don’t think anyone should have to take a loan just to get the education they deserve.<br/><br/>
      2{')'} Proving sufficient training to the teachers, not only bound to their field of expertise but an overall training including psychology to help alleviate stress in the education system.<br/><br/>
      3{')'} Changing the curriculum in such a way that it focuses in overall development of students and provide them with proper guidance by teaching subjects that include finance and all types of laws: I still don’t understand why this is already not compulsory, learning about finances will help us secure a better future and learning about laws will teach us to be civil. 
      </div>
      
      
      </div>
      </>
  )
}

export default Education
