import React from 'react';
import {Link} from "react-router-dom";


const MenuLink = (props) => {
    return (<Link to={props.to}>
        <div className={'menu-link ' + (props.selected ? 'button-selected' : "")}>{props.title}</div>
    </Link>)
}

export default MenuLink;