import React from 'react'
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        // Change the color of the nav menu when the component is mounted
        const navLinks = document.querySelectorAll('.ln-contact');
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
    <div>Contact</div>
  )
}

export default Contact