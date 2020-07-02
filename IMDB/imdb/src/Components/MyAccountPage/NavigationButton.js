import React from 'react';
import style from './css/NavigationButton.module.css';

const NavigationButton=(props)=>{

    const Navigate=()=>{
        let direction = 1;
        if(props.direction==='previous')
            direction = 0;
        props.navigationFunc(direction);
    }

    return(
        <div className={style.SlideControl}>
            {props.direction==='previous'?
                <div onClick={Navigate}>&#10094;</div>
                :
                <div onClick={Navigate}>&#10095;</div>
            }
        </div>
    )
}

export default NavigationButton;