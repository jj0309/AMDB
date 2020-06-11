import React, { useState } from 'react';
import style from './css/Pagination.module.css';

const Pagination=(props)=>{
    const [pageIndex]=useState(props.page);
    const [categoryGenre]=useState(props.genre);
    return(
        <div className={style.PaginationModule}>
            { pageIndex > 1 ?
                <a href={'/discover/'+categoryGenre+'/'+(parseInt(pageIndex)-1)}>Previous page</a>
                :
                <div></div>
            }
            <h1>page {pageIndex}</h1>
            { pageIndex<=349?
                <a href={'/discover/'+categoryGenre+'/'+(parseInt(pageIndex)+1)}>Next page</a>
                :
                <div></div>
            }
        </div>
    )
}

export default Pagination;