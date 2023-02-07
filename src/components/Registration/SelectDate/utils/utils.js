import {date, year, today} from './constants';
import {isValid, parse, differenceInYears} from "date-fns";
import {month} from "./constants";
import {tooltipText} from "../../Form/Form";
import {EMAIL_REGEXP, FIRST_NAME_REGEXP, LAST_NAME_REGEXP, PASSWORD_REGEXP} from "../../Regexp/Regexp";

export function isDateValid(year, month, day) {
    return isValid(parse(`${day} ${month} ${year}`, 'd LLLL y', new Date()))

}

export function giveBirth(yearState, monthState, daysState) {
    return new Date(yearState, month.indexOf(monthState), daysState)
}

export function getAge(yearState, monthState, daysState) {
    return differenceInYears(today, giveBirth(yearState, monthState, daysState))
};

export function getTextAndTooltipVisibility(name, value) {
    let text = '';
    if (value.trim() ===''&& name === 'email_address') {
        text = 'Oops! You need to type your email here'
    } else if (value.trim() ==='' && name === 'first_name') {
        text = 'We need your first name – it’s nicer that way'
    } else if (value.trim() ==='' && name === 'last_name') {
        text = 'Last name, too, please!'
    } else if (value.trim() ==='' && name === 'password') {
        text = 'Hey, we need a password here'
    }
    else if (name === 'email_address' && !checkEmailValid(value)) {
        text = tooltipText[2];
    } else if (name === 'password' && !checkPassword(value)) {
        text = tooltipText[5];
    } else if (name === 'first_name' && !checkFirstName(value)) {
        text = tooltipText[3];
    } else if (name === 'last_name' && !checkLastName(value)) {
        text = tooltipText[4];
    }

    return text;
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