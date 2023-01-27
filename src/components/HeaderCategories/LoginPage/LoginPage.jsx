import React, {useEffect, useRef, useState} from 'react';
import styles from './LoginPage.module.css';
import {HiOutlineUser} from 'react-icons/hi';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs'
import UserMenu from "../UserMenu/UserMenu";


const LoginPage = () => {
    const tooltipRef = useRef();
    const [onHover, setOnHover] = useState(false);
    const [isUserMenuOpened, setMenuOpened] = useState(false);
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            if (isUserMenuOpened) {
                open();
            } else {
                close();
            }
        }
    }, [isUserMenuOpened]);

    useEffect(() => {
        didMount.current = true;
    }, [])

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
        console.log('OPENINGGGGGG INSIDE')
    }

    const close = () => {
        console.log('CLOSING INSIDE!')
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
        setMenuOpened(true);
    }
    const onLoginIconOver = () => {
        setOnHover(true)
    }
    const onLoginIconLeave = (e) => {
        if (!tooltipRef.current.contains(e.relatedTarget)) {
            console.log('CLOSING 2')

            setMenuOpened(false);
        }
    }
    const onUserMenuLeave = function (e) {
        console.log(e, e.relatedTarget.id);

        if (e.relatedTarget.id !== 'user-icon') {
            console.log('CLOSING')
            setMenuOpened(false);
        }

    }

    return (
        <div className={styles.infoPersonContainer}>
            <div className={styles.loginIconBtn}
                 onMouseOver={onLoginIconOver}
                 onMouseEnter={onLoginIconEnter}
                 onMouseLeave={onLoginIconLeave} id={'user-icon'}>
                <HiOutlineUser className={styles.loginIcon}/>
            </div>
            <UserMenu tooltipRef={tooltipRef} onHover={onHover} onMouseLeave={onUserMenuLeave}
                      closeMenu={() => setMenuOpened(false)}/>
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