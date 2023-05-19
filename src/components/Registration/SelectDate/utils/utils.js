import {month, today, tooltipText, year} from './constants';
import {differenceInYears, isValid, parse} from "date-fns";
import {EMAIL_REGEXP, FIRST_NAME_REGEXP, LAST_NAME_REGEXP, PASSWORD_REGEXP} from "../../Regexp/Regexp";


export function countErrorsAndSetTooltips(formValues, changeFieldTooltip) {

    let errorsCount = 0;
    for (const key in formValues) {
        console.log(key)
        const value = formValues[key];
        if (typeof value === 'boolean') {
            continue;
        }
        const text = getTextAndTooltipVisibility(key, value);
        if (text !== '') {
            errorsCount += 1;
        }
        if (changeFieldTooltip) {
            changeFieldTooltip(key, text);
        }
    }
    return errorsCount;
}

export function isDateValid(year, month, day) {
    return isValid(parse(`${day} ${month} ${year}`, 'd LLLL y', new Date()));
}

export const isDateValidHelper = (daysState, monthState, yearState) => (name, value) => {

    let day = daysState, month = monthState, year = yearState;
    if (name === 'day') {
        day = value;
    } else if (name === 'month') {
        month = value;
    } else if (name === 'year') {
        year = value;
    }
    const isDateValidField = isDateValid(year, month, day);
    console.log('test123', isDateValidField, year, month, day)
    const areDateFieldsValid = !isDateValidField || !year || !month || !day;
    const wasNotDateEdited = year === '' && month === '' && day === '';
    const isDateValidErr = areDateFieldsValid;
    const isAgeBelow16 = getAge(year, month, day) < 16;
    return {isDateValidErr, isAgeBelow16, wasNotDateEdited}

}

export function transformIntoDate(yearState, monthState, daysState) {
    return new Date(yearState, month.indexOf(monthState), daysState)
}

export function getAge(yearState, monthState, daysState) {
    return differenceInYears(today(), transformIntoDate(yearState, monthState, daysState))
};

export function getTextAndTooltipVisibility(name, value) {
    console.log(value, typeof value);
    const trimmedValue = value?.trim() || '';
    if (trimmedValue === '' && name === 'email_address') {
        return 'Oops! You need to type your email here'
    } else if (trimmedValue === '' && name === 'first_name') {
        return 'We need your first name – it’s nicer that way'
    } else if (trimmedValue === '' && name === 'last_name') {
        return 'Last name, too, please!'
    } else if (trimmedValue === '' && name === 'password') {
        return 'Hey, we need a password here'
    } else if (name === 'email_address' && !checkEmailValid(value)) {
        return tooltipText[2];
    } else if (name === 'password' && !checkPassword(value)) {
        return tooltipText[5];
    } else if (name === 'first_name' && !checkFirstName(value)) {
        return tooltipText[3];
    } else if (name === 'last_name' && !checkLastName(value)) {
        return tooltipText[4];
    } else if (name === 'newPassword' && !checkPassword(value)) {
        return tooltipText[5]
    } else if (name === 'mobile' && trimmedValue === '') {
        return 'Oops! We need your mobile number so we can tell you when your order is on its way.'
    } else if (name === 'countryCode' && trimmedValue === '') {
        return 'Please select country'
    } else if (name === 'address' && trimmedValue === '') {
        return 'Oops! You need to finish adding your address before you can continue.'
    } else if (name === 'city' && trimmedValue === '') {
        return 'Oops! You need to enter your city before you can continue.'
    } else if (name === 'postCode' && trimmedValue === '') {
        return 'Oops! You need to enter a postcode before you can continue.'
    }

    return '';
}

export function checkEmailValid(email) {
    return EMAIL_REGEXP.test(email)
}

export function checkFirstName(firstname) {
    return FIRST_NAME_REGEXP.test(firstname)
}

export function checkLastName(lastname) {
    return LAST_NAME_REGEXP.test(lastname)
}

export function checkPassword(password) {
    return PASSWORD_REGEXP.test(password)

}

export function compareInitialAndCurrentValueForm(initial, current) {
    for (const initialKey in initial) {
        if (initial[initialKey] !== current[initialKey]) {
            return false;
        }
    }
    return true;
}

export const years = () => {
    let yearsArray = [];
    for (let i = year(); i >= 1900; i--) {
        yearsArray.push(i);
    }
    return yearsArray;
}

export const days = () => {
    let daysArray = []
    for (let i = 1; i <= 31; i++) {
        daysArray.push(i)
    }
    return daysArray
}