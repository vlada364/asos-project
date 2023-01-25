export const month = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
export const date = () => new Date();
export const year = () => date().getFullYear() - 16;

export const today = () => {
    const newDate = date();
    return new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate());
}

export const tooltipText = [`That doesn\'t look right.Add your date of birth to get a birthday treat!`, `Oops. Looks like you're too young to use ASOS.`, 'Email fail! Please type in your correct email address', 'First name must not contain <, >, &, " or .', 'Last name must not contain <, >, &, " or .', 'Erm, you need 10 or more characters'];