import React,{useState, useEffect} from 'react';
import QuickSearch from '../SearchForm/BasicSearchForm';
import style from './css/MainPresentation.module.css';

const MainPresentation=(props)=>{

    const bgList = useState(props.bgLs);

    useEffect((bgIndex=0,bgList)=>{
        setInterval(() => {
            bgIndex++;
            let currentBg = bgList[bgIndex];
            let bgImgStyling={backgroundImage:currentBg};
        }, 3000);
    },[])

    return(
        <div className={style.GradientOffset}>
            <div className={style.PresentationContainer}>
                <h1 className={style.MainHeader}>
                    Search up your favorite movies,TV shows and more.
                </h1>
                <h2 className={style.SearchHeader}>Get all the informations you need.</h2>
                <div className={style.SearchModule}><QuickSearch searchText="SEARCH NOW!  >"/></div>
                <h2 className={style.SecondaryHeader}>Ready to search? Enter the name of the movie!</h2>
            </div>
        </div>
    );
}

export default MainPresentation;