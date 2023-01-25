import React from 'react';
import styles from "../MyAccount.module.css";
import {TbCircleCheck} from "react-icons/tb";
import {CgClose} from "react-icons/cg";


const ChangesSaved = ({closeChangeSaved}) => {
    return (<div className={styles.tooltipChangesSaved}>
            <div className={styles.changesContainer}>
                <TbCircleCheck/>
                <p>Changes saved</p>
            </div>
            <div className={styles.closeIcon} onClick={()=>closeChangeSaved()}>
                <CgClose/>
            </div>
        </div>
    );
}

export default ChangesSaved;