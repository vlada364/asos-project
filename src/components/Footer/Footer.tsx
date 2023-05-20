import React from 'react';
import style from './Footer.module.css'
import FooterColumnInformation from "./FooterColumnInformation/FooterColumnInformation";
import {footer} from "./utils/footerInfoContants";

type Props = {};


const Footer: React.FC<Props> = () => {
    return <footer className={style.footerContainer}>
        <div className={style.footer}>
            <div data-id={'lists'} className={style.footerBlockRow}>
                {footer.map(el=>(<ul>{el.title}{el.columns.map(el=>(<FooterColumnInformation label={el.label} url={el.url}/>))}</ul>))}
                <ul>SHOPPING FROM:</ul>
            </div>
        </div>
    </footer>;
}

export default Footer;