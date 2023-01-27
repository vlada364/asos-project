import React from "react";
import styles from "./SaleItem.module.css";

const TypeBigImageColumn=(props)=>{
    return (
        <li id={props.id} key={props.id} className={styles.imageBig}>
            <div className={styles.bigColumnContainer}>
                <div><img
                    src={props.image}/></div>
                <div className={styles.bigImageTitle}><span>{props.name}</span></div>
            </div>
        </li>
    )
}

export default TypeBigImageColumn