/**
 * Email address regex pattern to test against
 */
const isValidEmailAddress = (value: string) =>
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
    value
  )

/**
 * Shows error message if value is falsy.
 * @param errorMessage - The error message to show.
 */
export const notEmpty = (errorMessage: string) => (value: string) =>
  !value ? errorMessage : null

/**
 * Shows error message if value is truthy and is not a valid email address.
 * @param errorMessage - The error message to show.
 */
export const validEmail = (errorMessage: string) => (value: string) =>
  !!value && !isValidEmailAddress(value) ? errorMessage : null

/**
 * Shows error message if value does not match regex pattern
 * @param regex - The regex pattern to match against
 * @param errorMessage - The error message to show.
 */
export const matchRegex =
  (regex: RegExp, errorMessage: string) => (value: string) =>
    !!value && value.match(regex) ? null : errorMessage

/**
 * Shows error message if value is not of minimum length
 * @param minLength - The minimum length of the string
 * @param errorMessage - The error message to show.
 */
export const minLength =
  (minLength: number, errorMessage: string) => (value: string) =>
    !!value && value.length >= minLength ? null : errorMessage
