import React from "react";
import styles from "./SaleItem.module.css";
import {useNavigate} from "react-router";

const TypeBigImageColumn=(props)=>{
    const location=useNavigate();
    return (
        <li id={props.id} key={props.id} className={styles.imageBig} onClick={()=>location('/shop/'+props.path,{state:props})}>
            <div className={styles.bigColumnContainer}>
                <div><img
                    src={props.image}/></div>
                <div className={styles.bigImageTitle}><span>{props.name}</span></div>
            </div>
        </li>
    )
}

export default TypeBigImageColumn