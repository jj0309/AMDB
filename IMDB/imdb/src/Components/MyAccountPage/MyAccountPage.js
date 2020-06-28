import React from 'react';
import MyFavorites from './MyFavorites';
//import WatchLater from './WatchLater';
import style from './css/MyAccountPage.module.css';
const tokenAuth = require('../../Auth/ValidateToken');

const MyAccountPage=()=>{
    const user = tokenAuth.getUserData();
    return(
        <div className={style.AccountPageContainer}>
            <MyFavorites user={user}/>
        </div>
    )
}

export default MyAccountPage;