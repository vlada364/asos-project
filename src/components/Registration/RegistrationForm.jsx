import React from 'react';
import {useLocation, useRoutes} from "react-router";
import styles from './RegistrationForm.module.css';
import {Link} from 'react-router-dom'


const RegistrationForm = () => {
    const location = useLocation();
    console.log('Test', location);
    return <div className={styles.registrationContainer}>
+        <div className={styles.formContainer}></div>
    </div>;
}

export default RegistrationForm;