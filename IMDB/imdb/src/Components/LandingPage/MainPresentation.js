import React from 'react';
import QuickSearch from '../SearchForm/BasicSearchForm';
import style from './css/MainPresentation.module.css';

const MainPresentation=(props)=>{
    const Bg = props.bg;
    const bgImgStyling={
        backgroundImage:
        'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 1) 100%),'
        +'url('+Bg+')',
    };

    return(
        <div className={style.GradientOffset}>
            <div className={style.BackgroundSlider} style={bgImgStyling}>
            </div>
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