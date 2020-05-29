import React from 'react';
import style from './css/BasicSearchForm.module.css';

const QuickSearch=(props)=>{
    return(
        <div>
            <form action='/search' method='get'>
                <input className={style.SearchInput} placeholder="Name of a movie or TV show" type="text"></input>
                <button className={style.SearchButton} style={{padding:'1em'}}type='submit'>{props.searchText}</button>
            </form>
        </div>
    );
}

export default QuickSearch;