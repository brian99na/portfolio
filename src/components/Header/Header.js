import React, { useState } from 'react'
import { Link, useNavigate, useLocation} from 'react-router-dom'
import './header.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import homeIcon from '../../images/bn.svg'

function Header(props) {
    const [navReveal, setNavReveal] = useState(false)
    const [projectDropDown, setProjectDropDown] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        setNavReveal(!navReveal)
    }

    const dropDownClick = () => {
        setProjectDropDown(!projectDropDown)
    }

    const handleHomeClick = (e) => {
        props.setPageLeave(true)
        setProjectDropDown(false)
        setTimeout(() => {
            if (location.pathname === '/') {
                props.setPageLeave(false)
            }
            navigate('/')
            window.scrollTo(0, 0)
        }, 500)
    }

    const handleLinkClick = () => {
        setNavReveal(!navReveal)
        props.setPageLeave(true)
        setProjectDropDown(false)
        setTimeout(() => {
            props.setPageLeave(false)
            setProjectDropDown(false)
        }, 600)
    }

    const handleContactClick = () => {
        props.setPageLeave(true)
        setProjectDropDown(false)
        setTimeout(() => {
            setNavReveal(!navReveal)
            props.setContactHeader(!props.contactHeader)
            setProjectDropDown(false)
            props.setPageLeave(false)
        }, 300)
    }

    const handleProjectsClick = () => {
        props.setPageLeave(true)
        setProjectDropDown(false)
        setTimeout(() => {
            setNavReveal(!navReveal)
            props.setProjectHeader(!props.projectHeader)
            setProjectDropDown(false)
            props.setPageLeave(false)
        }, 300)        
    }

    const handlePLinkClick = () => {
        props.setPageLeave(true)
        setProjectDropDown(false)
        setTimeout(() => {
            setNavReveal(!navReveal)
            props.setPageLeave(false)
            setProjectDropDown(false)
        }, 300)        
    }

    const handleDeskLinkClick = (e) => {
        console.log(e)
        props.setPageLeave(true)
        setProjectDropDown(false)
        setTimeout(() => {
            setNavReveal(false)
            navigate(e.target.getAttribute('name'))
            setTimeout(() => {
                props.setPageLeave(false)
            }, 300);
        }, 500);
    }

    const navLinkClass = `nav-links ${navReveal ? 'itemVisible' : ''}`
    const navLinkClassAbout = `nav-links nav-about ${navReveal ? 'itemVisible' : ''}`
    const navLinkClassResume = `nav-links nav-resume ${navReveal ? 'itemVisible' : ''}`


    return (
        <nav className='nav-container'>
            <section className='home-icon'>
                <img src={homeIcon} alt='navHome' name='/' onClick={handleHomeClick}/>
            </section>
            <section className={`nav-burger-container ${props.pageLeave ? 'page-leave' : ''}`} onClick={handleClick}>
                <div className={`burger1 ${navReveal ? 'burgerAnimation1' : ''}`}></div>
                <div className={`burger2 ${navReveal ? 'burgerAnimation' : ''}`}></div>
                <div className={`burger3 ${navReveal ? 'burgerAnimation3' : ''}`}></div>
            </section>
            <section className={`nav-link-container ${navReveal ? 'navVisible' : ''}`}>
                <div className='projects-container'>
                    <MdKeyboardArrowDown className={`projects-drop-arrow ${navReveal ? 'drop-active' : ''}`} onClick={dropDownClick}/>
                    <Link to='/' onClick={handleProjectsClick} className={navLinkClass}>
                        <h1 className='projects-title'>Projects</h1>
                    </Link>
                    <div className={`projects-sub-div-desktop ${projectDropDown ? 'projects-desk-visible' : ''}`}>
                        <div className={navLinkClass}>
                            <h1 name='/projects/create' onClick={handleDeskLinkClick} >Create</h1>
                        </div>
                        <div className={navLinkClass}>
                            <h1 name='/projects/what-if' onClick={handleDeskLinkClick} >What If?</h1>
                        </div>
                        <div className={navLinkClass}>
                            <h1 name='/projects/home-page' onClick={handleDeskLinkClick} >Home.</h1>
                        </div>
                        <div className={navLinkClass}>
                            <h1 name='/projects/mad-libs' onClick={handleDeskLinkClick} >Madlibs!</h1>
                        </div>
                    </div>
                </div>
                <div className={`projects-sub-div ${projectDropDown ? 'projects-div-visible' : ''}`}>
                    <Link to='/projects/create' onClick={handlePLinkClick} className={navLinkClass}>
                        <h1>Create</h1>
                    </Link>
                    <Link to='/projects/what-if' onClick={handlePLinkClick} className={navLinkClass}>
                        <h1>What If?</h1>
                    </Link>
                    <Link to='/projects/home-page' onClick={handlePLinkClick} className={navLinkClass}>
                        <h1>Home.</h1>
                    </Link>
                    <Link to='/projects/mad-libs' onClick={handlePLinkClick} className={navLinkClass}>
                        <h1>Madlibs!</h1>
                    </Link>
                </div>
                <Link to='/about' onClick={handleLinkClick} className={navLinkClassAbout}>
                    <h1>About Me</h1>
                </Link>
                <Link to='/resume' onClick={handleLinkClick} className={navLinkClassResume}>
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
