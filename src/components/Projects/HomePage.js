import React, { useEffect } from 'react'

function HomePage(props) {
    useEffect(() => {
        props.setPageLeave(false)
    }, [])

    return (
        <div className={`what-if-container ${props.pageLeave ? 'page-leave' : ''}`}>
            <h1></h1>
        </div>
    )
}

export default HomePage
