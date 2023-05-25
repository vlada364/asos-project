import React from "react";
import styles from "./SaleItem.module.css";

const ItemWrapper = ({children, title}) => {
    return (
        <div className={styles.titleSale}>
            <div className={styles.titleList}><span>{title}</span></div>
            {children}
        </div>
    )
}

export default ItemWrapper;