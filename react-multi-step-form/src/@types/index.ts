export const Colors = {
  primary: '#409eff',
  primaryAccent: '#66b1ff',
  success: 'mediumseagreen',
  danger: '#fc5c65',
  dark: '#403E3D',
  background: '#F1F5FE',
}

export enum Step {
  User = 'user',
  Privacy = 'privacy',
  Done = 'done',
}

export interface UserPayload {
  name: string
  role: string
  emailAddress: string
  password: string
}

export interface PrivacyPayload {
  receiveUpdates: boolean
  receiveCommunication: boolean
}
