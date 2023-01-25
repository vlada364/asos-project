import React from 'react';
import styles from './LoginPage.module.css';
import {HiOutlineUser} from 'react-icons/hi';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs'



const LoginPage = () => {
    return (
        <div >
              <HiOutlineUser className={styles.loginIcon}/>
             <AiOutlineHeart className={styles.favoriteIcon}/>
            <BsBag className={styles.cartIcon}/>
            <div className={styles.tooltipContainer}>
                <div className={styles.tooltip}></div>
            </div>
        </div>);
}

export default LoginPage;