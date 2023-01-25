import React from 'react';
import styles from './ClothesCategory.module.css'
import SaleItem from "../SaleItem/SaleItem";



const ClothesCategory = (props) => {
    return (<div className={props.isMenuOpen?styles.opacityCategory:styles.tooltipCategory} onMouseLeave={props.closeMenu} id='pop-up'>
       <SaleItem categoryItems={props.categoryItems}/>
    </div>);
}

export default ClothesCategory;