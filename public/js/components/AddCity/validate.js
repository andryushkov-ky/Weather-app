import validator from 'validator';

const maxLength = max => value =>
    value && validator.isLength(value, {min:undefined, max: max}) ? undefined : `Must be ${max} characters or less`
const minLength = min => value =>
    value && validator.isLength(value, {min:min, max: undefined}) ? undefined :`Must be ${min} characters or more`

export const required = value => (value && !validator.isEmpty(value) ? undefined : 'Required')
export const language = value => (value && !validator.isAlpha(value, ['ru-RU']) ? undefined : 'You can type only English letters')
export const maxLength50 = maxLength(50)