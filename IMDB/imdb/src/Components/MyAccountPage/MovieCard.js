import React, { useState } from 'react';
import style from './css/MovieCard.module.css';

const MovieCard=(props)=>{
    const movie = useState(props.movie);

    return(
        <div className={style.MovieCard}>
            {movie[0] === undefined ?
                <div></div>
                :
                <a href={'/search/'+movie[0].id}>
                    <h4 className={style.MovieRating}>
                        {movie[0].vote_average === 0 ?
                        'not yet rated'
                        :
                        movie[0].vote_average
                        }<span className={style.Star}>☆</span>
                    </h4>
                    <h3>
                        {movie[0].title.length>20?
                        movie[0].title.substring(0,21)+'...'
                        :
                        movie[0].title
                        }
                    </h3>
                    <img alt='poster' src={'https://image.tmdb.org/t/p/w500/'+movie[0].poster_path}/>
                </a>
            }
        </div>
    );
}

export default MovieCard;