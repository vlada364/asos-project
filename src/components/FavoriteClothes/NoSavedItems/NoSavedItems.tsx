import React from 'react';
import {TbHeartOff} from 'react-icons/tb';
import style from './NoSavedItems.module.css'


type Props = { textHead: string, text: string, textBtn: string };

const NoSavedItems: React.FC<Props> = ({textHead, text, textBtn}) => {
    return (<div className={style.noSavedContainer}>
        <TbHeartOff style={{fontSize: '22px'}}/>
        <span className={style.savedHeader}> {textHead}</span>
        <p className={style.savedDescription}>{text}</p>
        <button className={style.btnStartShopping}>{textBtn}</button>
    </div>);
}

export default NoSavedItems;