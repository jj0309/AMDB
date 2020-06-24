import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import Auth from '../../Auth/Auth';

const PrivateRoute=({component:Component, ...rest})=>{
    const [isAuth,setIsAuth]=useState(false);
    let [IsReady,setIsReady] = useState(false);

    useEffect(()=>{
        const verifyAuth=async()=>{
            setIsAuth(await Auth.isAuthenticated())
            setIsReady(true);
        };
        verifyAuth();
    },[isAuth,IsReady]);

    return(
        <Route {...rest} render={
            (props)=>{
                if(IsReady){
                    if(isAuth)
                        return <Component {...props}/>
                    else{
                        return <Redirect
                            to={{
                                pathname:'/login',
                                state:{
                                    from: props.location
                                }
                            }}
                        />
                    } 
                } 
            }
        }/>
    )
}

export default PrivateRoute;