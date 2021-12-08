import React from 'react'

function ProjectSlide(props) {

    const handleClick = () => {
        
    }

    return (
        <div ref={props.reffing}  className={`project-${props.index}`}>
            <div className='project-title'>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
            <img className={`img-${props.index}`} src={props.img} alt='btc'/>
            <button onClick={handleClick} className='slide-btn'>See more</button>
        </div>
    )
}

export default ProjectSlide
