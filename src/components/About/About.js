import React, { useEffect } from 'react'

function About(props) {

    useEffect(() => {
        props.setPageLeave(false)
    }, [])

    return (
        <div>
            <h1>hello</h1>
        </div>
    )
}

export default About
