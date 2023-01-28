import React from 'react';
import {useLocation, useRoutes} from "react-router";
import styles from './RegistrationForm.module.css';
import {Link} from 'react-router-dom'
import SignIn from "./SignIn";
import JoinIn from "./JoinIn";


const RegistrationForm = () => {
    const location = useLocation();
    const signIn=location.pathname.includes('/signin')

    return (<div className={styles.registrationContainer}>
        <Link to={'/'}>
            <div className={styles.linkAsos}>
                <img src={'../img/ASOS_(retailer)-Logo.wine.png'}/>
            </div>
        </Link>
        <div className={styles.formContainer}>
            <div className={styles.switch}>
                <div className={styles.chooseBetween} >
                    <div className={styles.blockForSwitch}>
                        <div className={styles.join}>Join</div>
                    </div>
                    <div className={styles.borderBetween}></div>
                    <div className={styles.blockForSwitch}>
                        <div className={styles.signIn}>Sign In</div>
                    </div>
                </div>
                {signIn ? <SignIn/> : <JoinIn/>}

            </div>
        </div>
    </div>)
        ;
}

export default RegistrationForm;