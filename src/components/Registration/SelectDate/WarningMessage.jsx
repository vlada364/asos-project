import React from 'react';
import styles from '../RegistrationForm.module.css';
import {AiOutlineInfoCircle} from 'react-icons/ai'


const WarningMessage = ({text}) => {
    return <div className={styles.warningMessage}>
        <div><AiOutlineInfoCircle/></div>
        <div>{text}</div>
    </div>;
}

export default WarningMessage;