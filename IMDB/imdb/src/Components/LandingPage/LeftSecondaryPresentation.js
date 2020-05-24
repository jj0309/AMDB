import React from 'react';
import style from './css/leftPresentation.module.css';

const LeftSecondary=(props)=>{
    const gif = props.gif;
    const GifStyling = {
        backgroundImage: 'url("'+gif+'")'
    }
    return(
        <div className={style.FlashCardContainer}>
            <h1 className={style.FlashCardHeader}>{props.header}</h1>
            <h3 className={style.FlashCardSecondHeader}>{props.secondaryHeader}</h3>
            <img className={style.FlashCardImg} alt='flashcard pic' src={props.img}/>
            {props.haveGif ?
                <div className={style.FlashcardGif} style={GifStyling}></div>
                :
                <div></div>
            }
        </div>
    );
}

export default LeftSecondary;