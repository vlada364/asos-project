import React from 'react';
import {useLocation} from "react-router";
import styles from './RegistrationForm.module.css';
import {Link} from 'react-router-dom'
import SignIn from "./SignIn";
import JoinIn from "./JoinIn";


const RegistrationForm = () => {
    const location = useLocation();
    const signIn = location.pathname.includes('/signin')

    return (<div className={styles.registrationContainer}>
        <Link to={'/'}>
            <div className={styles.linkAsos}>
                <img src={'../img/ASOS_(retailer)-Logo.wine.png'}/>
            </div>
        </Link>
        <div className={styles.formContainer}>
            <div className={styles.switch}>
                <div className={styles.chooseBetween}>
                    <Link to={'/joinin'}>
                        <div className={styles.blockForSwitch} >
                            <div className={styles.join}>Join</div>
                        </div>
                    </Link>
                    <div className={styles.borderBetween}></div>
                    <Link to={'/signin'}>
                        <div className={styles.blockForSwitch}>
                            <div className={styles.signIn}>Sign In</div>
                        </div>
                    </Link>
                </div>
                {signIn ? <SignIn/> : <JoinIn/>}

            </div>
        </div>
        <div className={styles.footerInformation}>
            <div className={styles.footerPrivacyPolicy}>Privacy Policy </div>
            <div>Terms and Conditions</div>
        </div>
    </div>)
        ;
}

export default RegistrationForm;