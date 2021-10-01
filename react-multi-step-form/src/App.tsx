import React, { useState } from 'react'
import { PrivacyPayload, Step, UserPayload } from './@types'
import Container from './components/container'
import { StatusItem, StatusItemContainer } from './components/status-item'
import DoneStep from './screens/done-step'
import PrivacyStep from './screens/privacy-step'
import UserStep from './screens/user-step'

export default function App() {
  const [step, setStep] = useState<Step>(Step.User)
  const [formState, setFormState] = useState<UserPayload & PrivacyPayload>({
    name: '',
    role: '',
    emailAddress: '',
    password: '',
    receiveUpdates: false,
    receiveCommunication: false,
  })

  const handleUserSubmit = (payload: UserPayload) => {
    const newFormState = {
      ...formState,
      ...payload,
    }
    setFormState(newFormState)
    setStep(Step.Privacy)
  }

  const handlePrivacySubmit = (payload: PrivacyPayload) => {
    const newFormState = {
      ...formState,
      ...payload,
    }

    setFormState(newFormState)

    // in our real app, the server side would also validate this input on submission

    // log state
    console.log(newFormState)

    // change step
    setStep(Step.Done)
  }

  return (
    <Container style={{ paddingTop: 40, paddingBottom: 20 }}>
      {/* Progress Bar */}
      <StatusItemContainer>
        <StatusItem active={step === Step.User}>User</StatusItem>
        <StatusItem active={step === Step.Privacy}>Privacy</StatusItem>
        <StatusItem active={step === Step.Done}>Done</StatusItem>
      </StatusItemContainer>

      {/* Each Step of the Form wizard */}
      {step === Step.User && <UserStep onSubmit={handleUserSubmit} />}
      {step === Step.Privacy && <PrivacyStep onSubmit={handlePrivacySubmit} />}
      {step === Step.Done && <DoneStep />}
    </Container>
  )
}
