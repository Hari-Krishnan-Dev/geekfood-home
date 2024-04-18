import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div className='Nav-ctn'>
        <div className='nav-bar'> 
        <div className='nav-logo'>
                        <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
                        <span>GeeksFoods</span>

        </div>
                        <div className='main-items'>
                            <Link className='link ln-home' to="/"><span>Home</span></Link>
                            <Link className='link ln-quote' to="/quote"><span>Quote</span></Link>
                            <Link className='link ln-res' to="/restaurants"><span>Restaurant</span></Link>
                            <Link className='link ln-foods' to="/foods"><span>Foods</span></Link>
                            <Link className='link ln-contact' to="/contact"><span>Contact</span></Link>
                        </div>
                        <div className='nav-btn'>
                            <button>Get Started</button>
                        </div>
        </div>
    </div>
  )
}

export default Nav