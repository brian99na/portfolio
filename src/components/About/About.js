import React, { useEffect, useState } from 'react'
import  './about.css'
import blenderVideos from '../../videos/blender-videos_VP9.webm'
import tags from '../../images/tags_00000.png'
import dbx from '../../images/dbx.png'

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
                        <div className='about-1-container'>
                            <video playsInline autostart autoPlay loop controls={false} src={blenderVideos} className='blender-video' type="video/webm" muted/>
                            <div className='about-1-text'>
                                <h1>My background.</h1>
                                <p>
                                    I've spent the majority of my college career within all areas of media creation.
                                    From social media videos, short films, and 2D/3D motion graphics, I've built
                                    up skills in crafting creative visuals that are engaging and appealing.
                                    Through this, I've gained valuable experience with working in collaborative settings
                                    such as film sets and media organizations at my university. This has helped me tremendously
                                    in all areas of software development. Whether it be maintaining an eye for detail or collaborating with
                                    cross functional partners, my experience and skills have translated well into the world of software engineering.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='about-2'>
                        <div className='about-2-container'>
                            <div className='logo-img-container'>
                                <img className='dbx' src={dbx} alt='f'/>
                            </div>
                            <div className='about-2-text'>
                                <h1>Where I'm currently at</h1>
                                <p>
                                    I've been working as a software engineer for the past two and a half years under the company Dropbox. Here I've learned
                                    everything there is to know about being an engineer which includes so much more than just coding. My journey with Dropbox has ended as of November 2024,
                                    but the road to get here included 4 different teams, 3 projects lead, a brand new onboarding experience launched, and so much more that I can be proud of.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='about-3'>
                        <div className='about-3-container'>
                            <div className='logo-img-container'>
                                <img className='tags' src={tags} alt=''/>
                            </div>
                            <div className='about-3-text'>
                                <h1>Where I want to be.</h1>
                                <p>
                                    I want to continue learning in a role that will further challenge and develop my skills as an engineer. My goals are to take on impactful projects
                                    and have a larger role in the company that I join. Through this, I will be able to elevate both myself and the people around me, something that I find valuable
                                    when working within a team. I know that my future team and company will be something that I'm passionate about, so if you're reading this, know that I am truly committed to the product that I'll be working on. 
                                    That's it for now, I'll be looking for any new opportunities that arise, feel free to reach out! 
                                </p>
                            </div>
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
