import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './home.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import ProjectSlide from './ProjectSlide'
import Skills from './Skills'
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoPython } from 'react-icons/io'
import { SiExpress, SiMongodb, SiJquery, SiDjango, SiReact } from 'react-icons/si'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import btc from '../../images/coinflip_img.png'
import createArt from '../../images/android-chrome-512x512-removebg-preview.png'
import madlibArt from '../../images/madlibs_00000.png'
import homepageArt from '../../images/goodmorning_00000.png'

function Home(props) {
    const [arrowClick, setArrowClick] = useState(false)
    const navigate = useNavigate()

    const projectsRef = useRef()
    const skillsRef = useRef()
    const contactRef = useRef()

    const skills = [
        {img: 'HTML5', name: <IoLogoHtml5/>}, {img: 'CSS3', name: <IoLogoCss3/>}, {img: 'JavaScript', name: <IoLogoJavascript/>}, 
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

    return (
        <div className={`home-container ${props.pageLeave ? 'page-leave': ''}`}>
            <section className='home-1'>
                <div className='home-1-text'>
                    <h1>Hi, I'm Brian.</h1>
                    <p>I'm a Fullstack Web Developer with a love for all things creative and technical. Check out some of my work below.</p>
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
                <div className={`home-1-art ${arrowClick ? 'art-click' : ''}`}>

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
                <form className='input-form'>
                    <div className='input-divs'>
                        <p>Name *</p>
                        <input placeholder='Your Name'></input>
                    </div>
                    <div className='input-divs'>
                        <p>Email *</p>
                        <input placeholder='Your Email'></input>
                    </div>
                    <div className='input-divs message'>
                        <p>Message *</p>
                        <textarea placeholder='Your Message'></textarea>
                    </div>
                    <button>Send</button>
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
