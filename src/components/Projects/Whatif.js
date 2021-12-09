import React, { useEffect } from 'react'
import './what-if.css'
import btcAnim from '../../images/coinflip_img.png'

function Whatif(props) {

    useEffect(() => {
        props.setPageLeave(false)
    }, [])

    return (
        <div className={`what-if-container ${props.pageLeave ? 'page-leave' : ''}`}>
            <section className='section-1'>
                <div className='text-container'>
                    <h1>What If</h1>
                    <p>Cryptocurrency calculator</p>
                    <p>React, CSS, JavaScript, HTML</p>
                    <div className='button-div'>
                        <button>Live Site</button>
                        <button>Github Repo</button>
                    </div>
                </div>
                <div className='btc-anim-container'>
                    <img className='btc-anim' src={btcAnim} alt='btc'/>
                </div>
            </section>

        </div>
    )
}

export default Whatif
