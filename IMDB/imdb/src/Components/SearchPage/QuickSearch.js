import React, { useState, useEffect } from 'react';
import style from './css/QuickSearch.module.css';
import searchStyle from '../SearchForm/css/BasicSearchForm.module.css';
import axios from 'axios';

const QuickSearch=(props)=>{
    const [searchResponse,setSearchResponse] = useState({fetched:false});
    const [payload,setPayload]=useState({
        filmTitle:props.movieTitle,
    })

    const handleChange=(e)=>{
        setPayload({filmTitle:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        document.location = "/search/"+payload['filmTitle'];
    }

    useEffect(()=>{
        axios.get('/api/search/'+props.movieTitle)
        .then((response)=>{
            setSearchResponse(response.data);
        })
    },[props.movieTitle])

    return(
        <div className={searchStyle.SearchContainer}>
            <div className={style.QuickSearch}>
                <form className={style.formSearch} onSubmit={handleSubmit}>
                    <h1 className={style.SearchHeader}>Lookup a movie</h1>
                    <input className={searchStyle.SearchInput} value={payload['filmTitle']} onChange={handleChange} style={{width:'100%',border:'0'}} placeholder="Name of a movie or TV show" type="text"></input>
                    <button className={searchStyle.SearchButton} style={{width:'100%'}} type="submit">Search now! (e.g. Titanic)</button>
                </form>
            </div>
            {searchResponse['fetched'] && searchResponse['datas']['Response'] === 'True'?
                <div className={style.SearchResult}>
                    <div className={style.FilmData}>
                        <h1>{searchResponse['datas']['Title']}</h1>
                        <h3>Released: {searchResponse['datas']['Released']}</h3>
                        <h3>Runtime: {searchResponse['datas']['Runtime']}</h3>
                        <h3>Genre: {searchResponse['datas']['Genre']}</h3>
                        <h3>Director: {searchResponse['datas']['Director']}</h3>
                        <h3>Writer: {searchResponse['datas']['Writer']}</h3>
                        <h3>Lead actors: {searchResponse['datas']['Actors']}</h3>
                        <p>{searchResponse['datas']['Plot']}</p>
                        <h4>awards: {searchResponse['datas']['Awards']}</h4>
                        <h2>Ratings</h2>
                        <h4>imdb: {searchResponse['datas']['imdbRating']}</h4>
                        <h4>Metascore: {searchResponse['datas']['Metascore']}</h4>
                    </div>
                    <img className={style.FilmPoster} alt='poster' src={searchResponse['datas']['Poster']}/>
                </div>
                :
                <div className={style.waitingForSearchSubmission}>Nothing found ... YET!</div>
            }
        </div>
    )
}

export default QuickSearch;