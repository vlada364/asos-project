import React, {useState} from 'react';
import styles from "../LoginPage/LoginPage.module.css";
import userMenuStyles from './UserMenu.module.css';
import {GrClose} from 'react-icons/gr';
import {RxDividerVertical} from 'react-icons/rx';
import {Link} from 'react-router-dom';
import {HiOutlineUser} from 'react-icons/hi';
import {CgBox} from 'react-icons/cg';
import {RiQuestionLine} from 'react-icons/ri';
import {MdOutlineSms} from 'react-icons/md';
import UserMenuItem from "./UserMenuItem";
/*

<UserMenuItem Icon={MdOutlineSms} title={"Manea"} linkTo={'/manea'}/>
 */

const UserMenu = ({tooltipRef, onMouseLeave, closeMenu}) => {
    // const [isCloseMenu, setCloseMenu] = useState(false)
    return (
        <div className={styles.tooltipContainer} ref={tooltipRef} onMouseLeave={onMouseLeave}>
            <div className={userMenuStyles.headerUserMenu}>
                <div className={userMenuStyles.linkRegistration}>
                    <Link to='/signin'>Sign In</Link>
                    <RxDividerVertical/>
                    <Link to='/joinin'>Join</Link>
                </div>
                <div className={userMenuStyles.closeUserMenu} onClick={closeMenu}>
                    <div><GrClose className={userMenuStyles.iconClose}/></div>
                </div>
            </div>
            <div className={userMenuStyles.userContact}>
               <UserMenuItem Icon={HiOutlineUser} title={'My Account'} linksTo={'/myaccount'}/>
                <UserMenuItem Icon={CgBox} title={'My Orders'} linksTo={'/myorders'}/>
                <UserMenuItem Icon={RiQuestionLine} title={'Returns Information'} linksTo={'/information'}/>
                <UserMenuItem Icon={MdOutlineSms} title={'Contact Preferences'} linksTo={'/contactus'}/>
            </div>
        </div>);
}

export default UserMenu;