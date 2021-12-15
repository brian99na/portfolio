import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import './projects.css'

function ProjectTemplate(props) {
    const [currentPath, setCurrentPath] = useState('')
    const location = useLocation()

    const footerLinks = [
        {name: 'What If?', pathname: 'what-if'},
        {name: 'Home.', pathname: 'home-page'},
        {name: 'Madlibs!', pathname: 'mad-libs'}
    ]


    const handleDelayClick = (e) => {
        props.setPageLeave(true)
        setTimeout(() => {
            window.location.href = e.target.name
        }, 1000)
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
    }).map((link) => {
        return(
            <Link className='link-tag' to={`/projects/${link.pathname}`}>
                <h1 className='link-name'>{link.name}</h1>
            </Link>
        )
    })


    return (
        <div className={`project-container ${props.pageLeave ? 'page-leave' : ''}`}>
            <section className={`section-1 ${props.color}`}>
                <div className='section-1-text'>
                    <h1>{props.title1}</h1>
                    <p>{props.title2}</p>
                    <p>{props.title3}</p>
                </div>
                <div className='btc-anim-container'>
                    <img className='btc-anim' src={props.art} alt='art'/>
                </div>
                <div className='button-div'>
                        <button name={props.link1} onClick={handleDelayClick}>Live Site</button>
                        <button name={props.link2}  onClick={handleDelayClick}>Github Repo</button>
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
                        <h3>WORK</h3>
                        <p>{props.position}</p>
                    </div>
                    <div>
                        <h3>YEAR</h3>
                        <p>{props.year}</p>
                    </div>
                </div>
            </section>
            <section className='section-4'>
                {linksJsx}
            </section>
        </div>
    )
}

export default ProjectTemplate
