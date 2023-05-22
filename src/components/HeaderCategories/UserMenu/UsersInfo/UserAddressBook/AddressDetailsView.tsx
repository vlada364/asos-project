import React from 'react';
import stylesAddresses from "../ShowAddressesUser/ShowAddressesUser.module.css";
import AddressesItems from "../ShowAddressesUser/AddressesItems";
import EditButton from "../ShowAddressesUser/EditButton";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {AiOutlineWarning} from 'react-icons/ai'
import WarningMessage from "../../../../Registration/SelectDate/WarningMessage";
import WarningHaveNotAddressInfo from "./WarningHaveNotAddressInfo";
import {RootState} from "../../../../../index";

const AddressDetailsView = () => {

    const loggedInSer = useSelector((state:RootState) => state.users.loggedInUser);
    const fullName = `${loggedInSer.first_name} ${loggedInSer.last_name}`
    const loggedInSerArray = [loggedInSer.address, loggedInSer.addressTwoOptional, loggedInSer.city, loggedInSer.countryCode, loggedInSer.postCode, loggedInSer.mobile]

    //

    return <>
        <div className={stylesAddresses.addressesInfoBlock}>
            <AddressesItems loggedInSer={loggedInSerArray} fullName={fullName}/>
            <div>{loggedInSer.countryCode ? null : <WarningHaveNotAddressInfo/>}</div>
        </div>
        <Link to={'add'}><EditButton/></Link>
    </>;

}

export default AddressDetailsView;