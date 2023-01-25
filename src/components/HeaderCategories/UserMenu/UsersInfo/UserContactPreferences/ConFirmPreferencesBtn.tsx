import React from 'react';
import styles from '../MyAccount/MyAccount.module.css'
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

type Props = {disabled:boolean,submitChanges:()=>void};

const ConFirmPreferencesBtn: React.FC<Props> = ({disabled,submitChanges}) => {
    return <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{padding:'30px'}}><p style={{fontWeight:'300',fontSize:'14px'}}>Changes to your preferences may take up to seven days to take effect.</p></div>
        <div style={{display:'flex',justifyContent:'center'}}><button className={styles.btnStartShopping} disabled={disabled} onClick={submitChanges}>CONFIRM PREFERENCES</button></div>
    </div>;
}

export default ConFirmPreferencesBtn;