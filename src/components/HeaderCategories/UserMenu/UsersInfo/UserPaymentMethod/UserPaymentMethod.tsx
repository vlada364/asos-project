import React from 'react';
import styles from "../MyAccount/MyAccount.module.css";


const UserPaymentMethod = () => {
    return (<div className={styles.ordersUsers}>
        <div className={styles.ordersHeader}>
            <div className={styles.ordersImg}>
                <img src='/img/img77.svg'/>
            </div>
            <div className={styles.textMyOrders}><span>ADD PAYMENT METHOD</span></div>
        </div>
        <div className={styles.ordersContainer}>
            <button className={styles.btnStartShopping}>ADD PAYMENT METHOD</button>
        </div>
    </div>);
}

export default UserPaymentMethod;