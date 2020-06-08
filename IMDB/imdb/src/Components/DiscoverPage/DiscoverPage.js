import React from 'react';
import {useParams} from 'react-router-dom';

import DiscoverCategory from './DiscoverCategory';

const DiscoverPage =(props)=>{
    const params = useParams();
    return(
        <div>
            <DiscoverCategory showSection={props.genre} genreID={params.genre}/>
        </div>
    )
}

export default DiscoverPage;