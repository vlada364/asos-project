import React from 'react';
import AddressesItem from "./AddressesItem";
import styleAddresses from './ShowAddressesUser.module.css'
import {useSelector} from "react-redux";


const AddressesItems = ({loggedInSer, fullName}) => {

    return (
        <>
            <div><p style={{fontWeight: '300', fontSize: '13px',color:'black'}}>{fullName}</p></div>
            {loggedInSer.map((el) => {
                return <AddressesItem value={el} fullName={fullName}/>
            })}
        </>)
}

export default AddressesItems;