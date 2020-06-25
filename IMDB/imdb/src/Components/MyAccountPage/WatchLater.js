import React from 'react';
import style from './css/WatchLater.module.css';

const WatchLater=()=>{
    const guestList=[1,2,3,4,5];
    return(
        <div className={style.WatchLater}>
            {
                guestList.map((item,index)=>{
                    return <a className={style.WatchLaterCard} href='/' key={index}><li>{item}</li></a>
                })
            }
        </div>
    )
}

export default WatchLater;