import React from 'react';
import style from './css/leftPresentation.module.css';

const LeftSecondary=(props)=>{
    return(
        <div className={style.FlashCardContainer}>
            <h1 className={style.FlashCardHeader}>{props.header}</h1>
            <h3 className={style.FlashCardSecondHeader}>{props.secondaryHeader}</h3>
            <img className={style.FlashCardImg} src={props.img}/>
            <div className={style.FlashcardGif}></div>
        </div>
    );
}

export default LeftSecondary;