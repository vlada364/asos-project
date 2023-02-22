import React, {useEffect} from 'react';
import styles from "../MyAccount/MyAccount.module.css";
import stylesForm from "../../../../Registration/RegistrationForm.module.css";
import {addAddressBook} from "../../../../Registration/Form/Form";
import FormTextInput from "../../../../Registration/FormTextInput/FormTextInput";
import useFormToolsHelper from "../../../../../common/hooks/useFormToolsHelper/useFormToolsHelper";
import {useSelector} from "react-redux";
import {getTextAndTooltipVisibility} from "../../../../Registration/SelectDate/utils/utils";
import {countries} from "../../constants/countries";
import InputsInfoByCountry from "./InputsInfoByCountry";
import {is} from "date-fns/locale";


export const addInputsValueByCountry=[{label:'ADDRESS:',name:'address'},{label:'ADDRESS TWO:',name:'optional'},{label:'CITY:',name:'city'},
    {label:'COUNTY:',name:'optional'},{label:'POSTCODE:',name:'postCode'}]

export const addressFinder=[{label:'ADDRESS FINDER:',name:'address_finder'}]

const UserAddressBook = () => {

    const loggedInSer = useSelector(state => state.users.loggedInUser);
    const {
        changeInputValueByName,
        inputsValue,
        tooltipsText,
        changeFieldTooltip

    } = useFormToolsHelper({
        first_name: loggedInSer.first_name,
        last_name: loggedInSer.last_name, mobile: '',
        countryCode: "",address:'',optional:'',city:'',county_optional:'',postCode:'',stateOfCountryCode:''
    }, {first_name: '', last_name: '', countryCode: '',address:'',city:'',postCode:''});

    function handleChangeInput({target: {name, value}}) {

        changeInputValueByName(name, value);
        console.log(inputsValue);
        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }

    function handleCountrySelect({target: {name, value}}) {
        changeInputValueByName(name, value);

    }

   function handleSubmit(e){
       e.preventDefault();
       const formValues = Object.fromEntries([...(new FormData(e.target))]);
       console.log(formValues)
    }
    const objByCountryCode = countries.find(country => country.code === inputsValue.countryCode);
    const hasCountrySubRegions = objByCountryCode?.hasSubregions
    const codeOfCountry = inputsValue.countryCode.toLowerCase();


    return (
        <div className={styles.userDetailsContainer}>
            <div className={styles.userDetailsHeader}>
                <img src='/img/6img.svg'/>
                <h1>ADD NEW ADDRESS< /h1>
                <p>You currently have no saved addresses. Get started by adding one.</p>
            </div>
            <div className={stylesForm.registrationForm}>
                <div className={stylesForm.registrationFormTwo}>
                    <form id='form-address-book' className={stylesForm.form} onSubmit={handleSubmit}>
                        {addAddressBook.map(el => (
                            <FormTextInput name={el.name} label={el.label} value={inputsValue[el.name]}
                                           tooltipText={tooltipsText[el.name]} type={el.type}
                                           handleChangeInput={handleChangeInput}
                            />))}

                        <label className={stylesForm.nameLabel}>COUNTRY:</label>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                           <div>{inputsValue.countryCode === ''?<img src='/img/countryIcon.svg' style={{width:'50px'}}/>:<img src={`https://assets.asosservices.com/storesa/images/flags/${codeOfCountry}.png`} style={{width:'50px'}}/>}</div>
                            <div><select name='countryCode' value={inputsValue.countryCode} onChange={handleCountrySelect} style={{padding:'15px 21px'}}>
                                <option value={''} disabled={inputsValue.countryCode !== ''}>Please select:</option>
                                {countries.map(el => (
                                    <InputsInfoByCountry key={el.id} value={el.code} label={el.name}
                                    />))}
                            </select>
                            </div>
                        </div>
                        {hasCountrySubRegions?
                            (<select style={{marginBottom:'20px'}} value={inputsValue.stateOfCountryCode}>
                            {objByCountryCode.subRegions.map(el=>(<InputsInfoByCountry label={el.name} code={el.code} value={el.code}/>))}</select>)
                            :addInputsValueByCountry.map(el=>(<FormTextInput label={el.label} value={inputsValue[el.name]} name={el.name}/>))
                        }
                        </form>
                    <button className={styles.btnStartShopping} form='form-address-book'
                            type='submit'>SAVE CHANGES
                    </button>
                </div>
            </div>
        </div>);
}

export default UserAddressBook;