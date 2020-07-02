import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import NavigationButton from './NavigationButton';
import style from './css/MyFavorites.module.css';
import axios from 'axios';

const MyFavorites=(props)=>{
    const user = props.user;
    const numberOfCards = 5;
    const [favoriteList,setFavoriteList] = useState([]);
    const [slideIndex,setSlideIndex] = useState(0);

    const navigateSlideIndex=(direction)=>{
        if(direction === 0)
            return setSlideIndex(slideIndex-1);
        return setSlideIndex(slideIndex+1); 
    }
    const showMovieCards=()=>{
        let cards=[];
        for(let index = slideIndex;index<index+numberOfCards;index++){
            if(index<=favoriteList.length)
                cards.push(<MovieCard key={index} movie={favoriteList[index].datas}/>)
        }
        return cards;
    }

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
            <NavigationButton direction='previous' navigationFunc={navigateSlideIndex}/>
            {showMovieCards()}
            <NavigationButton direction='next' navigationFunc={navigateSlideIndex}/>
        </div>
    )
}

export default MyFavorites;