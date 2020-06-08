import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

import DiscoverCategory from './DiscoverCategory';

const DiscoverPage =(props)=>{
    const params = useParams();
    useEffect(()=>{
        if(params.genre === undefined)
            document.location='/discover/12';
    },[params.genre])
    return(
        <div>
            <DiscoverCategory showSection={props.genre} genreID={params.genre}/>
        </div>
    )
}

export default DiscoverPage;