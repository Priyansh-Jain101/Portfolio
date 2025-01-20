import React from 'react';
import { Link } from 'react-router-dom';
function LeftSection({name, imageUrl, description, website, sourceCode}) {
    return ( 
        <>
        <div className="project-main">
            <div className="rl-section-image">
                <div className="rl-image">
                    <img src={imageUrl} alt="NobleNest" />
                </div>
            </div>

            <div className="rl-section-about">
                <div className="rl-section-desc">
                    <h1>{name}</h1>
                    <p>{description}</p>

                    <div className="buttons">
                        <Link to={website}>
                            
                            <button type="button" class="btn btn-light website"><i class="fa-solid fa-earth-americas"></i> Website</button>
                        </Link> &nbsp;   
                        
                        <Link to={sourceCode}>
                            <button type="button" class="btn btn-light sourceCode"><i class="fa-brands fa-github"></i> Source Code</button>
                        </Link>   
                    </div>
                </div>
                
                
            </div>
            </div>
        </>
     );
}

export default LeftSection;