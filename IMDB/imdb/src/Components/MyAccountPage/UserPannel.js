import React from 'react';
import style from './css/UserPannel.module.css';
const UserPannel=(props)=>{
    return(
        <div className={style.UserPannel}>
            {props.user.username === 'guest'?
                <div className={style.GuestMessage}>This section is disabled for guest users</div>
                :
                (null)
            }
            <ul>
                <li>Add a new list</li>
                <li>Modify account informations</li>
                <li>My reviews</li>
                <li>Shut down my account</li>
            </ul>
        </div>
    )
}

export default UserPannel;