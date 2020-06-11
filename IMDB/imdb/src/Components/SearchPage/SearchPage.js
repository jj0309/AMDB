import React from 'react';
import {useParams} from 'react-router-dom';
import QuickSearch from './QuickSearch';

const SearchPage=()=>{
    const params = useParams();
    return(
        <div>
            <div>
                <QuickSearch movieID={params.movieID}/>
            </div>
        </div>
    );
}

export default SearchPage;