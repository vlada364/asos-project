import React from 'react';
import styles from './MyAccount.module.css'


const BigPoster= () => {
    return <div  className={styles.bigPoster}>
        <div className={styles.welcomeText}><h1>
            <span>WELCOME TO</span>
            <span>YOUR ACCOUNT</span>
        </h1></div>
    </div>;
}

export default BigPoster;