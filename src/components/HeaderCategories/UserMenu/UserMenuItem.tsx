import React from 'react';
import userMenuStyles from "./UserMenu.module.css";
import {HiOutlineUser} from "react-icons/hi";
import {Link} from 'react-router-dom'
import linkStyles from '../../../common/styles/link/link.module.css'
import {TitleAndLinksTo} from "./UsersInfo/MyAccount/types/AccountType";
import {IconType} from "react-icons";

type UserMenuItemProps = {
    Icon: IconType;
    title: string;
    linksTo: string;
};
const UserMenuItem = ({Icon, title, linksTo}:UserMenuItemProps) => {
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