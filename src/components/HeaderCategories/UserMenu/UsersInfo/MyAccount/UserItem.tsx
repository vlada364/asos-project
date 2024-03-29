import React from 'react';
import UserItems from "./UserItems";
import {infoForUser} from "./data/AccountInfo";



const UserItem= () => {
    return <div>{infoForUser.map((el)=>{
        return <UserItems icon={el.icon} text={el.name} link={el.link}/>
    })}</div>;
}

export default UserItem;