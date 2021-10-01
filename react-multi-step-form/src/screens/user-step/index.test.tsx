import { act, create } from 'react-test-renderer'
import UserStep from '.'
import Button from '../../components/button'
import ValidationError from '../../components/validation-error'

describe('UserForm', () => {
  it('completes form and sends submission', () => {
    const mockOnSubmit = jest.fn()
    const { root } = create(<UserStep onSubmit={mockOnSubmit} />)

    act(() => {
      root
        .findByProps({ 'test-id': 'name' })
        .props.onChange({ target: { value: 'Chanon Roy' } })
    })

    act(() => {
      root
        .findByProps({ 'test-id': 'role' })
        .props.onChange({ target: { value: 'Software Engineer' } })
    })

    act(() => {
      root
        .findByProps({ 'test-id': 'emailAddress' })
        .props.onChange({ target: { value: 'chanonroy@gmail.com' } })
    })

    act(() => {
      root
        .findByProps({ 'test-id': 'password' })
        .props.onChange({ target: { value: 'Password1!' } })
    })

    act(() => {
      root.findByType(Button).props.onClick()
    })

    expect(mockOnSubmit).toHaveBeenNthCalledWith(1, {
      name: 'Chanon Roy',
      role: 'Software Engineer',
      emailAddress: 'chanonroy@gmail.com',
      password: 'Password1!',
    })
  })
  it('blocks progress on validation error', () => {
    const mockOnSubmit = jest.fn()
    const { root } = create(<UserStep onSubmit={mockOnSubmit} />)

    act(() => {
      root.findByProps({ 'test-id': 'name' }).props.onBlur()
    })

    act(() => {
      root.findByType(Button).props.onClick()
    })

    expect(mockOnSubmit).not.toHaveBeenCalled()
    expect(root.findAllByType(ValidationError)).toHaveLength(3)
  })
})
