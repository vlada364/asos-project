export const days = () => {
    let daysArray = []
    for (let i = 1; i <= 31; i++) {
        daysArray.push(i)
    }
    return daysArray
}

export const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
export const date= new Date()
export const year = date.getFullYear() - 16;

export const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())

export const years = () => {
    let yearsArray = []
    for (let i = year; i >= 1900; i--) {
        yearsArray.push(i)
    }
    return yearsArray
}