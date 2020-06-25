import React from 'react';
import MyFavorites from './MyFavorites';
import WatchLater from './WatchLater';
import style from './css/MyAccountPage.module.css';

const MyAccountPage=()=>{
    return(
        <div className={style.AccountPageContainer}>
            <MyFavorites/>
            <WatchLater/>
        </div>
    )
}

export default MyAccountPage;