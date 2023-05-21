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
            <div className={styles.imgHanger}>
                <img src='/img/img888.svg'/>
            </div>
            <span style={{fontWeight:'600',fontSize:'16px'}}>YOU NEED A BILLING ADDRESS</span>
            <p style={{fontWeight:'300',fontSize:'14px'}}>You currently have no saved address. Without one, you won't be able to add a new payment method.</p>
            <button className={styles.btnStartShopping}>ADD NEW ADDRESS</button>
        </div>
    </div>);
}

export default UserPaymentMethod;