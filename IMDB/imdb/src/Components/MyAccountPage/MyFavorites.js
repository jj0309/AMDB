import React from 'react';
import style from './css/MyFavorites.module.css';

const MyFavorites=()=>{
    const guestList=[1,2,3,4,5];
    return(
        <div className={style.MyFavorites}>
            {
                guestList.map((item,index)=>{
                    return <a className={style.MyFavoritesCard} href='/' key={index}><li>{item}</li></a>
                })
            }
        </div>
    )
}

export default MyFavorites;