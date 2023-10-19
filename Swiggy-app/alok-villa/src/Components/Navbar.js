import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='nav-bar'>
        <nav>
            <div className='left-side'>
                <img src='food-villa.jpg ' alt
                ='hello' />
                
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
