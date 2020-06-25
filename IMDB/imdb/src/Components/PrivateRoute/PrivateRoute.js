import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import Auth from '../../Auth/Auth';

const PrivateRoute=({component:Component, ...rest})=>{
    const [isAuth,setIsAuth]=useState(false);
    let [IsReady,setIsReady] = useState(false);

    useEffect(()=>{
        let mounted = true;
        Auth.isAuthenticated().then(response=>{
            if(mounted){
                setIsAuth(response);
                setIsReady(true);
            }
        })
        return ()=>{mounted = false;};
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