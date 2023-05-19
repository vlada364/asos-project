import React from "react";
import styles from './CategoryHeader.module.css'
import clsx from "clsx";
import {useNavigate} from "react-router";
import {CategoryHeaderType} from "../types/HeaderCategoriesTypes";

const CategoryHeader = ({isMenuOpen, idCategories, clothCategory, closeMenu, changeId, openMenu}:CategoryHeaderType) => {
    const location = useNavigate();
    console.log('kek', location)

    return (<div className={styles.headerCategory}>
        <div className={styles.categoryListContainer}>
            <ul className={styles.categoryList}>
                {clothCategory.map(el => {
                    const isWhite = isMenuOpen && idCategories === el.id
                    const isRed = (el.id === 1 || el.id === 13) && !isWhite;

                    return (
                        <li onMouseOver={() => {
                            openMenu(el.id)
                            changeId(el.id)

                        }} onMouseLeave={(e) => {
                            const popup = document.getElementById('pop-up');
                            if (!popup.contains(e.relatedTarget as Node)) {
                                closeMenu();
                            }

                        }} onClick={() => {
                            location("../"+el.path);
                        }} className={clsx({
                            [styles.liRed]: isRed,
                            [styles.liWhite]: isWhite
                        })}>{el.name}</li>);
                })}
            </ul>
        </div>
    </div>);
}

export default CategoryHeader;