import React, {useEffect, useState} from 'react';
import styles from "../MyAccount/MyAccount.module.css";
import stylesForm from "../../../../Registration/RegistrationForm.module.css";
import {addAddressBook} from "../../../../Registration/Form/Form";
import FormTextInput from "../../../../Registration/FormTextInput/FormTextInput";
import useFormToolsHelper from "../../../../../common/hooks/useFormToolsHelper/useFormToolsHelper";
import {useDispatch, useSelector} from "react-redux";
import {
    compareInitialAndCurrentValueForm,
    countErrorsAndSetTooltips,
    getTextAndTooltipVisibility
} from "../../../../Registration/SelectDate/utils/utils";
import {countries} from "../../constants/countries";

import {phone} from 'phone';

import ChangesSaved from "../MyAccount/ChangesSaved/ChangesSaved";
import userStoreHelper from "../../../../Registration/SelectDate/utils/UserStoreHelper";
import {setLoggedInUser} from "../../../../../common/redux/users/actions";
import ShowCountySelect from "./ShowCountySelect";
import ListOfCountries from './ListOfCountries'
import UserAddressBookHeaderWithNoAddressInfo from "./UserAddressBookHeaderWithNoAddressInfo";
import ShowAddressesUser from "../ShowAddressesUser/ShowAddressesUser";


export const addInputsValueByCountry = [{label: 'ADDRESS:', name: 'address'}, {
    label: 'ADDRESS TWO:',
    name: 'addressTwoOptional'
}, {label: 'CITY:', name: 'city'},
    {label: 'COUNTY:', name: 'countyOptional'}, {label: 'POSTCODE:', name: 'postCode'}]

export const addressFinder = [{label: 'ADDRESS FINDER:', name: 'addressFinder'}]

const UserAddressBook = () => {

    const loggedInSer = useSelector(state => state.users.loggedInUser);
    const dispatch = useDispatch()

    const initialValues = {
        first_name: loggedInSer.first_name,
        last_name: loggedInSer.last_name,
        mobile: loggedInSer.mobile || "",
        countryCode: loggedInSer.countryCode || '',
        address: loggedInSer.address || '',
        addressTwoOptional: loggedInSer.addressTwoOptional || '',
        city: loggedInSer.city || '',
        countyOptional: loggedInSer.countyOptional || '',
        countyOptionalSelect: loggedInSer.countyOptionalSelect || '',
        postCode: loggedInSer.postCode || '',


    };
    const {
        changeInputValueByName,
        inputsValue,
        tooltipsText,
        changeFieldTooltip,
        isDisabled,
        setDisabled
    } = useFormToolsHelper(initialValues, {
        first_name: '', last_name: '', countryCode: '', address: '', city: '', postCode: '', addressFinder: ''
    });

    const [isChangesSaved, setChangesSaved] = useState(false);

    function closeChangeSaved() {
        setChangesSaved(false)
    }

    function handleChangeInput({target: {name, value}}) {

        changeInputValueByName(name, value);
        console.log(inputsValue);
        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }

    function handleCountrySelect({target: {name, value}}) {
        changeInputValueByName(name, value);

    }
   function handleCountySelect({target:{name,value}}){
        changeInputValueByName(name,value)
   }
    useEffect(() => {
        if (!compareInitialAndCurrentValueForm(initialValues, inputsValue)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }, [inputsValue]);

    useEffect(()=>{

            changeInputValueByName('countyOptionalSelect','')

    },[inputsValue.countryCode])
    function handleSubmit(e) {
        e.preventDefault();
        const formValues = Object.fromEntries([...(new FormData(e.target))]);
        console.log('VALUEEEE',formValues)
        let errorsCount = countErrorsAndSetTooltips(formValues, changeFieldTooltip);
        if (!isPhoneNumberValid.isValid) {
            errorsCount += 1

        }
        if (errorsCount === 0) {
            const newUser = {...loggedInSer, ...inputsValue};
            userStoreHelper.addUser(newUser, () => {
                dispatch(setLoggedInUser(newUser));

            }, () => {

            }, 'put')
        }
        console.log(errorsCount, 'error')
    }

    const objByCountryCode = countries.find(country => country.code === inputsValue.countryCode);
    const hasCountrySubRegions = objByCountryCode?.hasSubregions
    const codeOfCountry = inputsValue.countryCode.toLowerCase();
    const isPhoneNumberValid = phone(inputsValue.mobile, {country: inputsValue.countryCode})


    return (

        <div className={styles.userDetailsContainer}>
            <div className={stylesForm.registrationForm}>
                <div className={stylesForm.registrationFormTwo}>
                    <form id='form-address-book' className={stylesForm.form} onSubmit={handleSubmit}>
                        {addAddressBook.map(el => (
                                <FormTextInput name={el.name} label={el.label} value={inputsValue[el.name]}
                                               tooltipText={tooltipsText[el.name]} type={el.type}
                                               handleChangeInput={handleChangeInput}
                                />))}

                        <label className={stylesForm.nameLabel}>COUNTRY:</label>
                        <ListOfCountries inputsCodeValue={inputsValue.countryCode} codeOfCountry={codeOfCountry} handleCountrySelect={handleCountrySelect}/>
                        <ShowCountySelect inputsValueCode={inputsValue.countryCode} value={inputsValue} valueSelect={inputsValue.countyOptionalSelect}
                                          hasCountrySubRegions={hasCountrySubRegions} handleChangeInput={handleChangeInput} handleCountySelect={handleCountySelect}
                                          tooltipsText={tooltipsText} objByCountryCode={objByCountryCode}
                        />
                    </form>
                    <button className={styles.btnStartShopping} form='form-address-book' disabled={isDisabled}
                            type='submit'>SAVE CHANGES
                    </button>
                </div>
            </div>
            {isChangesSaved && <ChangesSaved closeChangeSaved={closeChangeSaved}/>}
        </div>);
}

export default UserAddressBook;