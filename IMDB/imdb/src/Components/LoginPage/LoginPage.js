import React from 'react';
import GuestModule from './GuestModule';
import LoginModule from './LoginModule';
import style from './css/LoginPage.module.css';


const LoginPage=()=>{
    return(
        <div className={style.LoginPageContainer}>
            <GuestModule/>
            <LoginModule/>
        </div>
    );
}

export default LoginPage;