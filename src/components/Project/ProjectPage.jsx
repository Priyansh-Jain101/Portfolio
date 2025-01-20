import React from 'react';
import ProjectHero from './ProjectHero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Footer from '../../Footer';
function ProjectPage() {
    return ( 
        <div className='project-page'>
            <ProjectHero/>
                <LeftSection name='Noble Nest' imageUrl="https://res.cloudinary.com/dwzzzllfr/image/upload/v1737324967/noblenest_phxyfa.png" description="Noble Nest is a dynamic real estate website offers seamless property listings, user authentication, and database integration, providing an intuitive platform for buying, selling, and renting properties effortlessly." website='https://noble-nest-ys5t.onrender.com/home' sourceCode='https://github.com/Priyansh-Jain001/Noble-Nest'/>
                
                <RightSection name='Expense Tracker' imageUrl="https://res.cloudinary.com/dwzzzllfr/image/upload/v1737324966/expensetracker_ae9yzm.png" description="An expense tracker application helps users manage finances by recording, categorizing, and analyzing income and expenses. It provides real-time insights, budgeting tools, and visualizations to promote better financial planning and control." website='https://expense-tracker-py.netlify.app/' sourceCode='https://github.com/Priyansh-Jain001/Expense-Tracker'/>

                <LeftSection name='Simon Game' imageUrl='https://res.cloudinary.com/dwzzzllfr/image/upload/v1737324966/simongame_v2qaum.png' description='Simon is a memory game that challenges players to repeat an increasingly complex sequence of flashing lights. The game begins with a simple pattern, and each round adds another step. Players must remember and replicate the pattern without error, testing their memory and concentration skills.' website='https://simon-game0.netlify.app/' sourceCode='https://github.com/Priyansh-Jain001/Simon-Game'/>
                
                <RightSection name='Weather Application' imageUrl='https://res.cloudinary.com/dwzzzllfr/image/upload/v1737324966/weather_app_gsgsyl.png' description='A weather app is a mobile application that provides real-time weather updates and forecasts based on your location. It typically displays key information such as temperature, humidity, wind speed, air pressure, and precipitation levels.' website='https://weathe-app-py.netlify.app/' sourceCode='https://github.com/Priyansh-Jain001/Weather-Application'/>

                <LeftSection name='Tic-Tac-Toe' imageUrl='https://res.cloudinary.com/dwzzzllfr/image/upload/v1737324966/tic_tac_toe_yhnvlj.png' description='Tic Tac Toe is a classic two-player game played on a 3x3 grid. Players take turns marking O or X in empty squares, aiming to get three of their symbols in a row—horizontally, vertically, or diagonally. The first player to do so wins, or the game ends in a draw.' website='https://tic-tac-toee0.netlify.app/' sourceCode='https://github.com/Priyansh-Jain001/Tic-Tac-Toe'/>
                
                <Footer/>
            </div>
     
     );
}

export default ProjectPage;