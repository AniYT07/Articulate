import React from 'react'
import Navbar from '../components/Navbar';

function Climate_change() {
  const myStyle = {
    backgroundColor: 'black',
    height: '1600px'
  }

  return (
    <>
    <Navbar/>
    <div className="" style={myStyle}>
      <div><h1 className="heading" style={{textAlign: 'center', fontFamily: "'Alkatra', 'cursive'", fontSize: '60px', color: 'white',}}>Climate Change</h1></div>
      
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>WHAT IS CLIMATE CHANGE AND ITS IMPACT?</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Climate change refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, such as through variations in the solar cycle. But since the 1800s, human activities have been the main driver of climate change, primarily due to burning fossil fuels like coal, oil and gas.<br/></div>
                  {/* <img src={fission} alt="fission" style={{height: '400px', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '50%'}} /> */}
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>Global climate change is not a future problem. Changes to Earth’s climate driven by increased human emissions of heat-trapping greenhouse gases are already having widespread effects on the environment: glaciers and ice sheets are shrinking, river and lake ice is breaking up earlier, plant and animal geographic ranges are shifting, and plants and trees are blooming sooner. Effects that scientists had long predicted would result from global climate change are now occurring, such as sea ice loss, accelerated sea level rise, and longer, more intense heat waves.<br/><br/> The severity of effects caused by climate change will depend on the path of future human activities. More greenhouse gas emissions will lead to more climate extremes and widespread damaging effects across our planet. However, those future effects depend on the total amount of carbon dioxide we emit. So, if we can reduce emissions, we may avoid some of the worst effects.</div>
      
      <h2 style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '30px', color: 'white', marginLeft: '36px', marginTop: '50px'}}>WHAT ARE THE SOLUTIONS TO CLIMATE CHANGE?</h2>
      <div class="d-inline-flex p-2" style={{fontFamily: "'Alkatra', 'cursive'", fontSize: '20px', color: 'white', marginLeft: '30px', marginRight: "150px"}}>
        {'->'}Reduce Fossil Fuels <br></br>The burning of coal, oil, and natural gas in our buildings, industrial processes, and transportation is responsible for the vast majority of emissions that are warming the planet—more than 75 percent. In addition to altering the climate, dirty energy also comes with unacceptable ecological and human health impacts.

We must replace coal, oil, and gas with renewable and efficient energy sources. Thankfully, with each passing year, clean energy is making gains as technology improves and    
production costs go down. But in order to meet the goal of reducing global carbon emissions by at least 45 percent below 2010 levels before 2030—which scientists tell us we must     do   
if we’re to avoid the worst, deadliest impacts of climate change—we must act faster.Wind and solar continue to account for ever-larger shares of electricity generation. In 2021,  
wind and solar generated a record 10 percent of electricity worldwide. <br /><br />
      {'->'} Renewable Energy <br />Transitioning from fossil fuels to clean energy is the key to winning the fight against climate change. Here are the most common sources of renewable energy—and one source of decidedly nonrenewable energy that often gets included (falsely) in the list.<br /><br />
      {'->'} Solar energy <br /> Solar energy is produced when light from the sun is absorbed by photovoltaic cells and turned directly into electricity. The solar panels that you may have seen on rooftops or at ground level are made up of many of these cells working together. By 2030, at least one in seven U.S. homes is projected to have rooftop solar panels, which emit no greenhouse gases or other pollutants, and which generate electricity year-round (in hot or cold weather) so long as the sun is shining. Solar energy currently accounts for just under 3 percent of the electricity generated in the United States—enough to power 18 million homes—but is growing at a faster rate than any other source. By 2035, it could account for as much as 40 percent of electricity generation. From 2020 through 2026, solar will account for more than half of new electricity generation worldwide.<br /><br />
      {'->'} Wind energy <br /> Unlike solar panels, which convert the sun’s energy directly into electricity, wind turbines produce electricity more conventionally: wind turns the blades of a turbine, which spin a generator. Currently, wind accounts for just above 9 percent of U.S. electricity generation, but it, like solar, is growing fast as more states and utilities come to recognize its ability to produce 100 percent clean energy at a remarkably low cost. Unsurprisingly, states with plenty of wide-open space—including Kansas, Oklahoma, and Texas—have huge capacity when it comes to wind power, but many analysts believe that some of the greatest potential for wind energy exists just off our coasts. Offshore wind even tends to ramp up in the evenings when home electricity use jumps, and it can produce energy during the rainy and cloudy times when solar energy is less available. Smart planning and protective measures, meanwhile, can ensure we harness the massive promise of offshore wind while limiting or eliminating potential impacts on wildlife.<br /><br />
      {'->'}Biomass energy <br />With very few exceptions, generating electricity through the burning of organic material like wood (sourced largely from pine and hardwood forests in the United States), agricultural products, or animal waste—collectively referred to as biomass—does little to reduce carbon emissions, and in fact, does far more environmental harm than good. Unfortunately, despite numerous studies that have revealed the true toll of this form of bioenergy, some countries continue to buy the biomass industry’s false narrative and subsidize these projects. Attitudes are changing but, given the recent wood pellet boom, there is a lot more work to be done.
      </div>
      </div>
    </>
  )
}

export default Climate_change
