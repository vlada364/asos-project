import React from 'react';
import stylesAddresses from "./ShowAddressesUser.module.css";



const EditButton= () => {
    return <div className={stylesAddresses.editContainer}>
        <div className={stylesAddresses.editPencil}>
            <p>EDIT</p>
            <img src='../../img/pencil.svg'/>
        </div>
    </div>;
}

export default EditButton;