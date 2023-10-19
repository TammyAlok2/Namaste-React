import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className='nav-bar'>
        <nav>
            <div className='left-side'>
                
                <img src='https://foodvilla.no/src/img/logo.png ' alt
                ='hello' height={100} />
                
                </div>

<div className='right-side'> 
            <ul>
                <li><a href='home'>Home</a></li>
                <li><a href='about'>About</a></li>
                <li><a href='Cart'>Cart</a></li>
                <li><a href='know'>Know</a></li>
            </ul>
            </div>
            

        </nav>

             </div>
    </div>
  )
}

export default Navbar
