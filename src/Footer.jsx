import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return ( 
        <div className='footer'>
            <h2 style={{color: 'black'}}>Get In Touch</h2>
            <div className="contact-no">
                <h5 style={{color: 'black'}}>Contact No: <Link style={{color: 'black'}}>7067265126</Link></h5>
                <h5 style={{color: 'black'}}>Email: <Link style={{color: 'black'}}>priyanshjain7067@gmail.com</Link></h5>
            </div>

            <div className="social-platforms">
                <Link to='https://github.com/Priyansh-Jain001' style={{color: 'black', fontSize: '25px', marginRight: '4%'}}> <i class="fa-brands fa-github"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px', marginRight: '4%'}}><i class="fa-brands fa-x-twitter"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px', marginRight: '4%'}}><i class="fa-brands fa-linkedin"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px', marginRight: '4%'}}><i class="fa-brands fa-instagram"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px', marginRight: '4%'}}><i class="fa-brands fa-facebook"></i></Link>
            </div>
        </div>
     );
}

export default Footer;