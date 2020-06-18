import React from 'react';
import style from './css/LoginModule.module.css';

const LoginModule=()=>{
    return(
        <div className={style.UserLoginContainer}>
            <form className={style.FormContainer}>
                <h2>Log in as a user</h2>
                <input placeholder='Username'></input>
                <input placeholder='Password' type='password'></input>
                <button>Login</button>
                <p>This feature is currently disabled</p>
            </form>
        </div>
    );
}
 
export default LoginModule;