import React from 'react';
import style from './css/AboutPage.module.css';

const AboutPage=()=>{
    return(
        <div>
            <div className={style.AboutContainer}>
                <div className={style.AboutText}>
                    <p>This is a very simple project made using the OMDB api. The project itself 
                        was started as a mean for me to get familiarized to ReactJS which is why 
                        not much backend work was done as it wouldn't have chipped into my learning 
                        of the framework itself. With that said, I do plan on adding more features to it eventually
                        and with that, expand the backend of the app. <br/><br/>
                        Thanks for checking it out, I'll try to update it with new features once 
                        in a while and suggestions can be sent to me on the github page
                        of the project.
                    </p>
                </div>
                <div className={style.StackList}>
                    <div>
                        <h1>Stacks used</h1>
                        <h3>ReactJS</h3>
                        <h3>Express (backend to make calls to the OMDB api)</h3>
                        <h3>OMDB (API)</h3>
                        <h3>TMDB (API)</h3>
                        <h3>CSS</h3>
                        <h3>React-Spring (Soon,I do plan on adding minimalistic animations to it in the near future)</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;