import React from 'react';
import styles from './RegistrationForm.module.css'
import SignUpWith from "./SignUpWith";
import Form from './Form/Form'


const JoinIn = () => {
    return <main>
        <SignUpWith/>
        <div className={styles.registrationForm}>
            <h2>OR SIGN UP WITH EMAIL</h2>
           <Form/>
        </div>
    </main>;
}

export default JoinIn;
