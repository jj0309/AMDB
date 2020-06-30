import React, { useState, useEffect } from 'react';
import MyFavorites from './MyFavorites';
import WatchLater from './WatchLater';
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
            <MyFavorites user={user}/>
            <WatchLater user={user}/>
        </div>
    )
}

export default MyAccountPage;