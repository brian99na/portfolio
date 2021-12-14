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
                    <p>
                        My background is in all things media. I was primarily a video editor with 
                        skills in 2D motion graphics, but I also spent a lot of time creating
                        short films in college with classmates and was a videographer/editor 
                        for a student run production team. My path really diverged when the pandemic happened.
                    </p>
                    <div className='about-1-art'>

                    </div>
                </section>
                <section className='about-2'>
                    <p>
                        I experimented a lot during the pandemic by learning and building upon a lot of skills so that I could have options for my career.
                        I learned how to use Blender, Illustrator, and eventually when I wanted to put together a portfolio, HTML, CSS, and JavaScript. By the end of 
                        summer 2021, I weighed my options and decided to set myself up for the future by choosing programming/web development. 
                    </p>
                </section>
                <section className='about-3'>
                    <p>
                        I enrolled in a Software Engineering Bootcamp as a way to prove to myself that I could make it in this field. This program was Monday through
                        Friday from 9AM to 5PM for 13 weeks. I took it as a way to simulate a working environment and, although very rigorous, was extremely rewarding. I was able to
                        express my creativity with past skills and my intuition with code through solo and group based projects that were not cookie-cutter like I thought it would be.
                        Thinking of projects that I wanted to create and actually bring them into existence was an awesome feeling that I had known for so long when doing motion graphics or
                        video production.
                    </p>
                </section>
                <section className='about-4'>
                    <p>
                        I'm really excited for the future. I keep thinking about what my next project will be and what new things I need to learn for it. As of now, I want to learn
                        Solidity and get into the whole Web3 and smart contract space. I am also looking for my first junior position and there I can grow even more in a professional environment.
                        If you made it here, thanks a lot for reading. I'll be updating this section of my portfolio as I progress as a developer. See you around!
                    </p>
                </section>
            </div>
        </div>
    )
}

export default About
