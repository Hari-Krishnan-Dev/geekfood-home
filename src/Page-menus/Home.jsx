import React from 'react'
import { useEffect } from 'react';
import { SearchFood ,Feedback , GetInTouch ,   } from "../landing-page";

const Home = () => {
  useEffect(() => {
    // Change the color of the nav menu when the component is mounted
    const navLinks = document.querySelectorAll('.ln-home');
    console.log(navLinks);
    navLinks.forEach(link => {
      link.style.color = '#2563eb'; // Change this to your desired color
    });
    return ()=>{
      navLinks.forEach(link => {
        link.style.color = 'white'; 
      })
    }
  }, []);
  return (
    
    <div>
      <SearchFood/>
      <GetInTouch/>
      <Feedback/>
    </div>
  )
}

export default Home