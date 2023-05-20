import React from 'react';
import {BiSearch} from "react-icons/bi";
import LoginPage from "./LoginPage/LoginPage";
import {useState} from "react";
import MenuLink from "./MenuLink";
import {useLocation} from "react-router";
import CategoryHeader from "./CategoryHeader/CategoryHeader";
import {categoryItemsMap} from "../../data/MenuItems";
import ClothesCategory from "./ClothesCategory/ClothesCategory";
import {menuItems} from "../../data/menuHeader/menuHeader";


const Header = () => {

    const {pathname} = useLocation();
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const [idCategories, setIdCategories] = useState<number>(0)


    function changeId(id: number) {
        setIdCategories(id)
    }


    function openMenu() {
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
        <div style={{position: 'relative', width: "100%", zIndex: -2, display: "flex", justifyContent: 'center'}}>
            <CategoryHeader clothCategory={menuItems} changeId={changeId}
                            idCategories={idCategories} openMenu={openMenu} closeMenu={closeMenu}
                            isMenuOpen={isMenuOpen}/>
            {(isMenuOpen) && (<ClothesCategory isMenuOpen={isMenuOpen} closeMenu={closeMenu}
                                               categoryItems={categoryItemsMap[idCategories]}/>)}
        </div>
        <div className={'window-wrapper' + (isMenuOpen ? '' : '-block')}></div>
    </div>);
}

export default Header;