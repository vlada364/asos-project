import {useState} from "react";
import {isDateValidHelper} from "../../../components/Registration/SelectDate/utils/utils";
import {tooltipText} from "../../../components/Registration/SelectDate/utils/constants";

const useHandleBirthday = (initialState, initialTooltipState) => {
    const [daysState, setDaysState] = useState(initialState.day);
    const [monthState, setMonthState] = useState(initialState.month);
    const [yearState, setYearState] = useState(initialState.year);

    const [dateTooltip, setDateTooltipText] = useState(initialTooltipState);

    const handleChangeDate:React.ChangeEventHandler<HTMLSelectElement> = ({target: {name, value}}) => {
        console.log('TRIGGERED',name,value)
        if (name === 'day') {
            setDaysState(value);
        } else if (name === 'month') {
            setMonthState(value)
        } else if (name === 'year') {
            setYearState(value)
        }
        const isDateValid = isDateValidHelper(daysState, monthState, yearState);

        const {isAgeBelow16, isDateValidErr, wasDateEdited} = isDateValid(name, value);
        setDateTooltip(isDateValidErr, isAgeBelow16, wasDateEdited)
    }

    function setDateTooltip(isDateValidErr, isAgeBelow16, wasDateEdited) {
        let text = '';
        if (wasDateEdited) {
            text = 'Enter your full date of birth'
        } else if (isDateValidErr) {
            text = tooltipText[0];
        } else if (isAgeBelow16) {
            text = tooltipText[1];
        } else if (wasDateEdited) {
            text = 'Enter your full date of birth'
        }
        setDateTooltipText(text);
    }

    return {handleChangeDate, dateTooltip, daysState, monthState, yearState, setDateTooltip}
}

export default useHandleBirthday;