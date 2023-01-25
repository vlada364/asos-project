import React from 'react';
import UserItems from "./UserItems";
import {infoForUser} from "./AccountUserInfo";



const UserItem= () => {
    return <div>{infoForUser.map((el)=>{
        return <UserItems icon={el.icon} text={el.name} link={el.link}/>
    })}</div>;
}

export default UserItem;