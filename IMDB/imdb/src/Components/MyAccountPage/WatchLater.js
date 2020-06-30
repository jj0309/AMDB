import React,{ useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import style from './css/WatchLater.module.css';
import axios from 'axios';

const WatchLater=(props)=>{
    const user = props.user;
    const [watchLaterList,setWatchLaterList] = useState([2,2,2]);
    useEffect(()=>{
        axios.post('/api/getwatchlater',
            {
                user:user.username
            }
        ).then((resp)=>{
            setWatchLaterList(resp.data);
        });
    },[user]);

    return(
        <div className={style.WatchLater}>
            {
                watchLaterList.map((item,index)=>{
                    return <MovieCard key={index} movie={item.datas}/>
                })
            }
        </div>
    )
}

export default WatchLater;