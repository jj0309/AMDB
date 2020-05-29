import React, { useEffect, useState } from 'react';
import QuickSearch from './QuickSearch';
import axios from 'axios';

import style from './css/SearchPage.module.css';

const SearchPage=(props)=>{
    const [searchResponse,setSearchResponse] = useState({fetched:false});

    useEffect(()=>{
        /* axios.get('/api/search/titanic').then((response)=>{
            setSearchResponse(response.data)
        }) */
    },[])

    return(
        <div>
            <div className={style.SearchContainer}>
                {searchResponse['fetched']?
                    <div>
                    </div>
                    :
                    <QuickSearch/>
                }
            </div>
        </div>
    );
}

export default SearchPage;