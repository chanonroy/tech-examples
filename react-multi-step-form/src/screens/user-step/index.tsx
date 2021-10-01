import { UserPayload } from '../../@types'
import Button from '../../components/button'
import Card from '../../components/card'
import TextInput from '../../components/text-input'
import TextInputLabel from '../../components/text-input-label'
import ValidationError from '../../components/validation-error'
import useTextInputState from '../../hooks/use-text-input-state'
import {
  matchRegex,
  minLength,
  notEmpty,
  validEmail,
} from '../../utils/validations'

export default function UserStep({
  onSubmit,
}: {
  onSubmit: (user: UserPayload) => void
}) {
  const nameState = useTextInputState({
    validations: [notEmpty('Name is required')],
  })
  const roleState = useTextInputState({})
  const emailAddressState = useTextInputState({
    validations: [
      notEmpty('Email is required'),
      validEmail('Please enter a valid email'),
    ],
  })
  const passwordState = useTextInputState({
    validations: [
      notEmpty('Password is required'),
      matchRegex(/[A-Z]+/, 'At least one uppercase letter is required'),
      matchRegex(/[a-z]+/, 'At least one lowercase letter is required'),
      matchRegex(/[0-9]+/, 'At least one number is required'),
      minLength(9, 'Minimum 8 characters'),
    ],
  })

  const handleSubmit = () => {
    // Blur all fields
    nameState.onBlur()
    roleState.onBlur()
    emailAddressState.onBlur()
    passwordState.onBlur()

    // Prevent submit on validation error
    if (
      nameState.hasError ||
      roleState.hasError ||
      emailAddressState.hasError ||
      passwordState.hasError
    ) {
      return
    }

    // Send payload
    onSubmit({
      name: nameState.cleanValue,
      role: roleState.cleanValue,
      emailAddress: emailAddressState.cleanValue,
      password: passwordState.cleanValue,
    })
  }

  return (
    <Card>
      <div style={{ marginBottom: 20 }}>
        <TextInputLabel>Name *</TextInputLabel>
        <TextInput
          test-id='name'
          value={nameState.value}
          onChange={(e) => nameState.onChange(e.target.value)}
          onBlur={nameState.onBlur}
          placeholder='Jane Smith'
          error={nameState.showError}
          onEnterKey={handleSubmit}
        />
        {nameState.showError && (
          <ValidationError>{nameState.errorMessage}</ValidationError>
        )}
      </div>

      <div style={{ marginBottom: 20 }}>
        <TextInputLabel>Role</TextInputLabel>
        <TextInput
          test-id='role'
          value={roleState.value}
          onChange={(e) => roleState.onChange(e.target.value)}
          onBlur={roleState.onBlur}
          placeholder='Software Engineer'
          error={roleState.showError}
          onEnterKey={handleSubmit}
        />
        {roleState.showError && (
          <ValidationError>{roleState.errorMessage}</ValidationError>
        )}
      </div>

      <div style={{ marginBottom: 20 }}>
        <TextInputLabel>Email address *</TextInputLabel>
        <TextInput
          test-id='emailAddress'
          value={emailAddressState.value}
          onChange={(e) => emailAddressState.onChange(e.target.value)}
          onBlur={emailAddressState.onBlur}
          placeholder='jane@me.com'
          error={emailAddressState.showError}
          onEnterKey={handleSubmit}
        />
        {emailAddressState.showError && (
          <ValidationError>{emailAddressState.errorMessage}</ValidationError>
        )}
      </div>

      <div style={{ marginBottom: 40 }}>
        <TextInputLabel>Password *</TextInputLabel>
        <TextInput
          test-id='password'
          type='password'
          value={passwordState.value}
          onChange={(e) => passwordState.onChange(e.target.value)}
          onBlur={passwordState.onBlur}
          placeholder='Password'
          error={passwordState.showError}
          onEnterKey={handleSubmit}
        />
        {passwordState.showError && (
          <ValidationError>{passwordState.errorMessage}</ValidationError>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Card>
  )
}
