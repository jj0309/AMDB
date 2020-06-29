import React, { useEffect, useState } from 'react';
import style from './css/MyFavorites.module.css';
import axios from 'axios';

const MyFavorites=(props)=>{
    const user = props.user;
    const [favoriteList,setFavoriteList] = useState([2,2,2]);
    useEffect(()=>{
        axios.post('/api/getfavorites',
            {
                user:user.username
            }
        ).then((resp)=>{
            setFavoriteList(resp.data);
        });
    },[user]);

    return(
        <div className={style.MyFavorites}>
            {
                favoriteList.map((item,index)=>{
                    return <a className={style.MyFavoritesCard} href='/' key={index}><li>{item}</li></a>
                })
            }
        </div>
    )
}

export default MyFavorites;