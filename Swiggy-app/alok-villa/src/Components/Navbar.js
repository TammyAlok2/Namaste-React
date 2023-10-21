import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <div className='nav-bar'>
        <nav>
            <div className='left-side'>
                <img src='https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4 ' alt
                ='hello'  height={100}/>
                
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
