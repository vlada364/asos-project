import React from 'react';
import style from "../MainPage.module.css";

type Props = {link:string};

const BigImageShopNow: React.FC<Props> = ({link}) => {
    return <div className={style.imgWrapContainer}>
        <div className={style.imgWrap}>
            <img src={link}/>
        </div>
        <button className={style.btnShopNow}>SHOP NOW</button>
    </div>;
}

export default BigImageShopNow;