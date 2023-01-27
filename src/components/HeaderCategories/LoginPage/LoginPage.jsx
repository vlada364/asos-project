import React, {useRef, useState} from 'react';
import styles from './LoginPage.module.css';
import {HiOutlineUser} from 'react-icons/hi';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs'
import UserMenu from "../UserMenu/UserMenu";


const LoginPage = () => {
    const tooltipRef = useRef();
    const [onHover, setOnHover] = useState(false);

    const open = () => {
        // tooltipRef.current.style.display='block';
        tooltipRef.current.animate([
            // keyframes
            {transform: 'translateY(-300px)'},
            {transform: 'translateY(300px)'}
        ], {
            // timing options
            duration: 400,
            direction: "normal",
            fill: "forwards"
        });
    }

    const close = () => {
        tooltipRef.current.animate([
            // keyframes
            {transform: 'translateY(300px)'},
            {transform: 'translateY(-300px)'}
        ], {
            // timing options
            duration: 400,
            direction: "normal",
            fill: "forwards"
        });
        // setTimeout(()=>tooltipRef.current.style.display='none',400);

    }
    const onLoginIconEnter = () => {
        open();
    }
    const onLoginIconOver = () => {
        setOnHover(true)
    }
    const onLoginIconLeave = (e) => {
        if (!tooltipRef.current.contains(e.relatedTarget)) {
            close();
        }
    }
    const onUserMenuLeave = () => {
        close()
    }

    return (
        <div className={styles.infoPersonContainer}>
            <div className={styles.loginIconBtn}
                 onMouseOver={onLoginIconOver}
                 onMouseEnter={onLoginIconEnter}
                 onMouseLeave={onLoginIconLeave}>
                <HiOutlineUser className={styles.loginIcon}/>
            </div>
            <UserMenu tooltipRef={tooltipRef} onHover={onHover} onMouseLeave={onUserMenuLeave}/>
            <div className={styles.loginIconBtn}>
                <AiOutlineHeart className={styles.favoriteIcon}/>
            </div>
            <div className={styles.loginIconBtn}>
                <BsBag className={styles.cartIcon}/>
            </div>
        </div>
    );
}

export default LoginPage;