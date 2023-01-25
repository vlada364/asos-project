import React from 'react';
import stylesForm from "../../../../Registration/RegistrationForm.module.css";
import stylesPref from './ContactPreferences.module.css'

type PropsContentTypes = { textOne: string; textTwo: string, textBtn: string;onClickBtn:()=>void};

const ContentTypesSelectWithButton: React.FC<PropsContentTypes> = ({textOne, textBtn, textTwo,onClickBtn}) => {
    return <div style={{display:'flex',alignItems:'center'}}>
        <div>
            <span>{textOne}</span>
            <p style={{fontWeight:'300',fontSize:'14px'}}>{textTwo}</p>
        </div>
        <div>
            <button type="button" className={stylesForm.selectAllBtn+' '+stylesPref.btnSelect} onClick={onClickBtn}>{textBtn}</button>
        </div>
    </div>
}

export default ContentTypesSelectWithButton;