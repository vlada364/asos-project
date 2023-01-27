import React from 'react';
import styles from "../LoginPage/LoginPage.module.css";
import userMenuStyles from './UserMenu.module.css';
import {GrClose} from 'react-icons/gr';
import {RxDividerVertical} from 'react-icons/rx'


const UserMenu = ({tooltipRef, onHover, onMouseLeave}) => {

    return (
        <div className={styles.tooltipContainer} ref={tooltipRef} onMouseLeave={onMouseLeave}>
        {/*<div className={styles.tooltip}>*/}
            <div className={userMenuStyles.headerUserMenu}>
                <div className={userMenuStyles.linkRegistration}>
                    <a href='/signin'>Sign In</a>
                    <RxDividerVertical/>
                    {/*<div className={userMenuStyles.borderBetween}></div>*/}
                    <a href='/joinin'>Join</a>
                </div>
                <div><GrClose/></div>
            </div>
        {/*</div>*/}
    </div>);
}

export default UserMenu;