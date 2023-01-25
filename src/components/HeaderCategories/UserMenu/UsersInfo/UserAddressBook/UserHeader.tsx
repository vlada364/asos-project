import React from 'react';
import styles from "../MyAccount/MyAccount.module.css";


type PropsHeaderValue={src:string,text:string}

const UserHeader:React.FC<PropsHeaderValue>= ({src,text}) => {
    return <div className={styles.userDetailsHeader}>
        <img src={src}/>
        <h1>{text}</h1>
    </div>;
}

export default UserHeader;