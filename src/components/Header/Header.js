import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


function Header(props) {
    const [navReveal, setNavReveal] = useState(false)

    const handleClick = () => {
        setNavReveal(!navReveal)
    }

    const handleLinkClick = () => {
        setNavReveal(!navReveal)
        props.setPageLeave(true)
        setTimeout(() => {props.setPageLeave(false)}, 600)
    }

    useEffect(() => {
        
    }, [])

    return (
        <nav className={`nav-container `}>
            <section className={`nav-burger-container ${props.pageLeave ? 'page-leave' : ''}`} onClick={handleClick}>
                <div className={`burger1 ${navReveal ? 'burgerAnimation1' : ''}`}></div>
                <div className={`burger2 ${navReveal ? 'burgerAnimation' : ''}`}></div>
                <div className={`burger3 ${navReveal ? 'burgerAnimation3' : ''}`}></div>
            </section>
            <section className={`nav-link-container ${navReveal ? 'navVisible' : ''}`}>
                <Link to='/' onClick={handleLinkClick} className={`nav-links ${navReveal ? 'navLinkVisible' : ''}`}>
                    <h1>Projects</h1>
                </Link>
                <Link to='/about-me' onClick={handleLinkClick} className={`nav-links ${navReveal ? 'navLinkVisible' : ''}`}>
                    <h1>About Me</h1>
                </Link>
                <Link to='/resume' onClick={handleLinkClick} className={`nav-links ${navReveal ? 'navLinkVisible' : ''}`}>
                    <h1>Resume</h1>
                </Link>
                <Link to='/contact-me' onClick={handleLinkClick} className={`nav-links ${navReveal ? 'navLinkVisible' : ''}`}>
                    <h1>Contact Me</h1>
                </Link>
                <div className={`icon-container ${navReveal ? 'iconContainerVisible' : ''}`}>
                    <a onClick={handleLinkClick} href='https://www.github.com/brian99na' target='_blank'rel='noreferrer' ><AiFillGithub className='icons'/></a>
                    <a onClick={handleLinkClick} href='https://www.linkedin.com/in/bna1' target='_blank'rel='noreferrer'><AiFillLinkedin className='icons'/></a>
                </div>
            </section>
        </nav>
    )
}

export default Header
