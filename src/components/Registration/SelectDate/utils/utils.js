import {date,year} from './constants';

function checkDate(year, month, day) {
    let date = new Date(year, month - 1, day)
    return date.getFullYear() == year && date.getMonth() == month - 1 && date.getDate() == day
}