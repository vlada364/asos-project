import React from 'react';
import UserAddressBookHeaderWithNoAddressInfo from '../UserAddressBook/UserAddressBookHeaderWithNoAddressInfo'
import {Outlet, useLocation} from "react-router";
import {useSelector} from "react-redux";
import AddressesItems from "./AddressesItems";
import styles from "../MyAccount/MyAccount.module.css";
import stylesAddresses from './ShowAddressesUser.module.css'
import EditButton from "./EditButton";
import UserHeader from "../UserAddressBook/UserHeader";


const ShowAddressesUser = () => {
// TODO use location
    const loggedInSer = useSelector(state => state.users.loggedInUser);
    return <div className={styles.ordersUsers}>
        {loggedInSer.countryCode?<UserHeader/>:<UserAddressBookHeaderWithNoAddressInfo/>}
        <div className={stylesAddresses.addressContainer}>
                <Outlet/>

        </div>
    </div>
}

export default ShowAddressesUser;