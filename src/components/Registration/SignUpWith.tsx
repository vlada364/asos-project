 import React from 'react';
import styles from './RegistrationForm.module.css'
import registrationForm from "./RegistrationForm";
import {useLocation} from "react-router";

const SignUpWith = () => {
    const location = useLocation()
    const joinIn = location.pathname.includes('/joinin')
    return (<div>
        <h2 className={styles.headingRegistration}>{joinIn ? 'SIGN UP WITH...' : 'OR SIGN IN WITH...'}</h2>
        <div className={styles.buttonsContainer}>
            <div className={styles.buttons}>
                <div className={styles.buttonSize}><img src=".//img/img.png"/></div>
                <div>
                    <button id="google"><p>GOOGLE</p></button>
                </div>
            </div>

            <div className={styles.buttons}>
                <div className={styles.buttonSize}><img src="../img/img_1.png"/></div>
                <div>
                    <button id="apple"><p>APPLE</p></button>
                </div>
            </div>
            <div className={styles.buttons}>
                <div className={styles.buttonSize}><img src="../img/img_2.png"/></div>
                <div>
                    <button id="facebook "><p>FACEBOOK</p></button>
                </div>
            </div>
        </div>
        <div className={styles.registrationSubTitle}>
            <p>{joinIn ?`Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry,we'd never share any of your data or post anything on your behalf #notevil`: null}</p>
        </div>
    </div>);
}

export default SignUpWith;