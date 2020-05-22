import React from 'react'
import MainPresentation from './MainPresentation';
import LeftFlashCard from './LeftSecondaryPresentation';
import RightFlashCard from './RightSecondaryPresentation';

//images imports
import mobilePhoneImg from '../../ComponentImages/LandingPage/flashCards/mobileTemplateImg/phone.png';
import macbookImg from '../../ComponentImages/LandingPage/flashCards/ComputerTemplateImg/macbook.png';

//gif imports
const macGoldenRetriever = '../../ComponentImages/LandingPage/flashCards/ComputerTemplateImg/golden.gif'
const mobileGoldenRetriever = '../../ComponentImages/LandingPage/flashCards/mobileTemplateImg/golden.gif';


const LandingPage=()=>{
    return(
        <div className='AppContainer'>
            <MainPresentation/>
            <LeftFlashCard
                header='Informations on thousands of movies and TV shows.'
                secondaryHeader='Lookup all the informations you need for your favorite movies and TV shows.'
                img={macbookImg}
                haveGif={true}
                gif={macGoldenRetriever}
            />
            <RightFlashCard
               header='Soon Available on mobile.'
               secondaryHeader='Soon to be enjoyable on your iOS and Android devices!'
               img = {mobilePhoneImg}
               haveGif ={true}
               gif={mobileGoldenRetriever}
            />
        </div>
    );
}

export default LandingPage;