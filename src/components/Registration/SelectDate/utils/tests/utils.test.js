import {
    checkEmailValid,
    checkFirstName,
    checkLastName,
    checkPassword,
    compareInitialAndCurrentValueForm,
    countErrorsAndSetTooltips,
    getTextAndTooltipVisibility,
    years,
    days,
    isDateValidHelper
} from "../utils";

jest
    .useFakeTimers()
    .setSystemTime(new Date('2020-01-01'));
describe('Select date utils', () => {
    describe('compareInitialAndCurrentValueForm', () => {
        it('should return true if initial state equals to current', () => {
            expect(compareInitialAndCurrentValueForm({state1: "Manea", state2: "Manea2"}, {
                state1: "Manea",
                state2: "Manea2"
            })).toBeTruthy();
        });
        it('should return false if initial state is not equal to current', () => {
            expect(compareInitialAndCurrentValueForm({state: 'Manea', state2: 'Manea2'},
                {state1: 'Manea3', state2: 'Manea4'})).toBeFalsy();
        })
    });

    describe('checkEmailValid', () => {
        it('should return true if value matches regular expression', () => {
            expect(checkEmailValid('admin@mail.ru')).toBeTruthy()
        });
        it(`should return false if value doesn't match regular expression`, () => {
            expect(checkEmailValid('lala.ru')).toBeFalsy();
        })
    });
    describe('checkFirstName', () => {
        it('should return true if value matches regular expression', () => {
            expect(checkFirstName('Valentin')).toBeTruthy()
        });
        it(`should return false if value doesn't match regular expression`, () => {
            expect(checkFirstName('vale1_tin')).toBeFalsy();
        })
    });
    describe('checkLastName', () => {
        it('should return true if value matches regular expression', () => {
            expect(checkLastName('Serebreanu')).toBeTruthy()
        });
        it(`should return false if value doesn't match regular expression`, () => {
            expect(checkFirstName('Sereb1!reanu_')).toBeFalsy();
        })
    });
    describe('checkPassword', () => {
        it('should return true if value matches regular expression', () => {
            expect(checkPassword('Qwrdgg13429!Ik')).toBeTruthy()
        });
        it(`should return false if value doesn't match regular expression`, () => {
            expect(checkPassword('1234kek')).toBeFalsy();
        })
    });
    describe('getTextAndTooltipVisibility', () => {
        it('should return tooltip text if email is empty', () => {
            expect(getTextAndTooltipVisibility('email_address', '')).toBe('Oops! You need to type your email here')
        });
        it(`should return tooltip text if first name is empty`, () => {
            expect(getTextAndTooltipVisibility('first_name', '')).toBe('We need your first name – it’s nicer that way');
        });
        it('should return tooltip text if last name is empty', () => {
            expect(getTextAndTooltipVisibility('last_name', '')).toBe(`Last name, too, please!`)
        });
        it('should return tooltip text if password is empty', () => {
            expect(getTextAndTooltipVisibility('password', '')).toBe('Hey, we need a password here')
        });
        it('should return tooltip text if email has not valid format', () => {
            expect(getTextAndTooltipVisibility('email_address', '1jfdj!')).toBe('Email fail! Please type in your correct email address')
        });
        it('should return tooltip text if password has not valid format', () => {
            expect(getTextAndTooltipVisibility('password', '133_21H')).toBe('Erm, you need 10 or more characters')
        });
        it('should return tooltip text if first name has not valid format', () => {
            expect(getTextAndTooltipVisibility('first_name', 'kek16')).toBe('First name must not contain <, >, &, " or .')
        });
        it('should return tooltip text if last name has not valid format', () => {
            expect(getTextAndTooltipVisibility('last_name', 'kek16')).toBe('Last name must not contain <, >, &, " or .')
        });
        it('should return tooltip text if new password has not valid format', () => {
            expect(getTextAndTooltipVisibility('newPassword', '122jfk')).toBe('Erm, you need 10 or more characters')
        });
        it('should return tooltip text if mobile  has not valid format', () => {
            expect(getTextAndTooltipVisibility('mobile', '')).toBe('Oops! We need your mobile number so we can tell you when your order is on its way.')
        });
        it('should return tooltip text if country code has not valid format', () => {
            expect(getTextAndTooltipVisibility('countryCode', '')).toBe('Please select country')
        });
        it('should return tooltip text if address has not valid format', () => {
            expect(getTextAndTooltipVisibility('address', '')).toBe('Oops! You need to finish adding your address before you can continue.')
        });
        it('should return tooltip text if city has not valid format', () => {
            expect(getTextAndTooltipVisibility('city', '')).toBe('Oops! You need to enter your city before you can continue.')
        });
        it('should return tooltip text if post code has not valid format', () => {
            expect(getTextAndTooltipVisibility('postCode', '')).toBe('Oops! You need to enter a postcode before you can continue.')
        });
        it('should return empty string if email is correct', () => {
            expect(getTextAndTooltipVisibility('email_address', 'admin@mail.ru')).toBe('')
        });
        it('should return an array with years', () => {
            const yearsArray = years();
            expect(yearsArray[0]).toBe(2004);
            expect(yearsArray[104]).toBe(1900);
            expect(yearsArray).toHaveLength(105);
        });
        it('should return an array with days', () => {
            const daysArray = days();
            expect(daysArray[0]).toBe(1);
            expect(daysArray[30]).toBe(31);
        });


    });
    describe('countErrorsAndSetTooltips', () => {
        it('should return 0 if value of form is valid', () => {
            const spy = jest.fn();
            expect(countErrorsAndSetTooltips({email_address: '', last_name: '', first_name: ''}, spy)).toBe(3);
            expect(spy).toBeCalledTimes(3)
        });

    });
    describe('isDateValidHelper', () => {
        it('should return true if date is valid format ', () => {
            const isValid = isDateValidHelper('12', '5', '2000');
            expect(isValid('day', '20')).toStrictEqual({
                "isAgeBelow16": false,
                "isDateValidErr": true,
                "wasNotDateEdited": false
            })
        });
        it('should return true if age is below 16 ', () => {
            const isValid = isDateValidHelper('12', '5', '2017');
            expect(isValid('day', '20')).toStrictEqual({
                "isAgeBelow16": true,
                "isDateValidErr": true,
                "wasNotDateEdited": false
            })
        });
        it('should return true if date is not edited ', () => {
            const isValid = isDateValidHelper('', '', '');
            expect(isValid('day', '')).toStrictEqual({
                "isAgeBelow16": false,
                "isDateValidErr": true,
                "wasNotDateEdited": true
            })
        });
    });


});
