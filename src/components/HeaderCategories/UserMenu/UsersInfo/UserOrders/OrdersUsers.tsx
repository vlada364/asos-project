import React from 'react';
import styles from '../MyAccount/MyAccount.module.css';
import {useNavigate} from "react-router";



const OrdersUsers= () => {
    const navigate=useNavigate()
    return (
        <div className={styles.ordersUsers}>
        <div className={styles.ordersHeader}>
            <div className={styles.ordersImg}>
                <img src='/img/downloadIMG.svg'/>
            </div>
            <div className={styles.textMyOrders}><span>MY ORDERS</span></div>
        </div>
        <div className={styles.ordersContainer}>
            <div className={styles.imgHanger}>
                <img src='/img/img3.svg'/>
            </div>
            <span style={{fontWeight:'600',fontSize:'18px'}}>YOU CURRENTLY HAVE NO ORDERS</span>
            <p style={{fontWeight:'300',fontSize:'14px'}}>Best get shopping ASOS pronto…</p>
            <button className={styles.btnStartShopping} onClick={()=>{
                navigate('/')
            }
            }>START SHOPPING</button>
        </div>
    </div>);
}

export default OrdersUsers;