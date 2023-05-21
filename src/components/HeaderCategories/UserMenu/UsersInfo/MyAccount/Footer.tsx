import React from 'react';
import styles from './MyAccount.module.css'


const Footer = () => {
    return <div className={styles.footerBlock}>
        <div className={styles.footerInfoWithTwoBlock}>
            <div className={styles.footerWithThreeLinks}>
                <p>ASOS Homepage</p>
                <p>Team & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div><p>© ASOS 2023</p></div>
        </div>
    </div>;
}

export default Footer;