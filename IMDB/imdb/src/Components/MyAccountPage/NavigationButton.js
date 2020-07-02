import React from 'react'

const NavigationButton=(props)=>{

    const Navigate=()=>{
        let direction = 1;
        if(props.direction==='previous')
            direction = 0;
        props.navigationFunc(direction);
    }

    return(
        <div>
            {props.direction==='previous'?
                <div onClick={Navigate}>&#10094;</div>
                :
                <div onClick={Navigate}>&#10095;</div>
            }
        </div>
    )
}

export default NavigationButton;