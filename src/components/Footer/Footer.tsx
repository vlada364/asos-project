import React from 'react';
import style from './Footer.module.css'
import FooterColumnInformation from "./FooterColumnInformation/FooterColumnInformation";

type Props = {};

const helpInformationColumn:{label:string,url:string;}[]=[{label:'Help',url:'/customer-care'},{label:'Track order',url:'/orders'},{label:'Delivery & returns',url:'/delivery'},{label:'Sitemap',url:'sitemap'}]

const aboutAsosInformationColumn=[{label:'About Asos',url:'/about'},{label:'Careers at ASOS',url:'/asoscareers'},
    {label:'Corporate responsibility',url:'/fashion-with-integrity'},{label:`Investors' site`,url:'/asosplc'}]

const moreFromAsosInformationColumn=[{label:'Mobile and ASOS apps',url:'/our-app'},{label:'ASOS Marketplace',url:'/marketplace'},
    {label:'Gift vouchers',url:'/gift-vouchers'},{label:'Black Friday',url:'/black-friday-cyber-monday-deals'},
    {label:'ASOS x Thrift+',url:'/get-started-asos'}];

const shoppingFromColumn=[{label:`You're in`,url:""}];

const footer=[{title:'HELP & INFORMATION',columns:helpInformationColumn},{title:'ABOUT ASOS',columns: aboutAsosInformationColumn},
    {title:'MORE FROM ASOS',columns:moreFromAsosInformationColumn}

]

const Footer: React.FC<Props> = () => {
    return <footer className={style.footerContainer}>
        <div className={style.footer}>
            <div className={style.footerBlockRow}>
                {footer.map(el=>(<ul>{el.title}{el.columns.map(el=>(<FooterColumnInformation label={el.label} url={el.url}/>))}</ul>))}
                <ul>SHOPPING FROM:</ul>
            </div>
        </div>
    </footer>;
}

export default Footer;