import { extend, configure, setInteractionMode } from 'vee-validate'
import {
  required,
  digits,
  min,
  max,
  length,
  email,
} from 'vee-validate/dist/rules'
import { isValidPhoneNumber } from 'libphonenumber-js'

export default function ({ i18n }) {
  setInteractionMode('eager')
  const message = (field, values) => {
    values._field_ = i18n.t(`validations.fields.${field}`)
    return i18n.t(`validations.messages.${values._rule_}`, values)
  }
  configure({
    // this will be used to generate messages.
    defaultMessage: message,
  })

  extend('required', { ...required, message })
  extend('email', email)
  extend('digits', digits)
  extend('min', min)
  extend('max', max)
  extend('length', length)
  extend('tel', (value) => {
    return isValidPhoneNumber(value)
  })
  extend('password', {
    params: ['target'],
    validate(value, { target }) {
      return value === target
    },
    message: i18n.t('validations.messages.passwordConfirmation'),
  })
}
