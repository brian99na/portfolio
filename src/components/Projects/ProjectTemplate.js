import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import './projects.css'

function ProjectTemplate(props) {
    const [currentPath, setCurrentPath] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const footerLinks = [
        {name: 'Create', pathname: 'create'},
        {name: 'What If?', pathname: 'what-if'},
        {name: 'Home.', pathname: 'home-page'},
        {name: 'Madlibs!', pathname: 'mad-libs'}
    ]

    const handleSiteClick = (e) => {
        props.setPageLeave(true)
        setTimeout(() => {
            window.location.href = e.target.getAttribute('name')
        }, 300);
    }

    const handleDelayClick = (e, path) => {
        props.setPageLeave(true)
        setTimeout(() => {
            navigate(`/projects/${path}`)
        }, 500)
        setTimeout(() => {
            props.setPageLeave(false)
            window.scrollTo(0,0)
        }, 1000);
    }

    useEffect(() => {
        setCurrentPath(location.pathname)
        setTimeout(() => {
            props.setPageLeave(false)
            window.scrollTo(0,0)
        }, 600)
    }, [])

    const linksJsx = footerLinks.filter((links) => {
        return(
            currentPath !== `/projects/${links.pathname}`
        )
    }).map((link, index) => {
        return(
            <div className='link-tag' onClick={(e) => handleDelayClick(e, link.pathname)}>
                <h1 className={`link-name-${index} link-${props.index}`}>{link.name}</h1>
            </div>
        )
    })

    console.log(props.index)

    return (
        <div className={`project-container ${props.pageLeave ? 'page-leave' : ''}`}>
            <section className={`section-1 ${props.color}`}>
                <div className='section-1-text'>
                    <h1>{props.title1}</h1>
                    <p>{props.title2}</p>
                    <p>{props.title3}</p>
                    <div className='desk-button-div'>
                        <button name={props.link1} onClick={handleSiteClick}>Live Site</button>
                        <button name={props.link2} onClick={handleSiteClick}>Github Repo</button>
                    </div>
                </div>
                <div className='btc-anim-container'>
                    <img className='btc-anim' src={props.art} alt='art'/>
                </div>
                <div className='button-div'>
                        <button name={props.link1} onClick={handleSiteClick}>Live Site</button>
                        <button name={props.link2} onClick={handleSiteClick}>Github Repo</button>
                </div>
            </section>
            <section className='section-2'>
                <div className='section-2-inner'>
                    <div className='section-2-text'>
                        <h1>{props.secTitle1}</h1>
                        <p>{props.secPara}</p>
                    </div>
                    <div className={`shape-1 ${props.color}`}></div>
                    <div className={`shape-2 ${props.color}`}></div>
                    <div className={`shape-3 ${props.color}`}></div>
                </div>
            </section>
            <section className='section-3'>
                <div className='section-3-inner'>
                    <div className='section-3-text-1'>
                        <img src={props.thirdImage1} alt=''/>
                        <h1>{props.thirdTitle1}</h1>
                        <p>{props.thirdPara1}</p>
                    </div>
                    <div className='section-3-text-2'>
                        <img src={props.thirdImage2} alt=''/>
                        <h1>{props.thirdTitle2}</h1>
                        <p>{props.thirdPara2}</p>
                    </div>
                </div>
            </section>
            <section className='section-4'>
                <div className='col-1'>
                    <div className='position'>
                        <h3>POSITION</h3>
                        <p>{props.position}</p>
                    </div>
                    <div className='year'>
                        <h3>YEAR</h3>
                        <p>{props.year}</p>
                    </div>
                </div>
                <div className='col-2'>
                    <div className='work'>
                        <h3>Category</h3>
                        <p>{props.category}</p>
                    </div>
                </div>
            </section>
            <section className='section-5'>
                <h1 className='section-5-title'>More projects here</h1>
                <div className='links-upper'>
                    {linksJsx}
                </div>
            </section>
        </div>
    )
}

export default ProjectTemplate
