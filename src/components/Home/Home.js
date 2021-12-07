import React, { useRef, useState } from 'react'
import './home.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import btc from '../../images/coinflip_img.png'
import homepage from '../../images/0001.png'

function Home() {

    const [arrowClick, setArrowClick] = useState(false)

    const arrowRef = useRef()

    const handleArrowClick = () => {
        setArrowClick(!arrowClick)
        setTimeout(() => {
            !arrowClick && arrowRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
          }, 1100);
        setArrowClick(!arrowClick)

    }

    return (
        <div className='home-container'>
            <section className='home-1'>
                <div className='home-1-text'>
                    <h1>Hi, I'm Brian.</h1>
                    <p>I'm a Fullstack Web Developer with an interest in design. Check out some of my work below.</p>
                    <AiOutlineArrowDown className={`icons ${arrowClick ? 'icon-click' : ''}`} onClick={handleArrowClick}/>
                    <AiOutlineArrowDown className={`icons-1 ${arrowClick ? 'icon-click-1' : ''}`} onClick={handleArrowClick}/>
                    <AiOutlineArrowDown className={`icons-2 ${arrowClick ? 'icon-click-2' : ''}`} onClick={handleArrowClick}/>
                    <AiOutlineArrowDown className={`icons-3 ${arrowClick ? 'icon-click-3' : ''}`} onClick={handleArrowClick}/>
                </div>
                <div className=''>

                </div>
            </section>
            <section className='home-2' ref={arrowRef}>
                <div>
                    <h1>Projects</h1>
                </div>
                <div className='project-1'>
                    <div className='project-title'>
                        <h1>What If?</h1>
                        <p>Cryptocurrency Calculator</p>
                    </div>
                    <img className='btc-img' src={btc} alt='btc'/>
                </div>
                <div className='project-2'>
                    <div className='project-title'>
                        <h1>Home.</h1>
                        <p>Browser Homepage</p>
                    </div>
                    <img className='homepage-img' src={homepage} alt='btc'/>
                </div>
            </section>
        </div>
    )
}

export default Home
