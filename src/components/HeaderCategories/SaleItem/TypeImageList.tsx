import React from "react";
import styles from "./SaleItem.module.css";
import {useNavigate} from "react-router";

const TypeImageList=(props)=>{
    const location=useNavigate();
    return(
        <li id={props.id} key={props.id} className={styles.titleImage} onClick={()=>location('/shop/'+props.path,{state:props})}>
            <div><img
                src={props.src}/></div>
            <div><span>{props.name}</span></div>
        </li>
    )
}

export default TypeImageList;