import React, { useState } from 'react'
import './header.css'

const Header = () => {

  const[toggle, setToggle] = useState(false)
  const[activeNav, setActiveNav] = useState('#home')

  const handleClick = () => {
    setToggle((prev) => !prev)
  }

  return (
    <header className='header'>
        <nav className="nav container">
            <a href='index.html' className='nav__logo'>ᔕᗩᛕᎥᑎ</a>


            <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className='nav__list grid'> 
                    <li className='nav__item'>
                        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}>
                            <i className='uil uil-estate nav__icon'></i> Home
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#about"  onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}>
                            <i className='uil uil-user nav__icon'></i> About
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#skills"  onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                            <i className='uil uil-file-alt nav__icon'></i> Skills
                        </a>
                    </li>
                    {/* <li className='nav__item'>
                        <a href="#services" className="nav__link">
                            <i className='uil uil-briefcase-alt nav__icon'></i> Services
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href="#portfolio" className="nav__link">
                            <i className='uil uil-scenery nav__icon'></i> Portfolio
                        </a>
                    </li> */}
                    <li className='nav__item'>
                        <a href="#contact"  onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                            <i className='uil uil-message nav__icon'></i> Contact
                        </a>
                    </li>
                </ul>

                <i className='uli uil-times nav__close' onClick={handleClick}></i>
            </div>

            <div className='nav__toggle'>
                <i className='uli uil-apps' onClick={handleClick}></i>
            </div>
        </nav>
    </header>
  )
}

export default Header