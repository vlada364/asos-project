import React from 'react';
import styles from './ContactPreferences.module.css'

type CheckBoxType = { img: string, label: string, name: string, text: string, value: boolean; onClickCheckBox: (e: { name: string; value: boolean; }) => void; };

const TypeCheckbox: React.FC<CheckBoxType> = ({img, label, name, text, value, onClickCheckBox: onClick}) => {

    function onClickCheckBox() {
        onClick({value: !value, name});
    }

    return <div className={styles.checkBoxContainer}>
        <div><img src={img}/></div>
        <div className={styles.preferencesName} style={{padding: '0 0 0 18px'}}>
            <div style={{padding: '26px 26px 26px 0',width:'350px'}}>
                <h1 className={styles.nameOfType}>{label}</h1>
                <p className={styles.textBelowOfType}>{text}</p>
            </div>
        </div>
        <div className={styles.squareContainer}>
        <div className={styles.square} onClick={onClickCheckBox}>{value ?
            <img src='/img/icons8-галочка.svg'/> : null}</div>
        </div>
    </div>;
}

export default TypeCheckbox;