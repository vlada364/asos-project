import React from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {RiAdminLine} from 'react-icons/ri'

import {setLoggedInUser} from "../../../common/redux/users/actions";
import {RootState} from "../../../index";

/*

<UserMenuItem Icon={MdOutlineSms} title={"Manea"} linkTo={'/manea'}/>
 */

const UserMenu = ({tooltipRef, onMouseLeave, closeMenu}) => {

    const loggedInSer = useSelector((state:RootState)=> state.users.loggedInUser);
    const isAdmin = loggedInSer?.email_address === 'admin@mail.ru'
    const dispatch = useDispatch();


    return (
        <div className={styles.tooltipContainer} ref={tooltipRef} onMouseLeave={onMouseLeave}>
            <div className={userMenuStyles.headerUserMenu}>
                <div className={userMenuStyles.linkRegistration}>
                    {loggedInSer ? `Hi ${loggedInSer.first_name}` : <Link to='/signin'>Sign In</Link>}
                    <RxDividerVertical/>
                    {loggedInSer ? <div onClick={() => {
                            dispatch(setLoggedInUser(null));
                            localStorage.removeItem('loggedUser')
                        }}>Sign out</div> :
                        <Link to='/joinin'>Join</Link>}
                </div>
                <div className={userMenuStyles.closeUserMenu} onClick={closeMenu}>
                    <div><GrClose className={userMenuStyles.iconClose}/></div>
                </div>
            </div>
            <div className={userMenuStyles.userContact}>
                <UserMenuItem Icon={HiOutlineUser} title={'My Account'}
                              linksTo={loggedInSer ? '/myaccount' : '/signin'}/>
                <UserMenuItem Icon={CgBox} title={'My Orders'} linksTo={loggedInSer ? '/myorders' : '/signin'}/>
                <UserMenuItem Icon={RiQuestionLine} title={'Returns Information'}
                              linksTo={loggedInSer ? '/information' : '/signin'}/>
                <UserMenuItem Icon={MdOutlineSms} title={'Contact Preferences'}
                              linksTo={loggedInSer ? '/contactus' : '/signin'}/>
                {isAdmin && (<UserMenuItem Icon={RiAdminLine} title={'Admin Panel'} linksTo={'/admin'}/>)}
            </div>
        </div>);
}

export default UserMenu;