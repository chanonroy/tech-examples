import { act } from '@testing-library/react-hooks'
import { create } from 'react-test-renderer'
import App from './App'
import DoneStep from './screens/done-step'
import PrivacyStep from './screens/privacy-step'
import UserStep from './screens/user-step'

jest.mock('./screens/user-step', () => () => <></>)
jest.mock('./screens/privacy-step', () => () => <></>)
jest.mock('./screens/done-step', () => () => <></>)

describe('App', () => {
  it('completes the form and logs the payload', async () => {
    const { root } = create(<App />)

    expect(root.findByType(UserStep)).toBeTruthy()

    await act(async () => {
      await root.findByType(UserStep).props.onSubmit({
        name: 'Chanon Roy',
        role: 'Software Engineer',
        emailAddress: 'chanonroy@gmail.com',
        password: 'Password1!',
      })
    })

    expect(root.findByType(PrivacyStep)).toBeTruthy()

    await act(async () => {
      await root.findByType(PrivacyStep).props.onSubmit({
        receiveUpdates: true,
        receiveCommunication: true,
      })
    })

    expect(root.findByType(DoneStep)).toBeTruthy()
  })
})
