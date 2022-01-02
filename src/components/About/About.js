import React, { useEffect, useState } from 'react'
import  './about.css'
import boatImg from '../../images/meonboat_00000.png'
import blenderVideos from '../../videos/blender-videos_VP9.webm'
import tags from '../../images/tags_00000.png'

function About(props) {
    const [pageLoad, setPageLoad] = useState(false)

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
                <section className='about'>
                    <section className='about-1'>
                        <a href='https://www.behance.net/gallery/97734193/UCI-Rowing' target='_blank' rel='noreferrer'>
                            <img src={boatImg} alt='boat-img' className='boat-img'/>
                        </a>
                        <div className='about-1-text'>
                            <h1>My background.</h1>
                            <p>
                                I've spent the past couple of years in all areas of media creation.
                                From social media videos, short films, and 2D/3D motion graphics, I've built
                                up skills in crafting creative visuals that are engaging and appealing.
                                Through this, I've gained valuable experience with working in collaborative settings
                                such as film sets and media organizations at my university.
                            </p>
                        </div>
                    </section>
                    <section className='about-2'>
                        <video playsInline autostart autoPlay loop controls={false} src={blenderVideos} className='blender-video' type="video/webm" muted playsInline/>
                        <div className='about-2-text'>
                            <h1>Where I'm at now.</h1>
                            <p>
                                I decided to take on web development when I built a creative portfolio last year.
                                I found that it gave me a lot of creative freedom in envisioning a website and bringing it to life it.
                                I have now finished a software engineering bootcamp that was both extremely rigorous, but even more rewarding.
                                I have a lot of skills in web development and backend technologies. I feel confident in my future.
                            </p>
                        </div>
                    </section>
                    <section className='about-3'>
                        <img className='tags' src={tags} alt=''/>
                        <div className='about-3-text'>
                            <h1>Where I want to be.</h1>
                            <p>
                                I want to continue learning in a junior role in a professional environment.
                                I'm also really excited about the Web3 space and want to learn Solidity.
                                If you made it here, thanks for reading. I'll be updating this section as my career progress, so see you around!
                            </p>
                        </div>
                    </section>
                </section>
                <section className=''>
                    
                </section>
            </div>
        </div>
    )
}

export default About
