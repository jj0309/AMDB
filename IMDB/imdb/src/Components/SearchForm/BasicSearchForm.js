import React, { useState } from 'react';
import style from './css/BasicSearchForm.module.css';

const QuickSearch=(props)=>{

    const [payload,setPayload] = useState(27205);

    //change payload value when user types into the input
    const handleInputChange=(e)=>{
        setPayload(e.target.value)
    }

    const handleSearchSubmit=(e)=>{
        e.preventDefault();
        document.location='/search/'+payload;
    }


    return(
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input className={style.SearchInput} onChange={handleInputChange} placeholder="Name of a movie or TV show" type="text"></input>
                <button className={style.SearchButton} style={{padding:'1em'}}type='submit'>{props.searchText}</button>
            </form>
        </div>
    );
}

export default QuickSearch;