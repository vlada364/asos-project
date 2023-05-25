import React from 'react';
import styles from './MyAccount.module.css'
import {useNavigate} from "react-router";


const AccountHeader = () => {
    const navigate=useNavigate();

    return <div className={styles.headerAccount}>
        <div className={styles.bigBanner}>
            <div className={styles.logoAsos} onClick={()=>{navigate('/')}}><img src='/img/Asos.svg.png'/></div>
            <div className={styles.bannerAccount}><span>MY ACCOUNT</span></div>
            <div className={styles.digicertClick}><img
                src='/img/download.png'/>
            </div>
        </div>
    </div>;
}

export default AccountHeader;