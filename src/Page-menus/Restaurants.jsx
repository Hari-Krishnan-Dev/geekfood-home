import React from 'react'
import { useEffect } from "react";
const Restaurants = () => {
    useEffect(() => {
        // Change the color of the nav menu when the component is mounted
        const navLinks = document.querySelectorAll('.ln-res');
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
    <div>Restaurants</div>
  )
}

export default Restaurants