import React from 'react';
import style from './css/rightPresentation.module.css';

const RightSecondary=(props)=>{
    const gifURL = props.gif;
    const GifStyling = {
        backgroundImage:'url("'+gifURL+'")'
    }
    return(
        <div className={style.FlashCardContainer}>
            <img className={style.FlashCardImg} alt='flashcard pic' src={props.img} />
            <h1 className={style.FlashCardHeader}>{props.header}</h1>
            <h3 className={style.FlashCardSecondHeader}>{props.secondaryHeader}</h3>
            {props.haveGif ? 
                <div className={style.FlashcardGif} style={GifStyling}></div>
                :
                <div></div>
            }
        </div>
    );
}

export default RightSecondary;