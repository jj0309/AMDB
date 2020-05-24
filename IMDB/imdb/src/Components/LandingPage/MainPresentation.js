import React,{useEffect, useState} from 'react';
import QuickSearch from '../SearchForm/BasicSearchForm';
import style from './css/MainPresentation.module.css';

const MainPresentation=(props)=>{

    const bgList = props.bgLs;
    const [bg,setBg] = useState({
        bgIndex : 0,
    })
    let index = bg['bgIndex'];
    const currentBg = bgList[index];
    const bgImgStyling={backgroundImage:currentBg};

    useEffect(()=>{
        console.log('useeffect');
    },[index])

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