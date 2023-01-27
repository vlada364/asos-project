import React from "react";
import styles from "./SaleItem.module.css";

const TypeImageList=(props)=>{
    return(
        <li id={props.id} key={props.id} className={styles.titleImage}>
            <div><img
                src={props.src}/></div>
            <div><span>{props.name}</span></div>
        </li>
    )
}

export default TypeImageList;