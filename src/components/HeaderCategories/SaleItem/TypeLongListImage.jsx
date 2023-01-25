import React from 'react';
import styles from "./SaleItem.module.css";
import {useNavigate} from "react-router";


const TypeLongListImage = (props) => {
    const location=useNavigate();
    return (<li id={props.id} key={props.key} className={styles.titleImage} onClick={()=>location('/shop'+props.path,{state:props})}>
        <div className={styles.listInline}>
            <div className={"highlight-image"}><img
                src={props.image}/></div>
            <div className={styles.lineSpan}><span>{props.name}</span>
                <div className={styles.line}></div>
            </div>

        </div>
    </li>);
}

export default TypeLongListImage;