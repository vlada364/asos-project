import React from 'react';
import styles from './MyAccount.module.css'
import UserItem from "./UserItem";
import {infoForUser} from "./data/AccountInfo";
import {useSelector} from "react-redux";




const AccountUserInfo = () => {
     //@ts-ignore
    const userName = useSelector(state => state.users.loggedInUser.first_name);
    //@ts-ignore
    const userLastName = useSelector(state => state.users.loggedInUser.last_name);
    const firstLetterOfName=userName[0].toUpperCase()
    const firstLetterOfLastname=userLastName[0].toUpperCase()

    return <div className={styles.accountInformationContainer}>
        <div className={styles.greetingsUser}>
            <div className={styles.circle}>
                <span className={styles.textInCircle}>{`${firstLetterOfName} ${firstLetterOfLastname}`}</span>
            </div>
            <div className={styles.greetingsUserName}>
                <span style={{fontWeight:'300',display:'flex'}}>Hi,</span>
                <span style={{letterSpacing:'3px'}}>{`${userName} ${userLastName}`}</span></div>
        </div>
        <UserItem/>
    </div>;
}

export default AccountUserInfo;