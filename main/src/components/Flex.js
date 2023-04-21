import React from 'react';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';
import nuclear from '../resources/nuclear_fission.png'
import education from '../resources/education.png'
import population from '../resources/population.png'
import genome from '../resources/genome.png'
import climate from '../resources/climate.png'
import cyber_threat from '../resources/cyber_threat.png'


function flex() {
  const myStyle1 = {
    backgroundColor: 'black',
    height: '420px',
  }
  const myStyle2 = {
    marginTop: '40px',
    border: '2px solid #FF0086',
    fontFamily: "'Caveat', cursive",
    fontSize: '21px',
    backgroundColor: 'black',
  }
  const myStyle3 = {
    backgroundColor: 'black',
    textAlign: 'center',
    fontFamily: "'Caveat', cursive",
    color: "pink",
    fontSize: '25px',
  }
  
  return (
    <>
      <motion.div className="" style={myStyle3}><strong>"We are a part of this world, and if it gets hurt, we'll suffer the pain. Think about it....."</strong></motion.div>
      <div className="d-flex const myStyle1 justify-content-center" style={myStyle1}>
        <motion.div whileHover={{backgroundImage: `url(${nuclear})`, border: 'none', boxShadow: '0px 0px 8px rgb(255, 255, 255)', textIndent: '-9000px', textTransform: 'capitalize',}} transition={{duration: 0.01}} className="container" style={myStyle2}><Link to="/nuclear" style={{textDecoration: 'none', color: 'white', fontFamily: "'Alkatra', 'cursive'"}}><motion.h1>Nuclear Terror</motion.h1></Link><p style={{ color: 'white', fontFamily: "'M PLUS 1p', sans-serif", fontWeight: 'bold'}}>‘NUCLEAR TERRORISM’- It refers to anyone using nuclear weapon (atom bombs, or nuke) as an act of terrorism.
          A weapon having the capability of causing this kind of havoc produces an immense threat to humanity, this is one of the most important challenges engineers will face and I intend to work towards the same through my ideas, solution, and future knowledgeWith the increase in production of nuclear energy, there will be an increased risk of fissile material (Material having the capability of undergoing nuclear fission) getting into the wrong hands and without proper methods to control.
        </p></motion.div>
        <motion.div whileHover={{backgroundImage: `url(${education})`, border: 'none', boxShadow: '0px 0px 8px rgb(255, 255, 255)', textIndent: '-9000px', textTransform: 'capitalize', }} transition={{duration: 0.01}} className="container" style={myStyle2}><Link to="/Education" style={{textDecoration: 'none', color: 'white', fontFamily: "'Alkatra', 'cursive'"}}><h1>Education</h1></Link><p style={{ color: 'white', fontFamily: "'M PLUS 1p', sans-serif", fontWeight: 'bold'}}>our education system needs some serious development, from availability to practicality. Resentfully, I am a part of the Indian education system which solely focuses on the grades rather than all round development and talents that lie outside of the academic circle. Consider the following factors-:1{')'} EDUCATION IS EXPENSIVE- I'll be applying to colleges this year, and it strokes my mind every time I see their full tuition fee. Forget the poor, even somebody who is from a middle-class family won't be able to pay the full tuition of these prestigious colleges without taking huge amounts of loan.
        
        </p></motion.div>
        <motion.div whileHover={{backgroundImage: `url(${genome})`, border: 'none', boxShadow: '0px 0px 8px rgb(255, 255, 255)',textIndent: '-9000px', textTransform: 'capitalize',}} transition={{duration: 0.01}} className="container" style={myStyle2}><Link to="/Genome_Editing" style={{textDecoration: 'none', color: 'white', fontFamily: "'Alkatra', 'cursive'"}}><h1>Genome Editing</h1></Link><p style={{ color: 'white', fontFamily: "'M PLUS 1p', sans-serif", fontWeight: 'bold'}}>If you had an idea that was going to outrage the society, would you keep it to yourself? Genome editing is a way of making specific changes to the DNA of a cell or organism. With this kind of technology we can cure diseases, make human alteration, design babies with selected inheritance, and a lot more, but who will put limitation to this? Who will have the privilege? Who will decide the extent? We are on the verge of changing the future of mankind with genetic engineering but the question is should we? A genome is a DNA that consists of a DNA codes of four different letter : A, C, G, and T.
        </p></motion.div>
      </div>
      <div className="d-flex const myStyle1 justify-content-center" style={myStyle1}>
        <motion.div whileHover={{backgroundImage: `url(${climate})`, border: 'none', boxShadow: '0px 0px 8px rgb(255, 255, 255)', textIndent: '-9000px', textTransform: 'capitalize',}} transition={{duration: 0.01}} className="container" style={myStyle2}><Link to="/climate_change" style={{textDecoration: 'none', color: 'white', fontFamily: "'Alkatra', 'cursive'"}}><h1>Climate Change</h1></Link><p style={{ color: 'white', fontFamily: "'M PLUS 1p', sans-serif", fontWeight: 'bold' }}>Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas.
        Global climate change is not a future problem. Changes to Earth’s climate driven by increased human emissions of heat-trapping greenhouse gases are already having widespread effects on the environment.
        </p></motion.div>
        <motion.div whileHover={{backgroundImage: `url(${population})`, border: 'none', boxShadow: '0px 0px 8px rgb(255, 255, 255)', textIndent: '-9000px', textTransform: 'capitalize',}} transition={{duration: 0.01}} className="container" style={myStyle2}><Link to="/population" style={{textDecoration: 'none', color: 'white', fontFamily: "'Alkatra', 'cursive'"}}><h1>Population</h1></Link><p style={{ color: 'white', fontFamily: "'M PLUS 1p', sans-serif", fontWeight: 'bold' }}>In case you didn’t know, population growth simply refers to an increase in the number of individuals. However, population growth isn’t itself a problem (it’s is inevitable) but when the total number of individuals exceeds the carrying capacity of the environment, or I should say the environment loses its sustainability then that’s a problem. OVERPOPULATION is the actual problem, HOW? Glad you asked. Consider the following factors-: 1. POVERTY
                            2. MORTALITY RATES
                            3. RESOURCE CONSUMPTION
                            4. GLOBAL WARMING
                              
                            All of the above factors will increase Now again, consider the following factors-:
        </p></motion.div>
        <motion.div whileHover={{backgroundImage: `url(${cyber_threat})`, border: 'none', boxShadow: '0px 0px 8px rgb(255, 255, 255)', textIndent: '-9000px', textTransform: 'capitalize',}} transition={{duration: 0.01}} className="container" style={myStyle2}><Link to="/Cyber_threats" style={{textDecoration: 'none', color: 'white', fontFamily: "'Alkatra', 'cursive'"}}><h1>Cyber Threats</h1></Link><p style={{ color: 'white', fontFamily: "'M PLUS 1p', sans-serif", fontWeight: 'bold' }}>A cyber or cybersecurity threat is a malicious act that seeks to damage data, steal data, or disrupt digital life in general. Cyber threats include computer viruses, data breaches, Denial of Service (DoS) attacks, and other attack vectors. Cyber threats also refer to the possibility of a successful cyber attack that aims to gain unauthorized access, damage, disrupt, or steal an information technology asset, computer network, intellectual property, or any other form of sensitive data. Cyber threats can come from within an organization by trusted users or from remote locations by unknown parties.
          
        </p></motion.div>
      </div>
    </>

  )
}

export default flex
