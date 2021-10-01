import { act, create } from 'react-test-renderer'
import PrivacyForm from '.'
import Button from '../../components/button'

describe('Privacy Form', () => {
  it('completes form and sends submission', () => {
    const mockOnSubmit = jest.fn()
    const { root } = create(<PrivacyForm onSubmit={mockOnSubmit} />)

    act(() => {
      root
        .findByProps({
          label: 'Receive updates about tray.io product by email',
        })
        .props.onChange(true)
    })

    act(() => {
      root
        .findByProps({
          label:
            'Receive communication by email for other products created by the Tray.io team',
        })
        .props.onChange(true)
    })

    act(() => {
      root.findByType(Button).props.onClick()
    })

    expect(mockOnSubmit).toHaveBeenNthCalledWith(1, {
      receiveUpdates: true,
      receiveCommunication: true,
    })
  })
})
