import { Colors } from '../../@types'
import Card from '../../components/card'
import SuccessIcon from '../../components/success-icon'

export default function DoneStep() {
  return (
    <Card>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
      >
        <SuccessIcon />
      </div>
      <div
        style={{
          maxWidth: 400,
          margin: '0 auto',
          textAlign: 'center',
          color: Colors.success,
        }}
      >
        Please verify your email address, you should have received an email from
        us already
      </div>
    </Card>
  )
}
