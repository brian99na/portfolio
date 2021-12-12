import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'

function Header(props) {
    const [navReveal, setNavReveal] = useState(false)
    const [projectDropDown, setProjectDropDown] = useState(false)

    const handleClick = () => {
        setNavReveal(!navReveal)
    }

    const dropDownClick = () => {
        setProjectDropDown(!projectDropDown)
    }

    const handleLinkClick = () => {
        setNavReveal(!navReveal)
        props.setPageLeave(true)
        setTimeout(() => {props.setPageLeave(false)}, 600)
    }

    const handleContactClick = () => {
        setNavReveal(!navReveal)
        props.setPageLeave(true)
        props.setContactHeader(!props.contactHeader)
        setTimeout(() => {props.setPageLeave(false)}, 600)
    }

    const handleProjectsClick = () => {
        setNavReveal(!navReveal)
        props.setProjectHeader(!props.projectHeader)
        props.setPageLeave(true)
        setTimeout(() => {
            props.setPageLeave(false)
            setProjectDropDown(!projectDropDown)
        }, 600)        
    }

    const navLinkClass = `nav-links ${navReveal ? 'itemVisible' : ''}`

    return (
        <nav className={`nav-container `}>
            <div className={navReveal ? 'overlay' : ''}></div>
            <section className={`nav-burger-container ${props.pageLeave ? 'page-leave' : ''}`} onClick={handleClick}>
                <div className={`burger1 ${navReveal ? 'burgerAnimation1' : ''}`}></div>
                <div className={`burger2 ${navReveal ? 'burgerAnimation' : ''}`}></div>
                <div className={`burger3 ${navReveal ? 'burgerAnimation3' : ''}`}></div>
            </section>
            <section className={`nav-link-container ${navReveal ? 'navVisible' : ''}`}>
                <div className='projects-container'>
                    <MdKeyboardArrowDown className={`projects-drop-arrow ${navReveal ? 'drop-active' : ''}`} onClick={dropDownClick}/>
                    <Link to='/' onClick={handleProjectsClick} className={navLinkClass}>
                        <h1>Projects</h1>
                    </Link>
                </div>
                <div className={`projects-sub-div ${projectDropDown ? 'projects-div-visible' : ''}`}>
                    <Link to='/projects/what-if' onClick={handleProjectsClick} className={navLinkClass}>
                        <h1>What If?</h1>
                    </Link>
                    <Link to='/projects/home-page' onClick={handleProjectsClick} className={navLinkClass}>
                        <h1>Home.</h1>
                    </Link>
                    <Link to='/projects/mad-libs' onClick={handleProjectsClick} className={navLinkClass}>
                        <h1>Madlibs!</h1>
                    </Link>
                </div>
                <Link to='/about' onClick={handleLinkClick} className={navLinkClass}>
                    <h1>About Me</h1>
                </Link>
                <Link to='/resume' onClick={handleLinkClick} className={navLinkClass}>
                    <h1>Resume</h1>
                </Link>
                <Link to='/' onClick={handleContactClick} className={navLinkClass}>
                    <h1>Contact Me</h1>
                </Link>
                <div className={`icon-container ${navReveal ? 'itemVisible' : ''}`}>
                    <a onClick={handleLinkClick} href='https://www.github.com/brian99na' target='_blank'rel='noreferrer' ><AiFillGithub className='icons'/></a>
                    <a onClick={handleLinkClick} href='https://www.linkedin.com/in/bna1' target='_blank'rel='noreferrer'><AiFillLinkedin className='icons'/></a>
                </div>
            </section>
        </nav>
    )
}

export default Header
