import React from 'react';
import style from "../MainPage.module.css";

type Props = {};

const SocialMediaAndCardsIcons: React.FC<Props> = () => {
    return <div className={style.socialMediaBlock}>
        <div className={style.socialMediaIcons}>
            <div className={style.icon}><img src='img/iconFacebook.svg'/></div>
            <div className={style.icon}><img src='img/iconInstagram.svg'/></div>
            <div className={style.icon}><img src='img/iconSnapchat.svg'/></div>
        </div>
        <div className={style.creditCardsIcons}>
            <div className={style.icon}><img src='img/iconVisa.webp'/></div>
            <div className={style.icon}><img src='img/iconMasterCard.webp'/></div>
            <div className={style.icon}><img src='img/iconPayPal.webp'/></div>
            <div className={style.icon}><img src='img/iconAmericanExpress.webp'/></div>
            <div className={style.icon}><img src='img/iconVisaElectron.webp'/></div>
        </div>
    </div>;
}

export default SocialMediaAndCardsIcons;