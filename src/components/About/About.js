import React, { useEffect, useState } from 'react'
import  './about.css'
import boatImg from '../../images/meonboat_00000.png'
import blenderVideos from '../../videos/blender-videos_VP9.webm'

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
                    <a href='https://www.behance.net/gallery/97734193/UCI-Rowing' target='_blank' rel='noreferrer'>
                        <img src={boatImg} alt='boat-img' className='boat-img'/>
                    </a>
                    <p>
                        I've spent the past couple of years in all areas of media creation.
                        From social media videos, short films, and 2D/3D motion graphics, I've built
                        up skills in crafting creative visuals that are engaging and appealing.
                        With this, I've gained valuable experience with working in collaborative settings
                        on film sets and media organizations at my university.
                    </p>
                    <video autostart autoPlay loop controls={false} src={blenderVideos} className='blender-video' type="video/webm" muted playsInline/>
                    <p>
                        I decided to take on web development when I built a creative portfolio last year.
                        I found that it gave me a lot of creative freedom in envisioning a website and bringing it to life it.
                        I'm now finishing up a software engineering bootcamp and, although very rigorous, it was also extremely rewarding.
                    </p>
                    <p>
                        As for the future, I want to continue learning with a junior role in a more professional environment.
                        I'm also really excited about the Web3 space and want to learn more about smart contracts and Solidity.
                        If you made it here, thanks for reading. I'll be updating this section as my career progress, so see you around!
                    </p>
                    <div className='about-1-art'>

                    </div>
                </section>
                <section className='about-2'>
                    
                </section>
            </div>
        </div>
    )
}

export default About
