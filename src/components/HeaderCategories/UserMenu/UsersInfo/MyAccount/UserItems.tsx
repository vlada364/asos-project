import React from 'react';
import styles from './MyAccount.module.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";


const UserItems = (props) => {
    const local = useLocation()

    const isItemLinkActive = local.pathname.endsWith(props.link)

    return (<Link to={props.link}>
        <div className={isItemLinkActive ? styles.iconNamesActive : styles.iconNames}>
            <div className={styles.icons}>{props.icon()}</div>
            <div className={styles.textAfterIcon}>{props.text}</div>
        </div>
    </Link>);
}

export default UserItems;