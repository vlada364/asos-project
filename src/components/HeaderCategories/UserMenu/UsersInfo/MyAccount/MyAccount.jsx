import React from 'react';
import styles from './MyAccount.module.css'
import AccountHeader from "./AccountHeader";
import AccountUserInfo from "./AccountUserInfo";
import {useLocation} from "react-router";
import BigPoster from "./BigPoster";
import {Outlet} from "react-router";
import Footer from './Footer'


const MyAccount = () => {
    const local=useLocation()
    const isMyAccount=local.pathname.endsWith('/myaccount');
    const isContactPreference=local.pathname.endsWith('/contact-preferences')

    return (
        <div className={styles.myAccountContainer}>
            <AccountHeader/>
            <div style={{display: "flex", width: '960px',gap:'23px',paddingBottom:'20px'}}>
                <AccountUserInfo/>
                <Outlet/>
            </div>
            {/*{isContactPreference?(<div><p>HELLO</p></div>):null}*/}
            <Footer/>

        </div>);
}

export default MyAccount;