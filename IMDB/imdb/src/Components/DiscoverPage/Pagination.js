import React, { useState } from 'react';
import style from './css/Pagination.module.css';

const Pagination=(props)=>{
    const [pageIndex]=useState(props.page);
    const [categoryGenre]=useState(props.genre);
    return(
        <div className={style.PaginationModule}>
            <a href={'/discover/'+categoryGenre+'/'+(parseInt(pageIndex)-1)}>Previous page</a>
            <h1>page {pageIndex}</h1>
            <a href={'/discover/'+categoryGenre+'/'+(parseInt(pageIndex)+1)}>Next page</a>
        </div>
    )
}

export default Pagination;