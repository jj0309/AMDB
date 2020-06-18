import React from 'react';
import style from './css/GuestModule.module.css'
import axios from 'axios';

const GuestModule=()=>{

    const guestLogHandler=()=>{
        axios.get('/api/login/guest').then((response)=>{
            console.log(response);
        })
    }

    return(
        <div className={style.LoginModuleContainer}>
            <h2>Try as a guest</h2>
            <button onClick={guestLogHandler}>Login as a guest</button>
            <p>Some features will not be available.</p>
        </div>
    )
}

export default GuestModule;