import React, { useState } from 'react';
import style from './css/QuickSearch.module.css';
import searchStyle from '../SearchForm/css/BasicSearchForm.module.css';
import axios from 'axios';

const QuickSearch=(props)=>{
    const [searchResponse,setSearchResponse] = useState({fetched:false});
    const [payload,setPayload]=useState({
        filmTitle:'',
    })

    const handleChange=(e)=>{
        setPayload({filmTitle:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const filmName = payload['filmTitle']
        await axios.get('/api/search/'+filmName)
        .then((response)=>{
            setSearchResponse(response.data);
        })
        console.log(searchResponse);
    }

    return(
        <div className={style.QuickSearch}>
            <form className={style.formSearch} onSubmit={handleSubmit}>
                <h1 className={style.SearchHeader}>Lookup a movie</h1>
                <input className={searchStyle.SearchInput} value={payload['filmTitle']} onChange={handleChange} style={{width:'100%',border:'0'}} placeholder="Name of a movie or TV show" type="text"></input>
                <button className={searchStyle.SearchButton} style={{width:'100%'}} type="submit">Search now! (e.g. Titanic)</button>
            </form>
        </div>
    )
}

export default QuickSearch;