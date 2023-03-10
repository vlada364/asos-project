import React from 'react';
import {BiSearch} from "react-icons/bi";
import LoginPage from "./LoginPage/LoginPage";
import {useState} from "react";
import MenuLink from "./MenuLink";
import {useLocation} from "react-router";
import CategoryHeader from "./CategoryHeader/CategoryHeader";
import {categoryItemsMap, menuItems, title} from "../../data/MenuItems";
import ClothesCategory from "./ClothesCategory/ClothesCategory";
import styles from "./LoginPage/LoginPage.module.css";


const Header = () => {

    const {pathname} = useLocation();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [idCategories, setIdCategories] = useState(0)

    const [idClothesCategory, setClothesCategory] = useState(0)

    function changeId(id) {
        setIdCategories(id)
    }

    function changeIdClothes(id) {
        setClothesCategory(id)
    }

    function openMenu(id) {
        console.log(id)
        setMenuOpen(true)
    }

    function closeMenu() {
        setMenuOpen(false)
    }

    return (<div className='header'>
        <div className={'black-back'}>
            <div className='block-info'>
                <img src='/img/Asos-logo.png'/>
                <div className='gender-category'>
                    <MenuLink selected={pathname.includes('/woman')} title={'Women'} to={'/woman'}/>
                    <MenuLink selected={pathname.includes('/man')} title={'Men'} to={'/man'}/>
                </div>
                <div className='input-container'>
                    <input className='input-header' placeholder='Search for items and brands'/>
                    <BiSearch className='icon-search'/>
                </div>
                <LoginPage/>
            </div>
        </div>
        <CategoryHeader clothCategory={menuItems} idClothes={idClothesCategory} changeId={changeId}
                        idCategories={idCategories} openMenu={openMenu} closeMenu={closeMenu} isMenuOpen={isMenuOpen}/>
        {(isMenuOpen) && (<ClothesCategory isMenuOpen={isMenuOpen} closeMenu={closeMenu}
                                           categoryItems={categoryItemsMap[idCategories]} id={idClothesCategory}/>)}
        <div className={'window-wrapper' + (isMenuOpen ? '' : '-block')}></div>
    </div>);
}

export default Header;