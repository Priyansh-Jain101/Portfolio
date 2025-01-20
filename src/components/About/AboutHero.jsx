import React from 'react';
function AboutHero() {
    return ( 
        <div className="main">
            <div className='about-hero'>
                <h1>Hi, I'm Priyansh, 👋</h1>
                <p className='myself'> A passionate Full-Stack Developer with 2 years of experience building scalable, user-friendly web applications. I specialize in both front-end and back-end development, bringing ideas to life with clean, efficient code and intuitive designs.</p>
                <p className='approach'>I thrive on solving complex problems and creating meaningful digital experiences. Whether it’s optimizing performance, debugging issues, or implementing a new feature, I’m always up for a challenge.</p>
                <h4 style={{margin: '2%'}}>What I Do</h4>
                <ul>
                    <li><strong>Front-End Development:</strong> Crafting responsive and interactive user interfaces using HTML, CSS, and JavaScript frameworks like React</li>
                    <li> <strong>Back-End Development:</strong> Building robust server-side logic and APIs with technologies like Node.js, Express, and MongoDB, ensuring optimal performance and security.</li>
                </ul>

                
            </div>
        </div>
     );
}

export default AboutHero;