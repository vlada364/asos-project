import React, {useState} from 'react';
import styles from "../RegistrationForm.module.css";
import FormTextInput from "../FormTextInput/FormTextInput";
import SelectDate from "../SelectDate/SelectDate";
import PreferenceInputBlock from "../PreferenceInputBlock/PreferenceInputBlock";
import GenderCategoryInput from "../PreferenceInputBlock/GenderCategoryInput";
import {countErrorsAndSetTooltips, getTextAndTooltipVisibility, isDateValidHelper} from "../SelectDate/utils/utils";
import UserStoreHelper from "../SelectDate/utils/UserStoreHelper";
import {useDispatch, useSelector} from "react-redux";
import {setLoggedInUser} from "../../../common/redux/users/actions";
import useHandleBirthday from "../../../common/hooks/useHandleBirthday/useHandleBirthday";
import {checkboxList} from "../PreferenceInputBlock/PreferencesCheckboxes";


export const registrationFormInputs = [{
    label: 'EMAIL ADDRESS:', name: 'email_address', hint: `We'll send your order confirmation here`, type: 'text'
}, {
    label: 'FIRST NAME:', name: 'first_name', type: 'text'
}, {
    label: 'LAST NAME:', name: 'last_name', type: 'text'
}, {
    label: 'PASSWORD:', name: 'password', hint: 'Must be 10 or more characters', type: 'password'
}];

export const userDetailsFormInputs = registrationFormInputs.filter(elem => elem.type !== 'password');

export const changePasswordInputs = [{
    label: "YOUR CURRENT PASSWORD*",
    name: "password",
    type: 'password'
}, {label: "NEW PASSWORD*", name: "newPassword", type: "password",hint: 'Must be 10 or more characters'}]

export const addAddressBook=[{
    label:'FIRST NAME',name:'first_name'
},{label:'LAST NAME',name:'last_name'},{label:'MOBILE',name:'mobile'}]
export const interestedIn = [{name: 'Womenswear', value: 'woman'}, {name: 'Menswear', value: 'man'}]
export const tooltipText = [`That doesn\'t look right.Add your date of birth to get a birthday treat!`, `Oops. Looks like you're too young to use ASOS.`, 'Email fail! Please type in your correct email address', 'First name must not contain <, >, &, " or .', 'Last name must not contain <, >, &, " or .', 'Erm, you need 10 or more characters'];

export const getSelectedAllCheckboxes = () => Object.fromEntries(checkboxList.map(el => [el.name, true]));

export const getInitCheckboxesState = () => Object.fromEntries(checkboxList.map(el => [el.name, false]));
const Form = () => {
    const usersState = useSelector(state => state.users);
    const dispatch = useDispatch();

    console.log('REDUX STATE', usersState);
    const [inputsValue, setInputStateValue] = useState({
        email_address: '', first_name: '', last_name: '', password: ''
    });

    const [tooltipsText, setTooltipsTextState] = useState({
        email_address: '', first_name: '', last_name: '', password: ''
    })
    const [preferenceCheckState, setPreferenceChecked] = useState(getInitCheckboxesState())

    console.log('test', preferenceCheckState)

    function clickCheckBox(e) {
        setPreferenceChecked(prevState => ({...prevState, [e.target.name]: !prevState[e.target.name]}))

    }

     function clearAll() {
        setPreferenceChecked(getInitCheckboxesState());
    }

    function selectAll() {
        setPreferenceChecked(getSelectedAllCheckboxes())
    }

    const isClearAll = Object.values(preferenceCheckState).every(Boolean);

    function onClickSelectClear() {
        isClearAll ? clearAll() : selectAll()
    }

    // const [preferences,setPreferences]=useState({DiscountsAndSales:false,NewStuff:false,YourExclusives:false,AsosPartners:false})

    const [gender, setGender] = useState('woman');

    const {
        daysState,
        monthState,
        yearState,
        handleChangeDate,
        setDateTooltip,
        dateTooltip
    } = useHandleBirthday({day: "", month: "", year: ""}, '')

    function handleChangeInput({target: {name, value}}) {
        setInputStateValue(prevState => ({...prevState, [name]: value}));

        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    }


    function checkPreferences(e) {
        setGender(e.target.value);
    }


    const changeFieldTooltip = (name, text) => setTooltipsTextState((prev) => ({
        ...prev,
        [name]: text
    }))


    function onSuccessSubmit(value) {
        UserStoreHelper.addUser(value, () => {
            // ??????-???? , ?????????? ??????????
            dispatch(setLoggedInUser(value));
            localStorage.setItem('loggedUser', value.email_address);
            console.log('REGISTERED', value);
        }, () => {
            changeFieldTooltip('email_address', "This email is already exists")

        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('FORM', e.target);
        const formValues = {
            ...inputsValue,
            ...preferenceCheckState,
            gender,
            day: daysState,
            month: monthState,
            year: yearState
        };
        console.log('NEW FORM VALUES',formValues)


        let errorsCount = countErrorsAndSetTooltips(formValues, changeFieldTooltip);
        console.log(tooltipsText)
        const {isDateValidErr, isAgeBelow16, wasNotDateEdited} = isDateValidHelper(daysState, monthState, yearState)();
        console.log('errcount111', errorsCount, isDateValidErr, isAgeBelow16, !wasNotDateEdited)

        if (isDateValidErr || isAgeBelow16 || wasNotDateEdited) {
            errorsCount += 1;
        }
        setDateTooltip(isDateValidErr, isAgeBelow16, wasNotDateEdited)
        // ??????????????????,?????? ?????? ????????????
        console.log('errcount', errorsCount)
        if (errorsCount === 0) {
            //submit tyt
            onSuccessSubmit(formValues);
        }

    }

    return (<form id="form" className={styles.form} onSubmit={handleSubmit}>
        {registrationFormInputs.map(el => {
            return (<FormTextInput name={el.name} label={el.label} hint={el.hint} type={el.type}
                                   inputStateValue={inputsValue}
                                   handleChangeInput={handleChangeInput}
                                   value={inputsValue[el.name]}
                                   tooltipText={tooltipsText[el.name]}

            />);
        })}
        <SelectDate daysState={daysState} monthState={monthState} yearState={yearState}
                    handleChangeDate={handleChangeDate}
                    errorTooltipText={dateTooltip}

        />
        <div className={styles.littleNote}><p className="text-gray-400">You need to be 16 or over to use ASOS</p>
        </div>
        <GenderCategoryInput checkPreferences={checkPreferences} selectedValue={gender}/>
        <PreferenceInputBlock clickCheckBox={clickCheckBox} clearAll={clearAll} selectAll={selectAll}
                              isClearAll={isClearAll} preferenceCheckState={preferenceCheckState}
                              onClickSelectClear={onClickSelectClear}/>
        <div className={styles.btnJoinAsos}>
            <button type="submit" id="btn-asos"><p>JOIN ASOS</p></button>
        </div>
    </form>);
}

export default Form;