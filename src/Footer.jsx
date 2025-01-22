import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    return ( 
        <footer className='footer'>
            <h2 style={{color: 'black'}}>Get In Touch</h2>
            <div className="contact-no">
                <h5 style={{color: 'black'}}>Contact Me: <Link to='tel:7067265126' style={{color: 'springgreen'}}> <i className="fa-solid fa-phone"></i></Link></h5>
                <h5 style={{color: 'black'}}>Email: <Link to='mailto:priyanshjain7067@gmail.com' style={{color: 'black', textDecoration: 'none'}}> &#128231;</Link></h5>
            </div>

            <div className="social-platforms">
                <Link to='https://github.com/Priyansh-Jain001' style={{color: 'black', fontSize: '25px', marginRight: '4.2%'}}> <i class="fa-brands fa-github"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px', marginRight: '4.2%'}}><i class="fa-brands fa-x-twitter"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px', marginRight: '4.2%'}}><i class="fa-brands fa-linkedin"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px', marginRight: '4.2%'}}><i class="fa-brands fa-instagram"></i></Link>
                <Link to='#' style={{color: 'black', fontSize: '25px'}}><i class="fa-brands fa-facebook"></i></Link>
            </div>
        </footer>
     );
}

export default Footer;