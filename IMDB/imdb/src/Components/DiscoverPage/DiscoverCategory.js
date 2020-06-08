import React, { useEffect, useState } from 'react';
import style from './css/DiscoverCategory.module.css';

import axios from 'axios';

const DiscoverCategory=()=>{

    const [genres,setGenres]=useState([]);

    useEffect(()=>{
        axios.get('/api/discover').then(response=>{
            setGenres(response.data.datas.genres);
        })
    },[])

    const handleCategoryClick=(genreID)=>{
        console.log(genreID);
    }

    return(
        <div>
            <ul className={style.CategoryListing}>
                {
                    genres.map((genre,index)=>{return <li key={genre.id} onClick={()=>handleCategoryClick(genre.id)}>{genre.name}</li>})
                }
            </ul>
        </div>
    )
}

export default DiscoverCategory;