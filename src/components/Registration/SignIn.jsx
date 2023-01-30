import React from 'react';
import styles from "./RegistrationForm.module.css";
import SignUpWith from "./SignUpWith";


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
           <SignUpWith/>
        </div>
    </div>);
}

export default SignIn;