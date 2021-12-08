import React, { useEffect } from 'react'
import './projects.css'

function Whatif(props) {

    useEffect(() => {
        props.setPageLeave(false)
    }, [])

    return (
        <div className={`what-if-container ${props.pageLeave ? 'page-leave' : ''}`}>
            <h1>hello</h1>
        </div>
    )
}

export default Whatif
