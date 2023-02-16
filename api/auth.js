export const SEND_CODE = {
  url: 'auth/send-code',
  method: 'post',
  schema: {
    phoneNumber: 'phoneNumber',
  },
}

export const VERIFY = {
  url: 'auth/verify-code',
  method: 'post',
  schema: {
    phoneNumber: 'phoneNumber',
    code: 'code',
  },
}

export const SIGNUP = {
  url: 'auth/register',
  method: 'post',
  schema: {
    phoneNumber: 'phoneNumber',
    name: 'name',
    password: 'password',
    passwordConfirm: 'passwordConfirm',
  },
}

export const resetPasswordRepository = ($axios) => ({
  sendCode(phoneNumber) {
    return $axios.post('/reset-password', { phoneNumber })
  },
  changePassword(payload) {
    return $axios.post('/reset-password/change', payload)
  },
})
