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
    let isShown = value !== '', text;
    if (name === 'email_address') {
        isShown = isShown && checkEmailValid(value);
        text = tooltipText[2];
    } else if (name === 'password') {
        isShown = isShown && checkPassword(value);
        text = tooltipText[3];
    } else if (name === 'first_name') {
        isShown = isShown && checkFirstName(value);
        text = tooltipText[0];
    } else if (name === 'last_name') {
        isShown = isShown && checkLastName(value);
        text = tooltipText[1];
    }

    return {isShown, text}
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