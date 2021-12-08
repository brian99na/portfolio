import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import ProjectSlide from './ProjectSlide'
import btc from '../../images/coinflip_img.png'
import homepage from '../../images/0001.png'

function Home() {
    const [arrowClick, setArrowClick] = useState(false)
    const [mainClick, setMainClick] = useState(false)
    const [windowVal, setWindowVal] = useState(0)

    const cryptoRef = useRef()
    const homepageRef = useRef()
    const madlibsRef = useRef()

    const handleArrowClick = () => {
        setArrowClick(!arrowClick)
    }

    const handleColorClick = (refVal) => {
        console.log(refVal)
        setTimeout(() => {
            arrowClick && refVal.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            })
          }, 500);
        setArrowClick(!arrowClick)
    }

    // window.addEventListener('scroll', () => {
    //     let scrollVal = this.scrollY
    //     setWindowVal(scrollVal)
    // })

    // console.log(windowVal)

    return (
        <div className='home-container'>
            <section className='home-1'>
                <div className='home-1-text'>
                    <h1>Hi, I'm Brian.</h1>
                    <p>I'm a Fullstack Web Developer with an interest in design. Check out some of my work below.</p>
                    <div className={`button-arr ${'button-arr-click'}`}>
                        <AiOutlineArrowDown className={`icons ${arrowClick ? 'icon-click' : ''}`} onClick={handleArrowClick}/>
                        <AiOutlineArrowDown className={`icons-1 ${arrowClick ? 'icon-click-1' : ''}`} onClick={() => handleColorClick(cryptoRef)}/>
                        <AiOutlineArrowDown className={`icons-2 ${arrowClick ? 'icon-click-2' : ''}`} onClick={() => handleColorClick(homepageRef)}/>
                        <AiOutlineArrowDown className={`icons-3 ${arrowClick ? 'icon-click-3' : ''}`} onClick={() => handleColorClick(madlibsRef)}/>
                    </div>
                </div>
                <div className={`home-1-art ${arrowClick ? 'art-click' : ''}`}>

                </div>
            </section>
            <section className='home-2'>
                <h1>Projects</h1>
                <ProjectSlide reffing={cryptoRef} link='what-if' index={'1'} img={btc} title='What If?' desc='Cryptocurrency Calculator'/>
                <ProjectSlide reffing={homepageRef} link='home-page' index={'2'} img={homepage} title='Home.' desc='Browser Homepage'/>
                <ProjectSlide reffing={madlibsRef} link='mad-libs' index={'3'} img={btc} title='Madlibs' desc='Word game'/>
            </section>
            <section className='home-3'>
                <h1>Skills</h1>
                <div>

                </div>
                <div>
                    
                </div>
            </section>
        </div>
    )
}

export default Home
