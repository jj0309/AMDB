import React from 'react'
import MainPresentation from './MainPresentation';
import LeftFlashCard from './LeftSecondaryPresentation';
import RightFlashCard from './RightSecondaryPresentation';

//to make http requests
/* import axios from 'axios'; */

//images imports
import mobilePhoneImg from '../../ComponentImages/LandingPage/flashCards/mobileTemplateImg/phone.png';
import macbookImg from '../../ComponentImages/LandingPage/flashCards/ComputerTemplateImg/macbook.png';

//gif imports
import macGoldenRetriever from '../../ComponentImages/LandingPage/flashCards/ComputerTemplateImg/golden.gif'
import mobileGoldenRetriever from '../../ComponentImages/LandingPage/flashCards/mobileTemplateImg/golden.gif';

//main presentation bg
import img from  '../../ComponentImages/LandingPage/MainPresentation/wallpaper/20200525.jpg';


const LandingPage=()=>{

    /* useEffect(()=>{
        axios.get('/api').then((response)=>{
            console.log(response.data);
        });
    },[]) */

    return(
        <div className='AppContainer'>
            <MainPresentation
                bg={img}
                slideShow={true}
            />
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