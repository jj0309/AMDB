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
                <li><span>Add a new list</span></li>
                <li><span>Modify account informations</span></li>
                <li><span>My reviews</span></li>
                <li><span>Shut down my account</span></li>
            </ul>
        </div>
    )
}

export default UserPannel;