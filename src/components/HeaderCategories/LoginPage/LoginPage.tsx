import React, {useEffect, useRef, useState} from 'react';
import styles from './LoginPage.module.css';
import {HiOutlineUser} from 'react-icons/hi';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsBag} from 'react-icons/bs'
import UserMenu from "../UserMenu/UserMenu";
import {useSelector} from "react-redux";
import {RiUserFill} from 'react-icons/ri'
import {useNavigate} from "react-router";
import {RootState} from "../../../index";


const LoginPage = () => {
    const tooltipRef = React.useRef<HTMLInputElement>(null);
    const [onHover, setOnHover] = useState<boolean>(false);
    const [isUserMenuOpened, setMenuOpened] = useState<boolean>(false);
    const didMount = useRef<boolean>(false);

    const loggedInSer = useSelector((state:RootState) => state.users.loggedInUser);
    const navigate=useNavigate();

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
            {transform: 'translateY(-372px)'},
            {transform: 'translateY(372px)'}
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

            {transform: 'translateY(372px)'},
            {transform: 'translateY(-372px)'}
        ], {

            duration: 400,
            direction: "normal",
            fill: "forwards"
        });


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
                {loggedInSer?<RiUserFill className={styles.loginIcon}/>:<HiOutlineUser className={styles.loginIcon}/>}
            </div>
            <UserMenu tooltipRef={tooltipRef} onMouseLeave={onUserMenuLeave}
                      closeMenu={() => setMenuOpened(false)}/>
            <div className={styles.loginIconBtn}>
                <AiOutlineHeart className={styles.favoriteIcon} onClick={()=>navigate('/favorite-clothes')}/>
            </div>
            <div className={styles.loginIconBtn}>
                <BsBag className={styles.cartIcon}/>
            </div>
        </div>
    );
}

export default LoginPage;