import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import style from './css/MyAccountPage.module.css';
const tokenAuth = require('../../Auth/ValidateToken');

const MyAccountPage=()=>{
    const [user,setUser]=useState(0);
    useEffect(()=>{
        const fetchUserData =async()=>{ 
            const fetched = await tokenAuth.getUserData();
            setUser(fetched);
        };
        fetchUserData();
    },[])
    return(
        <div className={style.AccountPageContainer}>
            <div className={style.MyFavoritesContainer}><Listing title='My Favorites' user={user} api='/api/getfavorites'/></div>
            <div className={style.WatchLaterContainer}><Listing title='Watch Later' user={user} api='/api/getwatchlater'/></div>
        </div>
    )
}

export default MyAccountPage;