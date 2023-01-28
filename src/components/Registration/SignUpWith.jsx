import React from 'react';
import styles from './RegistrationForm.module.css'
import registrationForm from "./RegistrationForm";

const SignUpWith = () => {
    return (<div>
        <h2>SIGN UP WITH...</h2>
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
                    <button id="apple"><p >APPLE</p></button>
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
            <p >Signing up with social is super quick. No extra passwords to remember - no
                brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil</p>
        </div>
    </div>);
}

export default SignUpWith;