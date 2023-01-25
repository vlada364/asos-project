import React from 'react';
import userMenuStyles from "./UserMenu.module.css";
import {HiOutlineUser} from "react-icons/hi";
import {Link} from 'react-router-dom'
import linkStyles from '../../../common/styles/link/link.module.css'


const UserMenuItem = ({Icon, title, linksTo}) => {
    return (
        <Link className={linkStyles.link} to={linksTo}>
            <div className={userMenuStyles.myAccountLink}>
                <div className={userMenuStyles.iconContainer}>
                    <Icon className={userMenuStyles.accountIcon}/>
                </div>
                <div>
                    <p>{title}</p>
                </div>
            </div>
        </Link>);
}

export default UserMenuItem;