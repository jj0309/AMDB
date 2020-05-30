import React from 'react';
import QuickSearch from './QuickSearch';

import style from './css/SearchPage.module.css';

const SearchPage=(props)=>{
    return(
        <div>
            <div className={style.SearchContainer}>
                <QuickSearch/>
            </div>
        </div>
    );
}

export default SearchPage;