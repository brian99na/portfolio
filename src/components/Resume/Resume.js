import React, { useEffect } from 'react'
import './resume.css'
import { DiGoogleDrive } from 'react-icons/di'
import { GrDocumentPdf } from 'react-icons/gr'
import resume from '../../images/0001.jpg'

function Resume(props) {

    const handleDelayClick = (e) => {
        props.setPageLeave(true)
        setTimeout(() => {
            window.location.href = e.target.name
        }, 1000)
    }

    useEffect(() => {
        window.scrollTo(0,0)
        setTimeout(() => {
            props.setPageLeave(false)
        }, 300);
    }, [])

    return (
        <div className={`resume-container ${props.pageLeave ? 'page-leave' : ''}`}>
            <section className='section-1'>
                <div className='section-1-text'>
                    <h1>Resume</h1>
                    <p>Scroll to view or Download Below</p>
                    <button className='desk-button' name='https://drive.google.com/file/d/1DkQhG7BcWnrDW1DcNP-u5fdZHwXv_Eff/view?usp=sharing' onClick={handleDelayClick}><DiGoogleDrive className='desk-resume-icon2'/>Link to Download</button>
                </div>
                <GrDocumentPdf className='resume-icon1'/>
                <button className='mob-button' name='https://drive.google.com/file/d/1DkQhG7BcWnrDW1DcNP-u5fdZHwXv_Eff/view?usp=sharing' onClick={handleDelayClick}><DiGoogleDrive className='resume-icon2'/>Link to Download</button>
            </section>
            <section className='section-2'>
                <img className='reg-resume' src={resume} alt='resume'/>
            </section>
        </div>
    )
}

export default Resume
