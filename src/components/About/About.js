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
                        skills in 2D motion graphics. I also spent a lot of time creating
                        short films in college with classmates and was a videographer/editor 
                        for a student run production team. My path really diverged when the pandemic happened.
                    </p>
                    <div className='about-1-art'>

                    </div>
                </section>
                <section className='about-2'>
                    <p>
                        I experimented during the pandemic by learning and building upon different skills.
                        I learned Blender, Illustrator, and when I wanted to put together a portfolio, HTML, CSS, and JavaScript. 
                        By the end of summer 2021, I weighed my options and decided to set myself up for the future by choosing programming/web development. 
                    </p>
                </section>
                <section className='about-3'>
                    <p>
                        I enrolled in a Software Engineering Bootcamp as a way to prove to myself that I could make it in this field. 
                        I took it as a way to simulate a working environment and, although very rigorous, was extremely rewarding. 
                        I was able to express both creativity and intuition when coding which I think is the best of both worlds.
                    </p>
                </section>
                <section className='about-4'>
                    <p>
                        I'm really excited for the future. I know that as I progress into this career, I'll be learning more and more.
                        As of now, I'd really love to learn Solidity and get into the whole Web3 and smart contract space. 
                        I am also looking for my first junior position to grow in a professional environment.
                        If you made it here, thanks a lot for reading. I'll be updating this section of my portfolio as I progress as a developer. See you around!
                    </p>
                </section>
            </div>
        </div>
    )
}

export default About
