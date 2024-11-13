import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import ProjectSlide from './ProjectSlide'
import Skills from './Skills'
import { IoLogoHtml5, IoLogoCss3, IoLogoPython, IoIosArrowDropdown } from 'react-icons/io'
import { SiExpress, SiMongodb, SiJquery, SiDjango, SiReact, SiTypescript } from 'react-icons/si'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import btc from '../../images/coinflip_img.png'
import createArt from '../../images/android-chrome-512x512-removebg-preview.png'
import madlibArt from '../../images/madlibs_00000.png'
import homepageArt from '../../images/goodmorning_00000.png'
import dbx from '../../images/dbx.png'

function Home(props) {
    const [arrowClick, setArrowClick] = useState(false)
    const [experienceOneOpen, setExperienceOneOpen] = useState(false)
    const [artClick, setArtClick] = useState(false)
    const navigate = useNavigate()
    const projectsRef = useRef()
    const skillsRef = useRef()
    const contactRef = useRef()

    const skills = [
        {img: 'HTML5', name: <IoLogoHtml5/>}, {img: 'CSS3', name: <IoLogoCss3/>}, {img: 'TypeScript', name: <SiTypescript/>}, 
        {img: 'jQuery', name: <SiJquery/>}, {img: 'React', name: <SiReact/>}, {img: 'Express', name: <SiExpress/>}, 
        {img: 'MongoDB', name: <SiMongodb/>}, {img: 'Python', name: <IoLogoPython/>}, {img: 'Django', name: <SiDjango/>}
    ]

    const handleArrowClick = () => {
        setArrowClick(!arrowClick)
    }

    const handleColorClick = (refVal) => {
        console.log(refVal)
        setTimeout(() => {
            setArrowClick(!arrowClick)
        }, 100);
        setTimeout(() => {
            arrowClick && refVal.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'nearest'
            })
        }, 500);
    }

    const handleDelayClick = (e) => {
        props.setPageLeave(true)
        setTimeout(() => {
            navigate(`/${e.target.name}`)
        }, 500)
    }

    const scrollToProjects = () => {
        projectsRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        })
    }

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const handleFormSubmit = (e) => {
        alert("I've received your message, thank you!")
    }

    const handleExperienceDropdown = () => {
        setExperienceOneOpen((prevVal) => !prevVal)
    }

    const handleArtClick = () => {
        setArtClick(true)    
        setTimeout(() => {
            setArtClick(false)
        }, 6000)
    }

    useEffect(() => {
        if (!props.contactHeader && !props.projectHeader) {
            window.scrollTo(0,0)
        }
        setTimeout(() => {
            props.setPageLeave(false)
            props.setProjectHeader(false)
            props.setContactHeader(false)
        }, 100);
    }, [])

    useEffect(() => {
        props.contactHeader && scrollToContact()
    }, [props.contactHeader])

    useEffect(() => {
        props.projectHeader && scrollToProjects()
    }, [props.projectHeader])

    const skillsJsx = skills.map((skill) => {
        return(
            <Skills img={skill.img} name={skill.name}/>
        )
    })

    const saveCursorPosition = function(x, y) {
        pos.x = (x / window.innerWidth).toFixed(2);
        pos.y = (y / window.innerHeight).toFixed(2);
        document.documentElement.style.setProperty('--x', pos.x);
        document.documentElement.style.setProperty('--y', pos.y);
    }
    
    const pos = { x : 0, y : 0 };
    document.addEventListener('mousemove', e => { saveCursorPosition(e.clientX, e.clientY); })
    
    return (
        <div className={`home-container ${props.pageLeave ? 'page-leave': ''}`}>
            <section className='home-1'>
                <div className='home-1-text'>
                    <h1>Hi, I'm Brian.</h1>
                    <p>I'm a Fullstack Developer with a love for all things creative and technical. Learn more about me and the work I do below.</p>
                    <div className={`button-arr ${'button-arr-click'}`}>
                        <AiOutlineArrowDown className={`icons ${arrowClick ? 'icon-click' : ''}`} onClick={handleArrowClick}/>
                        <AiOutlineArrowDown className={`icons-1 ${arrowClick ? 'icon-click-1' : ''}`} onClick={() => handleColorClick(projectsRef)}/>
                        <AiOutlineArrowDown className={`icons-2 ${arrowClick ? 'icon-click-2' : ''}`} onClick={() => handleColorClick(skillsRef)}/>
                        <AiOutlineArrowDown className={`icons-3 ${arrowClick ? 'icon-click-3' : ''}`} onClick={() => handleColorClick(contactRef)}/>
                        <Link className={`button-link ${arrowClick ? 'invisible' : ''}`} to='/about'>
                            <button name='about' className='real-button' onClick={handleDelayClick}>more about me</button>
                        </Link>
                    </div>
                </div>
                <div className={`home-1-art`}>
                    <div className={`head ${artClick ? 'head-art-click' : ''}`} onClick={handleArtClick}>
                        <div className={`hat-main ${artClick ? 'hat-art-click' : ''}`}>
                            <div className='hat-top'></div>
                            <div className='hat-bot'></div>
                        </div>
                        <div className={`eye1 ${artClick ? 'eye1-art-click' : ''}`}>
                            <div className={`pupil ${artClick ? 'pupil-art-click' : ''}`}></div>
                        </div>
                        <div className={`eye2 ${artClick ? 'eye2-art-click' : ''}`}>
                            <div className={`pupil ${artClick ? 'pupil-art-click' : ''}`}></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home-25' >
                <h1 className='home-25-title' >Experience</h1>
                <div className='experience-1'>
                    <div className='experience-1-header'>
                        <div className='experience-1-chip-header-container'>
                            <div className='dbx-container'>
                                <img className='dbx' src={dbx} alt='f'/>
                                <h2>Dropbox</h2>
                            </div>
                            <h4 className='chip'>April'22 - November'24</h4>
                        </div>
                        <IoIosArrowDropdown onClick={handleExperienceDropdown} className='experience-dropdown-icon'/> 
                    </div>
                    <div className={`experience-1-dropdown ${experienceOneOpen ? 'experience-dropdown-open' : ''}`}>
                        <p><strong>• Lead engineering efforts</strong> in improving desktop app usability and address customer concerns surrounding the Selective Sync desktop app feature. Managed complete process of collaborating w/ design, code implementation, metrics, and feature rollout. Reduced customer experience tickets related to Selective Sync by 60% over the span of 2 months.
                        <br /><br /><strong>• Lead engineering efforts</strong> for a revamp to the Desktop App’s Tray design which aimed at improving engagement and retention of users on the Desktop App. Handled code implementation, metrics, and rollout. Redesign focused on the increased exposure of the sharing and search features, both of which saw increase of activity by 141% and 41% respectively.
                        <br /><br /><strong>• Conducted a variety of experiments</strong> on multiple Dropbox products including Backup, FSS, and Sync. Took ownership of complete process of feature gating, implementation, logging, monitoring metrics, A/B testing, rollout, and GA of feature.
                        <br /><br /><strong>• Launched a brand new onboarding experience</strong> for the Desktop App, migrating from legacy ‘local views’ framework to the Electron framework on a new typescript based architecture.
                        <br /><br /><strong>• Worked on 3 different engineering teams</strong>, having a DRI role in the following projects:
                        <br /><strong>• Backup Product (6 months):</strong> Web and Desktop Code, Front End Backup Product Related Features (DRI for Computer Backup Rename Feature & External Drive Backup Rename Feature)
                        <br /><strong>• Desktop Discovery (1 year):</strong> Web and Desktop Code, Full Stack Desktop Onboarding Product Related Features (DRI for  Top of Funnel Web to Desktop Conversion Experiment, Co-DRI for Video Onboarding Experiment)
                        <br /><strong>• Desktop Foundation (6 months):</strong> Desktop Code, Full Stack Desktop Foundation Product Related Features (DRI for Selective Sync Education Experiment, Tray 2024 Redesign, & Sync Errors 2024 Redesign)
                        </p>
                    </div>
                </div>
                <div className='experience-2'>
                    <div className='experience-2-header'>
                        <div className='experience-2-chip-header-container'>
                            <div className='loading-container'>
                                <div className='loading-skeleton'></div>
                                <h2>...Pending</h2>
                            </div>
                            <h4 className='chip'>Current - ∞</h4>
                        </div>
                        <IoIosArrowDropdown className='experience-dropdown-icon-disabled'/> 
                    </div>
                </div>
            </section>
            <section className='home-2' >
                <h1 className='home-2-title' >Projects</h1>
                <ProjectSlide projectsRef={projectsRef} pageLeave={props.pageLeave} setPageLeave={props.setPageLeave} link='create' index={'0'} img={createArt} title='Create' desc='Social Media Website'/>
                <ProjectSlide pageLeave={props.pageLeave} setPageLeave={props.setPageLeave} link='what-if' index={'1'} img={btc} title='What If?' desc='Cryptocurrency Calculator'/>
                <ProjectSlide pageLeave={props.pageLeave} setPageLeave={props.setPageLeave} link='home-page' index={'2'} img={homepageArt} title='Home.' desc='Browser Homepage'/>
                <ProjectSlide pageLeave={props.pageLeave} setPageLeave={props.setPageLeave} link='mad-libs' index={'3'} img={madlibArt} title='Madlibs!' desc='Random Word Game'/>
            </section>
            <section className='home-3' ref={skillsRef}>
                <h1 className='home-3-title'>Skills</h1>
                <div className='skills-container'>
                    {skillsJsx}
                </div>
            </section>
            <section className='home-4' ref={contactRef}>
                <h1>Get in touch</h1>
                <form className='input-form' action="https://formsubmit.co/brian99na@gmail.com" method='POST' onSubmit={handleFormSubmit}>
                    <div className='input-divs'>
                        <p>Subject</p>
                        <input placeholder='Subject'></input>
                    </div>
                    <div className='input-divs'>
                        <p>Email *</p>
                        <input type="email" name="email" placeholder='Your Email' required></input>
                    </div>
                    <div className='input-divs message'>
                        <p>Message *</p>
                        <textarea name='message' placeholder='Your Message' required></textarea>
                    </div>
                    <input type='hidden' name='_captcha' value='false'/>
                    <input type="hidden" name="_next" value="https://brian99na.github.io/portfolio/"></input>
                    <button type='submit'>Send</button>
                </form>
                <div className='desk-icons'>
                    <a href='https://www.github.com/brian99na' target='_blank'rel='noreferrer' ><AiFillGithub className='icons'/></a>
                    <a href='https://www.linkedin.com/in/bna1' target='_blank'rel='noreferrer'><AiFillLinkedin className='icons'/></a>
                </div>
            </section>
        </div>
    )
}

export default Home
