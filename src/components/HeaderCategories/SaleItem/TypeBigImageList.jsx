import React from 'react';
import styles from "./SaleItem.module.css";



const TypeBigImageList = (props) => {
    return (
        <li id={props.id} key={props.key}>
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