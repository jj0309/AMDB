import React from 'react';
import style from './css/rightPresentation.module.css';

const RightSecondary=(props)=>{
    return(
        <div className={style.FlashCardContainer}>
            <img className={style.FlashCardImg} src={props.img} />
            <h1 className={style.FlashCardHeader}>{props.header}</h1>
            <h3 className={style.FlashCardSecondHeader}>{props.secondaryHeader}</h3>
        </div>
    );
}

export default RightSecondary;