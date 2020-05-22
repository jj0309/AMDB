import React from 'react';
import style from './css/BasicSearchForm.module.css';

const QuickSearch=(props)=>{
    return(
        <div>
            <form action='/search' method='get'>
                <input className={style.SearchInput} type="text"></input>
                <button className={style.SearchButton} type='submit'>{props.searchText}</button>
            </form>
        </div>
    );
}

export default QuickSearch;