import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';

import DiscoverCategory from './DiscoverCategory';
import Pageination from './Pagination';

const DiscoverPage =(props)=>{
    const params = useParams();
    useEffect(()=>{
        if(params.genre === undefined)
            document.location='/discover/12/1';
        else if(params.page === undefined)
            document.location='/discover/'+params.genre+'/1';
    },[params.genre,params.page])
    return(
        <div>
            <DiscoverCategory showSection={props.genre} genreID={params.genre} page={params.page}/>
            <Pageination genre={params.genre} page={params.page}/>
        </div>
    )
}

export default DiscoverPage;