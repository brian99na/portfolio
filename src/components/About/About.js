import React, { useEffect, useState } from 'react'
import  './about.css'

function About(props) {
    const [pageLoad, setPageLoad] = useState(false)

    const handleDelayClick = (e) => {
        props.setPageLeave(true)
        setTimeout(() => {
            window.location.href = e.target.name
        }, 1000)
    }

    useEffect(() => {
        setPageLoad(false)
        window.scrollTo(0,0)
        props.setPageLeave(false)
        setTimeout(() => {
            setPageLoad(true)
        }, 1500);
    }, [])

    return (
        <div className={`about-container ${props.pageLeave ? 'page-leave' : ''}`}>
            <div className={`about-home-text ${pageLoad ? 'text-leave' : ''}`}>
                <h1>A little bit about me.</h1>
            </div>
            <div className={`about-main ${pageLoad ? 'main-load' : ''}`}>
                <section className='about-1'>
                    <h1>Hello</h1>
                </section>
            </div>
        </div>
    )
}

export default About
