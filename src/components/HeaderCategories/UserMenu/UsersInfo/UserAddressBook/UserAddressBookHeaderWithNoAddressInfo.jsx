import React from 'react';
import styles from "../MyAccount/MyAccount.module.css";



const UserAddressBookHeaderWithNoAddressInfo= () => {
    return  <div className={styles.userDetailsHeader}>
        <img src='/img/6img.svg'/>
        <h1>ADD NEW ADDRESS</h1>
        <p>You currently have no saved addresses. Get started by adding one.</p>
    </div>;
}

export default UserAddressBookHeaderWithNoAddressInfo;