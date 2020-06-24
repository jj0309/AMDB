import React from 'react';
import {Route} from 'react-router-dom';
import {Redirect} from 'react-router';
import Auth from '../../Auth/Auth';

const PrivateRoute=({component:Component, ...rest})=>{

    return(
        <Route {...rest} render={
            (props)=>{
                if(Auth.isAuthenticated())
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
        }/>
    )
}

export default PrivateRoute;