import React from 'react';
import styles from "./SaleItem.module.css";


const TypeLongListImage = (props) => {
    return (<li id={props.id} key={props.key} className={styles.titleImage}>
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