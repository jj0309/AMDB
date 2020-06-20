import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Redirect=({component:Component})=>{
    const [auth,SetAuth]=useState(false);
    useEffect(()=>{
        axios.post('/api/verifyToken',
            {
                token:tokenvalue
            }
        ).then(response=>{
            SetAuth(response.data.tokenValidation);
        }).catch(error=>{
            console.log('api data fetch error: ',error);
        })
    },[auth])
    return(
        <Redirect to={{pathname:'/login'}}/>
    )
}