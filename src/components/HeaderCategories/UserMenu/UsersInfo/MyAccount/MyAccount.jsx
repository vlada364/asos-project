import React from 'react';
import styles from './MyAccount.module.css'
import AccountHeader from "./AccountHeader";
import AccountUserInfo from "./AccountUserInfo";
import {useLocation} from "react-router";
import BigPoster from "./BigPoster";
import {Outlet} from "react-router";


const MyAccount = () => {
    const local=useLocation()
    const isMyAccount=local.pathname.endsWith('/myaccount');

    return (
        <div className={styles.myAccountContainer}>
            <AccountHeader/>
            <div style={{display: "flex", width: '960px',gap:'23px'}}>
                <AccountUserInfo/>
                <Outlet/>
            </div>

        </div>);
}

export default MyAccount;