import React from 'react';
import FormTextInput from "../../../../Registration/FormTextInput/FormTextInput";
import {addInputsValueByCountry} from "./UserAddressBook";
import InputsInfoByCountry from "./InputsInfoByCountry";
import stylesForm from "../../../../Registration/RegistrationForm.module.css";


const ShowCountySelect = ({
                              inputsValueCode,
                              hasCountrySubRegions,
                              value,
                              valueSelect,
                              handleChangeInput,
                              tooltipsText,
                              objByCountryCode,
                              handleCountySelect
                          }) => {
    if (inputsValueCode === '') {
        return null;
    }

    return <> {(addInputsValueByCountry.map(elem => (
        elem.name === 'countyOptional' && hasCountrySubRegions ? (
            <>    <label className={stylesForm.nameLabel}>COUNTY:</label>
                <select style={{marginBottom: '20px',padding:'13px 13px'}} name='countyOptionalSelect' value={valueSelect} onChange={handleCountySelect}>
                    {objByCountryCode.subRegions.map(el => (
                        <InputsInfoByCountry label={el.name} code={el.code} value={el.code}
                                             tooltipText={tooltipsText[el.name]}/>))}</select></>) :
            <FormTextInput label={elem.label} value={value[elem.name]} name={elem.name}
                           handleChangeInput={handleChangeInput} tooltipText={tooltipsText[elem.name]}/>)))}</>;
}

export default ShowCountySelect;