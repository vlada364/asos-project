import React from 'react';
import {AiOutlineWarning} from "react-icons/ai";
import stylesAddresses from '../ShowAddressesUser/ShowAddressesUser.module.css'



const WarningHaveNotAddressInfo = () => {
    return <div className={stylesAddresses.warningMessage}>
        <AiOutlineWarning/>
        <p>You currently have no saved addresses. Get started by adding one.</p>
    </div>;
}

export default WarningHaveNotAddressInfo;