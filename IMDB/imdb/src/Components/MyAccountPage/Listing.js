import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import NavigationButton from './NavigationButton';
import style from './css/Listing.module.css';
import axios from 'axios';

const Listing=(props)=>{
    const user = props.user;
    const numberOfCards = 5;
    const [MovieList,setMovieList] = useState([]);
    const [slideIndex,setSlideIndex] = useState(0);
    const apiLink = props.api;

    const navigateSlideIndex=(direction)=>{
        if(direction === 0)
            return setSlideIndex(slideIndex-1);
        return setSlideIndex(slideIndex+1); 
    }

    const showMovieCards=()=>{
        let cards=[];
        for(let index = slideIndex;index<slideIndex+numberOfCards;index++){
            if(MovieList[index] !== undefined){
                cards.push(<MovieCard key={index} movie={MovieList[index].datas}/>)
            }
        }
        return cards;
    }

    useEffect(()=>{
        axios.post(apiLink,
            {
                user:user.username
            }
        ).then((resp)=>{
            setMovieList(resp.data);
        });
    },[user,apiLink]);

    useEffect(()=>{},[slideIndex])

    return(
        <div className={style.CardListContainer}>
            <div className={style.Title}>{props.title}</div>
            {slideIndex>=1?
                <NavigationButton direction='previous' navigationFunc={navigateSlideIndex}/>
                :
                <div></div>
            }
            {showMovieCards()}
            {slideIndex+numberOfCards<MovieList.length?
                <NavigationButton direction='next' navigationFunc={navigateSlideIndex}/>
                :
                <div></div>
            }
            <div className={style.ListControl}>
                Modify list
                <br/>
                <span className={style.SmallPrint}>disabled for guests</span>
            </div>
        </div>
    )
}

export default Listing;