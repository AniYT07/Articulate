import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import {motion} from 'framer-motion';
import { useAuth0 } from "@auth0/auth0-react";
import "./search.css"
var data = require("./data.json")


export default function Navbar() {
  const navigate = useNavigate();

    const Navstyle= {
        color: 'white',
        fontSize: '20px',
    }
    const Navstyle1= {
      fontFamily: "'Dancing Script', cursive",
      fontSize: '35px',
      color: 'pink',
  }
  
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  
  const [value, setValue] = useState('');
  const onChange = (event) =>{
    
    setValue(event.target.value);
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  }

  const changePage = (value) => {
    if(value === 'Population'){
      navigate('/population')
    }
    if(value === 'Climate Change'){
      navigate('/Climate_change')
    }
    if(value === 'Nuclear Terror'){
      navigate('/nuclear')
    }
    if(value === 'Genome Editing'){
      navigate('/genome_editing')
    }
    if(value === 'Education'){
      navigate('/education')
    }
    if(value === 'Cyber Threats'){
      navigate('/cyber_threats')
    }
  }

    return (
      <nav className="navbar navbar-expand-lg bg-black">
    <div className="container-fluid">
      <motion.div whileHover={{scale: 1.1}} transition={{duration: .7}}>
      <Link to='/' className="navbar-brand" style={Navstyle1}>Articulate</Link></motion.div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <motion.li whileHover={{scale: 1.2}} transition={{duration: .7}} className="nav-item">
        <Link to='/' className="navbar-brand" style={Navstyle}>Home</Link>
        </motion.li>
        <motion.li whileHover={{scale: 1.2}} transition={{duration: .7}} className="nav-item">
        <Link to='/about' className="navbar-brand" style={Navstyle}>About</Link>
        </motion.li>{isAuthenticated ? <motion.li whileHover={{scale: 1.2}} transition={{duration: .7}} className="nav-item"><Link to='/' className="navbar-brand" style={Navstyle} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log out</Link>
</motion.li>: <motion.li whileHover={{scale: 1.2}} transition={{duration: .7}} className="nav-item">
<Link to='/' className="navbar-brand" style={Navstyle} onClick={() => loginWithRedirect()}>Sign In</Link>
        </motion.li>}
        <li className="nav-item dropdown">
          <motion.div>
   <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize: '20px', color: 'white', padding: '0px'}}>
     Dropdown
   </button>
   <ul className="dropdown-menu " >
     <li><Link to="/discussions" className="dropdown-item" >Forums</Link></li>
     <li><Link to="/news"className="dropdown-item" >News</Link></li>
     <li><hr className="dropdown-divider"/></li>
     <li><Link to="/contactus" className="dropdown-item" >Contact Us</Link></li>
   </ul></motion.div>
 </li>
      </ul>{isAuthenticated &&
      <motion.div whileHover={{scale: 1.1}} transition={{duration: .7}}>
      <Link to='/' className="navbar-brand" style={Navstyle1}>{user.name}</Link></motion.div>}
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search the problem...." aria-label="Search" onChange={onChange} value={value}/>
        <button className="btn btn-outline-success bs-light" type="submit" style={{color: '#E3B1D8', borderColor: '#E3B1D8', }} onClick={changePage(value)}>Search</button>
      </form>
        </div>
        <div className="Dropdown">
          {data.filter(item=>{
            const searchTerm = value.toLowerCase();
            const fullName = item.first_name.toLowerCase();
            return searchTerm && fullName.startsWith(searchTerm) && fullName !== searchTerm;
          })
          .map((item)=> <div onClick={()=>onSearch(item.first_name)} className='dropdown-row' key={item.first_name}>{item.first_name}</div>)}
        </div>
        {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
        </div>
    </nav>
  )
}
