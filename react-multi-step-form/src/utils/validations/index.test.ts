import { matchRegex, minLength, notEmpty, validEmail } from '.'

test('validEmail returns expected value', () => {
  expect(validEmail('errorMessage')('chanonroy@gmail.com')).toBe(null)
  expect(validEmail('errorMessage')('chanonroy')).toBe('errorMessage')
})

test('notEmpty returns expected value', () => {
  expect(notEmpty('errorMessage')('value')).toBe(null)
  expect(notEmpty('errorMessage')('')).toBe('errorMessage')
})

test('matchRegex returns expected value', () => {
  expect(matchRegex(/[A-Z]+/, 'errorMessage')('Password')).toBe(null)
  expect(matchRegex(/[A-Z]+/, 'errorMessage')('password')).toBe('errorMessage')
  expect(matchRegex(/[a-z]+/, 'errorMessage')('a')).toBe(null)
  expect(matchRegex(/[a-z]+/, 'errorMessage')('A')).toBe('errorMessage')
  expect(matchRegex(/[0-9]+/, 'errorMessage')('1')).toBe(null)
  expect(matchRegex(/[0-9]+/, 'errorMessage')('p')).toBe('errorMessage')
})

test('minLength returns expected value', () => {
  expect(minLength(4, 'errorMessage')('1234')).toBe(null)
  expect(minLength(4, 'errorMessage')('123')).toBe('errorMessage')
})
