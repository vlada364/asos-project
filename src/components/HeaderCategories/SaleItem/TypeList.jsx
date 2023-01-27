import React from 'react';
import styles  from "./SaleItem.module.css";


const TypeList = (props) => {
    return (<li className={styles.listLi} id={props.id} key={props.key}>{props.name}</li>);
}

export default TypeList;