import React, { useEffect, useState } from 'react';
import style from './css/DiscoverCategory.module.css';

import axios from 'axios';

const DiscoverCategory=(props)=>{

    const [genres,setGenres]=useState([]);
    const [genreID]=useState(props.genreID);
    const [page]=useState(props.page);
    const [genreCollection,setGenreCollection]=useState([]);

    useEffect(()=>{
        axios.get('/api/discover').then(response=>{
            setGenres(response.data.datas.genres);
        })
    },[])

    useEffect(()=>{
        if(props.showSection)
            axios.get('/api/discover/'+genreID+'/'+page).then(response=>{
                setGenreCollection(response.data.datas.results);
            })
    },[props.showSection,genreID,page])

    return(
        <div>
            <ul className={style.CategoryListing}>
                {
                    genres.map((genre,index)=>{return <a key={genre.id} href={'/discover/'+genre.id}><li key={genre.id}>{genre.name}</li></a>})
                }
            </ul>
            {genreCollection === undefined?
                document.location='/discover/'+genreID+'/1'
                :
                <div>
                { props.showSection?
                    <div className={style.BackgroundOffset}>
                        <div className={style.ShowedGenre}>
                            {
                                genreCollection.map((movie,index)=>{
                                    return(
                                        <a href={'/search/'+movie.title}key={index}>
                                            <div className={style.Movie}>
                                                <h4 className={style.MovieRating}>
                                                    {movie.vote_average === 0 ?
                                                    'not yet rated'
                                                    :
                                                    movie.vote_average
                                                    }<span className={style.Star}>☆</span>
                                                </h4>
                                                <h3>
                                                    {movie.title.length>32?
                                                    movie.title.substring(0,29)+'...'
                                                    :
                                                    movie.title
                                                    }
                                                </h3>
                                                <img alt='poster' src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path}/>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div className={style.NoGenreSeclected}>
                    </div>
                }
                </div>
            }
        </div>
    )
}

export default DiscoverCategory;