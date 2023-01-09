import React from 'react'
import { RxAvatar } from 'react-icons/rx';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='about'>
                <h5>About</h5>
                <p>We are best CRYPTO GUIDER...</p>
            </div>
            <div className='founder'>
             <h5>Founder</h5>   
             <RxAvatar size={70} color={'gray'}/>
            </div>

        </div>
    )
}

export default Footer