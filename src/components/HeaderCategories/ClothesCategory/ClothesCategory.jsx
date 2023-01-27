import React from 'react';
import styles from './ClothesCategory.module.css'
import SaleItem from "../SaleItem/SaleItem";
import NewInItems from "../../NewInItems/NewInItems";


const ClothesCategory = (props) => {
    return (<div className={props.isMenuOpen?styles.opacityCategory:styles.tooltipCategory} onMouseLeave={props.closeMenu} id='pop-up'>
       <SaleItem categoryItems={props.categoryItems}/>
        {/*<NewInItems categoryItems={props.categoryItems}/>*/}
    </div>);
}

export default ClothesCategory;