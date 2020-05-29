import React from 'react';
import style from './css/QuickSearch.module.css';
import searchStyle from '../SearchForm/css/BasicSearchForm.module.css';

const QuickSearch=(props)=>{
    return(
        <div className={style.QuickSearch}>
            <form className={style.formSearch} action="/search" method="get">
                <h1 className={style.SearchHeader}>Lookup a movie</h1>
                <input className={searchStyle.SearchInput} style={{width:'100%',border:'0'}} placeholder="Name of a movie or TV show" type="text"></input>
                <button className={searchStyle.SearchButton} style={{width:'100%'}} type="submit">Search now! (e.g. Titanic)</button>
            </form>
        </div>
    )
}

export default QuickSearch;