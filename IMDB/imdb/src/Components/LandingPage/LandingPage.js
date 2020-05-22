import React from 'react'
import MainPresentation from './MainPresentation';
import LeftFlashCard from './LeftSecondaryPresentation';
import RightFlashCard from './RightSecondaryPresentation';

//images imports
import mobilePhoneImg from '../../ComponentImages/LandingPage/flashCards/mobileTemplateImg/phone.png';
import macbookImg from '../../ComponentImages/LandingPage/flashCards/ComputerTemplateImg/macbook.png';

const LandingPage=()=>{
    return(
        <div class='AppContainer'>
            <MainPresentation/>
            <LeftFlashCard
                header='Informations on thousands of movies and TV shows.'
                secondaryHeader='Lookup all the informations you need for your favorite movies and TV shows.'
                img={macbookImg}
            />
            <RightFlashCard
               header='Soon Available on mobile.'
               secondaryHeader='Soon to be enjoyable on your iOS and Android devices!'
               img = {mobilePhoneImg}
            />
        </div>
    );
}

export default LandingPage;