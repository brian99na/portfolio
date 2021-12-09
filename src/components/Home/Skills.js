import React from 'react'

function Skills(props) {
    return (
        <div className='skills'>
            {props.name}
            <p>{props.img}</p>
        </div>
    )
}

export default Skills
