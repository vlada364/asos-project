import React from 'react';
import styles from './MyAccount.module.css'
import UserItem from "./UserItem";
import {HiOutlineUser} from "react-icons/hi";
import {AiOutlineInbox} from "react-icons/ai";
import {RiFileUserLine} from 'react-icons/ri';
import {MdOutlineLock} from 'react-icons/md';
import {FiHelpCircle} from 'react-icons/fi';
import {IoIosSquareOutline} from 'react-icons/io';
import {MdOutlinePayment} from 'react-icons/md';
import {BsHouse} from 'react-icons/bs';
import {HiOutlineUsers} from 'react-icons/hi';
import {BiExit} from 'react-icons/bi';
import {TbMessageDots} from 'react-icons/tb';
import {useSelector} from "react-redux";


export const infoForUser = [{icon: HiOutlineUser, name: 'Account overview', link:'/myaccount'}, {
    icon: AiOutlineInbox,
    name: 'My orders',link:'myorders'
}, {icon: RiFileUserLine, name: 'My details',link:'details'}, {icon: MdOutlineLock, name: 'Change password',link:'change-password'},
    {icon: BsHouse, name: 'Address book',link:'addresses'},{icon: MdOutlinePayment, name: 'Payment methods',link:'payment-methods'}, {
        icon: TbMessageDots,
        name: 'Contact preferences',
        link:'contact-preferences'
    }, {icon: HiOutlineUsers, name: 'Social accounts',link:'social-accounts'},
    {icon: FiHelpCircle, name: 'Need help?',link:'customer-help'}, {
        icon: IoIosSquareOutline,
        name: `Where's my order?`,link:'delivery'
    }, {icon: IoIosSquareOutline, name: 'How do I make a return?',link:'returns-refunds'}, {
        icon: IoIosSquareOutline,
        name: 'I need a new returns note',link:'how-can-i-get-a-new-returns-slip'
    },
    {icon: BiExit, name: 'Sign out',link:'sign-out'}]

const AccountUserInfo = () => {

    const userName = useSelector(state => state.users.loggedInUser.first_name);
    const userLastName = useSelector(state => state.users.loggedInUser.last_name);
    const firstLetterOfName=userName[0].toUpperCase()
    const firstLetterOfLastname=userLastName[0].toUpperCase()

    return <div className={styles.accountInformationContainer}>
        <div className={styles.greetingsUser}>
            <div className={styles.circle}>
                <span className={styles.textInCircle}>{`${firstLetterOfName} ${firstLetterOfLastname}`}</span>
            </div>
            <div className={styles.greetingsUserName}>
                <span style={{fontWeight:'300',display:'flex'}}>Hi,</span>
                <span style={{letterSpacing:'3px'}}>{`${userName} ${userLastName}`}</span></div>
        </div>
        <UserItem/>
    </div>;
}

export default AccountUserInfo;