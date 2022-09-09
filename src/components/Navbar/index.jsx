import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { GrGithub, GrLinkedinOption } from "react-icons/gr";
import './style.css'



function Navbar() {

  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false)
    }
  }

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <Container >
        <nav className='navbar_nav'>
          <ul className='nav_ul'>
            <a id="home" className='logo' href='/'>Studio Ghibli</a>
            <ul className='nav_icons'>
              <a className='nav_icons_a' href='https://github.com/kari-osk'><GrGithub /></a>
              <a href='https://linkedin.com/in/karinaosuka'><GrLinkedinOption /></a>
            </ul>
          </ul>
        </nav>
      </Container>
    </div>
  )
}

export default Navbar
