import React, { useEffect } from 'react'
import './projects.css'

function ProjectTemplate(props) {

    const handleDelayClick = (e) => {
        props.setPageLeave(true)
        setTimeout(() => {
            window.location.href = e.target.name
        }, 1000)
    }

    useEffect(() => {
        setTimeout(() => {
            props.setPageLeave(false)
            window.scrollTo(0,0)
        }, 600)
    }, [])

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
                <h1>Planning</h1>
                <img src='https://www.figma.com/file/nVvxhFwbIqFPyypM3msA2z/Untitled?node-id=0%3A1' alt='img'/>
            </section>
        </div>
    )
}

export default ProjectTemplate
