import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function ProjectSlide(props) {
    const navigate = useNavigate()

    const handleDelayClick = (e) => {
        e.preventDefault()
        props.setPageLeave(!props.pageLeave)
        setTimeout(() => {
            navigate(`/projects/${props.link}`)
        }, 1000)
    }

    return (
        <div className={`project-${props.index}`} onClick={handleDelayClick} ref={props.projectsRef}>
            <div className='project-title'>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <img className={`img-${props.index}`} src={props.img} alt='btc'/>
            <Link to={`/projects/${props.link}`} onClick={handleDelayClick}>
                <button className='slide-btn'>See More</button>
            </Link>
        </div>
    )
}

export default ProjectSlide
