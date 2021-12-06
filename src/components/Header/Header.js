import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav className='nav-container'>
            <Link to='/about-me'>
                <h1>About Me</h1>
            </Link>
            <Link to='/resume'>
                <h1>Resume</h1>
            </Link>
            <Link to='/contact-me'>
                <h1>Contact Me</h1>
            </Link>
        </nav>
    )
}

export default Header
