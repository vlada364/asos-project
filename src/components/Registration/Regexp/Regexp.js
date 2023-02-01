
export const EMAIL_REGEXP=/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

export const FIRST_NAME_REGEXP=/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;

export const LAST_NAME_REGEXP = /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/;
export const PASSWORD_REGEXP = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;