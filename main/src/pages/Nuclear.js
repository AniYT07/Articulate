import React from 'react'
import Navbar from '../components/Navbar';

function Nuclear() {
  const myStyle = {
    backgroundColor: 'black',
    height: '1600px'
  }

  return (
    <>
    <Navbar/>
    <div className="" style={myStyle}>
      <div><h1 className="heading" style={{textAlign: 'center', fontFamily: "'Alkatra', 'cursive'", fontSize: '60px', color: 'white',}}>Prevent Nuclear Terror</h1></div>
      
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>WHAT IS NUCLEAR ENERGY AND WHY IS IT NECESSARY?</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Nuclear energy is the result of nuclear fission – Everybody’s familiar with the structure of atom right! So, atoms of radioactive elements have unstable nuclei which generates a lot more energy than any other chemical reaction. However, when neutrons are passed through an unstable nucleus of a radioactive element (Uranium 235), the nucleus splits into to two corresponding nuclei of different mass producing a massive amount of energy (1 kg of Uranium can create 24,000,000 kwh of energy).The above picture is a lame demonstration of nuclear fission taking place. The mechanism is pretty simple; Remember we talking about neutrons casing nucleus of an atom to split, that’s is exactly what is happening. URANUM235 (a radioactive element) collides with a neutron resulting in UNRANIUM236 which further splits into an atom of barium and krypton plus 3 neutrons (Law of conservation of mass), this further results chain reaction and produces large amount of energy.<br/><br/>
                  
                  1. NUCLEUS – positively charged central part of the atom constituting most of the atom’s mass, contain protons and neutrons.<br/>
                  2. NEUTRON – A particle with no charge, found in the nucleus of an atom.<br/>
                  3. MASS OF A NUCLEUS - Total number of protons and neutron in a nucleus.<br/><br/> </div>
                  {/* <img src={fission} alt="fission" style={{height: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}} /> */}
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Nuclear energy in today’s world constitutes a considerable amount in the total production of energy, making itself one of the fastest growing energy sources in the world. Statistically speaking, nuclear energy constitutes a total of 11% in total energy production of the world and will continue to increase its contribution for decades.</div>
      
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>NUCLEAR WEAPON</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Applications of nuclear energy are not only limited to meet the world’s energy demand. Nuclear weapons are based on the same principle (neutrons bombarded with radioactive atoms produces energy) only this time the energy is used in causing an explosion.Nuclear energy in today’s world constitutes a considerable amount in the total production of energy, making itself one of the fastest growing energy sources in the world. Statistically speaking, nuclear energy constitutes a total of 11% in total energy production of the world and will continue to increase its contribution for decades.</div>

      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>NUCLEAR TERROR</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>This brings me towards the concept of NUCLEAR TERRORISM - It refers to anyone using nuclear weapons (atom bombs, or nuke) as an act of terrorism. A weapon having the capability of causing this kind of havoc produces an immense threat to humanity, this is one of the most important challenges engineers are facing and the same has been put forward in NAE’S 14 GRAND CHALLENGES. With the increase in production of nuclear energy, there will be an increased risk of fissile material (Material having the capability of undergoing nuclear fission) getting into the wrong hands and without proper methods to control, detect and determine the amount of fissile material in nuclear power plants and nuclear research labs, nuclear terror will continue to be an increased threat to humanity which seems to be the uttermost concern for humanity.</div>

      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>WHAT IS THE SOLUTION?</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Glad you asked, other than making strict laws and setting up committee which will keep a regular check on the radioactive element (systems are always flawed) a rather scientific approach can be used. All radioactive materials emit some sort of radiation (mostly gamma rays). A device to detect radiation can be used. Such type of device already exists. However, a device that can MEASURE the enormous amount of radiation emitted by the radioactive materials up to a particular area can made (Not easily but possibly). Geiger-Muller Counter already exist to measure radiation but that device simply won’t work with the proposed problem because it cannot measure high radiation level. Hypothetically, if this kind of device is installed in a nuclear power plant then it would be able to measure the amount of radiation produced by the fissile material in the plant, and if there is any unusual change in radiation the device will ring an alarm warning the authority about it. In other words, If fissile material leaves the nuclear power plant then the radiation level will go down which will be displayed on the device. With this solution, the possible smuggling of any radioactive material from the plant would not be a threat and the same thing could be done with shipping containers used for shipping fissile</div>

      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>METHODOLOGY</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>The device will be based on the principle that radiation like gamma rays can ionize elements (ionizing radiation) and the ionization level can be used to determine the gamma rays entering the device henceforth, giving radiation measure. This methods will be one of the best way to detect and control radioactive elements, and will also help authorities to keep track of the materials use. The impact of this could be worldwide, as chances of NUCLEAR TERRORISM happening will be negligible and humanity will remain at peace.</div>
      </div>
      
    </>
  )
}

export default Nuclear
