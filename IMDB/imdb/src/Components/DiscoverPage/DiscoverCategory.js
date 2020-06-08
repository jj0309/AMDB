import React, { useEffect, useState } from 'react';
import style from './css/DiscoverCategory.module.css';

import axios from 'axios';

const DiscoverCategory=(props)=>{

    const [genres,setGenres]=useState([]);
    const [genreID]=useState(props.genreID);
    const [genreCollection,setGenreCollection]=useState([]);

    useEffect(()=>{
        axios.get('/api/discover').then(response=>{
            setGenres(response.data.datas.genres);
        })
    },[])

    useEffect(()=>{
        if(props.showSection)
            axios.get('/api/discover/'+genreID).then(response=>{
                setGenreCollection(response.data.datas.results);
            })
    },[props.showSection,genreID])

    return(
        <div>
            <ul className={style.CategoryListing}>
                {
                    genres.map((genre,index)=>{return <a key={genre.id} href={'/discover/'+genre.id}><li key={genre.id}>{genre.name}</li></a>})
                }
            </ul>
            { props.showSection?
                <div className={style.BackgroundOffset}>
                    <div className={style.ShowedGenre}>
                        {
                            genreCollection.map((movie,index)=>{
                                return(
                                <div className={style.Movie} key={index}>
                                    <h3>{movie.title}</h3>
                                    <img alt='poster' src={'https://image.tmdb.org/t/p/w500/'+movie.poster_path}/>
                                    <h4>{movie.vote_average === 0 ?
                                        'not yet rated'
                                        :
                                        movie.vote_average
                                        }☆
                                    </h4>
                                </div>
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
    )
}

export default DiscoverCategory;