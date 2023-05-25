import React from 'react';
import styles from "./SaleItem.module.css";
import {useLocation, useNavigate} from "react-router";



const TypeBigImageList = (props) => {
    const location=useNavigate();

    return (
        <li id={props.id} key={props.key} onClick={()=>location('/shop/'+props.path,{state:props})}>
            <div className={styles.listBigImage}>
                <div className={styles.bigImageContainer}>
                    <img src={props.image}/>
                </div>
                <div className={styles.bigImageSpan}><span>{props.name}</span></div>
                <div className={styles.imageGradient}></div>
            </div>
        </li>
    );
}

export default TypeBigImageList;