import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar';
// import '../../style.css'
function Hero() {
    return ( 
        <>
        {/* <Navbar/> */}
        <div className='home'>
            
            <div className="main">
                <div className='hero'>
                        <div className="info">
                            <div className="intro-1">
                                <h1>Hi, I'm Priyansh, 👋</h1>
                            </div>
                            
                            {/* <img src="https://res.cloudinary.com/dwzzzllfr/image/upload/v1737298649/Passport_Photo_akkeid.jpg" alt="#" /> */}
                            <div className="intro-2">
                            <p>A passionate web developer dedicated to building responsive, user-friendly, and visually appealing websites with a strong foundation in both frontend and backend development. With expertise in [HTML, CSS, JavaScript, React, Node.js etc.] I specialize in creating seamless digital experiences tailored to user needs.</p>

                            <p>I enjoy solving complex challenges and turning innovative ideas into reality through clean code and creative design. Whether it’s developing interactive frontends, robust backends, or integrating third-party APIs, I thrive on delivering solutions that align with modern web standards.</p>

                            <p>
                            Feel free to explore my work below, and let’s collaborate to bring your vision to life!
                            </p>
                            </div>
                    </div>

                    <div className="img">
                        <div className="image"></div>
                        
                        <Link to="/about" className='a'>
                            <div className='img-about'>
                                <h4>About <i class="fa-solid fa-arrow-right-long"></i></h4> 
                                <div className="green"></div>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Hero;