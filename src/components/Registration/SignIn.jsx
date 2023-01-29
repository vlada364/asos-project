import React from 'react';
import styles from "./RegistrationForm.module.css";


const SignIn = () => {
    return (<div className={styles.registrationForm}>
        <div className={styles.registrationFormTwo}>
        <form id="form-two" className={styles.form}>
            <label className={styles.nameLabel}> EMAIL ADDRESS:</label>
            <div id="tooltip"></div>
            <input id="last_name" className={styles.formInput} value=""/>
            <label className={styles.nameLabel}> PASSWORD:</label>
            <div id="tooltip_password"></div>
            <input id="password" className={styles.formInput} value=""/>
            <div className={styles.btnJoinAsos}>
                <button type="button" id="btn-asos"><p>SIGN IN</p></button>
            </div>
            <div className={styles.isForgotPassword}><p>Forgot password?</p></div>
        </form>
            <h2>OR SIGN IN WITH...</h2>
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
        </div>
    </div>);
}

export default SignIn;