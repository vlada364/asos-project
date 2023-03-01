import React from 'react';
import UserAddressBookHeaderWithNoAddressInfo from '../UserAddressBook/UserAddressBookHeaderWithNoAddressInfo'
import {Outlet, useLocation} from "react-router";
import {useSelector} from "react-redux";
import AddressesItems from "./AddressesItems";
import styles from "../MyAccount/MyAccount.module.css";
import stylesAddresses from './ShowAddressesUser.module.css'
import EditButton from "./EditButton";
import UserAddressesHeader from "../UserAddressBook/UserAddressesHeader";


const ShowAddressesUser = () => {
// TODO use location

    return <div className={styles.ordersUsers}>
        <UserAddressesHeader/>
        <div className={stylesAddresses.addressContainer}>
                <Outlet/>

        </div>
    </div>
}

export default ShowAddressesUser;