import React, {useRef} from 'react';
import {allUnchecked, ContactTypesObj} from "./UserContactPreferences";
import TypeCheckbox from "./TypeCheckbox";




type Props={contentTypesArray:ContactTypesObj[]; onClickCheckBox:(e:{name:string;value:boolean;})=>void,inputsValue:typeof allUnchecked}

const ContactTypes: React.FC<Props> = ({contentTypesArray,onClickCheckBox,inputsValue}) => {
    return <div>{contentTypesArray.map(el=><TypeCheckbox{...el} onClickCheckBox={onClickCheckBox} value={inputsValue[el.name]} />)}</div>;
}

export default ContactTypes;