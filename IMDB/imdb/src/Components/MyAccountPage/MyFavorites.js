import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
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
                    return <MovieCard key={index} movie={item.datas}/>
                })
            }
        </div>
    )
}

export default MyFavorites;