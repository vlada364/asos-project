import React, {FormEvent, useState} from 'react';
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
import {getInitCheckboxesState, getSelectedAllCheckboxes, registrationFormInputs} from "./utils/FormInformation";
import {RootState} from "../../../index";


const Form = () => {

    const usersState = useSelector((state:RootState) => state.users);
    const dispatch = useDispatch();


    const [inputsValue, setInputStateValue] = useState({
        email_address: '', first_name: '', last_name: '', password: ''
    });

    const [tooltipsText, setTooltipsTextState] = useState({
        email_address: '', first_name: '', last_name: '', password: ''
    })
    const [preferenceCheckState, setPreferenceChecked] = useState(getInitCheckboxesState())



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

    const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = ({target: {name, value}}) => {
        setInputStateValue(prevState => ({...prevState, [name]: value}));

        const text = getTextAndTooltipVisibility(name, value);
        changeFieldTooltip(name, text);
    };


    function checkPreferences(e) {
        setGender(e.target.value);
    }


    const changeFieldTooltip = (name, text) => setTooltipsTextState((prev) => ({
        ...prev,
        [name]: text
    }))


    function onSuccessSubmit(value) {
        UserStoreHelper.addUser(value, () => {
            // что-то , когда удача
            dispatch(setLoggedInUser(value));
            localStorage.setItem('loggedUser', value.email_address);

        }, () => {
            changeFieldTooltip('email_address', "This email is already exists")

        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formValues = {
            ...inputsValue,
            ...preferenceCheckState,
            gender,
            day: daysState,
            month: monthState,
            year: yearState
        };



        let errorsCount = countErrorsAndSetTooltips(formValues, changeFieldTooltip);

        const {isDateValidErr, isAgeBelow16, wasNotDateEdited} = isDateValidHelper(daysState, monthState, yearState)();


        if (isDateValidErr || isAgeBelow16 || wasNotDateEdited) {
            errorsCount += 1;
        }
        setDateTooltip(isDateValidErr, isAgeBelow16, wasNotDateEdited)
        // проверить,что нет ошибок

        if (errorsCount === 0) {
            //submit tyt
            onSuccessSubmit(formValues);
        }

    }

    return (<form id="form" className={styles.form} onSubmit={handleSubmit}>
        {registrationFormInputs.map(el => {
            return (<FormTextInput name={el.name} label={el.label} hint={el.hint} type={el.type}
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
        <PreferenceInputBlock clickCheckBox={clickCheckBox}
                              isClearAll={isClearAll} preferenceCheckState={preferenceCheckState}
                              onClickSelectClear={onClickSelectClear}/>
        <div className={styles.btnJoinAsos}>
            <button type="submit" id="btn-asos"><p>JOIN ASOS</p></button>
        </div>
    </form>);
}

export default Form;