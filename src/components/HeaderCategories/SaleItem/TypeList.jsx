import React from 'react';
import styles from "./SaleItem.module.css";
import {useLocation, useNavigate} from "react-router";


const TypeList = (props) => {
    const location = useNavigate();
    const {pathname} = useLocation();
    const gender = pathname.includes('woman') ? "woman" : "man";
    return (<li className={styles.listLi} id={props.id} key={props.key}
                onClick={() => location(gender + "/shop/" + props.path, {state: props})}>{props.name}</li>);
}

export default TypeList;