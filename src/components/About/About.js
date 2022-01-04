import React, { useEffect, useState } from 'react'
import  './about.css'
import boatImg from '../../images/meonboat_00000.png'
import blenderVideos from '../../videos/blender-videos_VP9.webm'
import tags from '../../images/tags_00000.png'
import { useNavigate } from 'react-router-dom'

function About(props) {
    const [pageLoad, setPageLoad] = useState(false)
    const navigate = useNavigate()

    const handleNavigate = (e) => {
        props.setPageLeave(true)
        setTimeout(() => {
            navigate(e.target.getAttribute('name'))
        }, 500);
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
                                I still love to create small clips using after effects or blender in my free time, whenever I do have free time that is.
                                I've found a new passion, software development! I recently finished the project I've been wanting to create, a creative social
                                media style portfolio website. The first time I touched code was when I wanted to create a portfolio website where my
                                artworks could live, and now it feels like I've come full circle. I have also now finished my software engineering bootcamp 
                                that was extremely rigorous, but even more rewarding. I feel like I have gained so much experience on all fronts, and I feel confident in my future as a developer.
                            </p>
                        </div>
                    </section>
                    <section className='about-3'>
                        <img className='tags' src={tags} alt=''/>
                        <div className='about-3-text'>
                            <h1>Where I want to be.</h1>
                            <p>
                                I want to continue learning in a junior role in a professional environment.
                                Over the next few months, I think I will try to dedicate a lot more time into refining my projects and learning more about the
                                fundamentals of computer science. I'm also really excited to try new technologies and I'm interested in the Web3 space and all
                                it has to offer. If you made it here, thanks for reading. I'll be updating this section as my career progress, so see you around :)
                            </p>
                        </div>
                    </section>
                    <section className='about-footer'>
                        <h1>Continue to...</h1>
                        <div className='back-next-btns'>
                            <p className='footer-home' name='/' onClick={handleNavigate}>Home</p>
                            <p className='footer-resume' name='/resume' onClick={handleNavigate}>Resume</p>
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
