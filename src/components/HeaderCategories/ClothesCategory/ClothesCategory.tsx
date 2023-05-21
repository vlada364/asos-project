import React from 'react';
import styles from './ClothesCategory.module.css'
import SaleItem from "../SaleItem/SaleItem";
import { ClothesCategoryTypes} from "../types/HeaderCategoriesTypes";



const ClothesCategory = ({isMenuOpen,closeMenu,categoryItems}:ClothesCategoryTypes) => {
    return (<div className={isMenuOpen?styles.opacityCategory:styles.tooltipCategory} onMouseLeave={closeMenu} data-testid="pop-up" id='pop-up'>
       <SaleItem categoryItems={categoryItems}/>
    </div>);

}

export default ClothesCategory;