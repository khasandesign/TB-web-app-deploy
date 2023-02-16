<template>
  <ValidationProvider
    v-slot="{ errors }"
    tag="div"
    :name="name"
    :rules="rules"
    class="text-left"
  >
    <the-mask
      ref="phoneMask"
      class="w-full bg-gray-5-dark text-label-primary-dark placeholder:text-label-tertiary-dark border border-solid border-white/[.04] rounded-10px leading-6 font-medium active:bg-gray-6-dark active:scale-y-[0.95] transition-all duration-200 focus:bg-gray-6-light dark:focus:bg-gray-6-dark focus-visible:bg-gray-6-dark hover:border-white/[.04] focus:border-white/[.04] focus:outline-0 focus-visible:outline-0"
      :class="{
        'text-base px-5 h-[36px] btn-sm': size === 'small',
        'px-5 h-[40px] btn-md': size === 'medium',
        'px-6 h-[48px] btn-lg': size === 'large',
        'bg-bg-primary': color === 'primary',
        'bg-accent-light dark:bg-accent-dark': color === 'accent',
        'bg-red-light dark:bg-red-dark': color === 'red',
        'bg-gray-1-light dark:bg-gray-1-dark': color === 'gray-1',
        'bg-gray-2-light dark:bg-gray-2-dark': color === 'gray-2',
        'bg-gray-3-light dark:bg-gray-3-dark': color === 'gray-3',
        'bg-gray-4-light dark:bg-gray-4-dark': color === 'gray-4',
        'bg-gray-5-light dark:bg-gray-5-dark': color === 'gray-5',
        'bg-gray-6-light dark:bg-gray-6-dark': color === 'gray-6',
        'bg-gray-7-light dark:bg-gray-7-dark': color === 'gray-7',
        'bg-gray-8-light dark:bg-gray-8-dark': color === 'gray-8',
      }"
      :mask="mask"
      :value="innerValue"
      :tokens="plusTokens"
      :placeholder="placeholder || '+998 (__) ___ __ __'"
      :disabled="disabled"
      masked
      type="tel"
      v-bind="$attrs"
      v-on="$listeners"
      @input="onInput"
    />
    <span class="mt-0.5 text-red-dark caption">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import visitorInfo from 'visitor-info'
import { TheMask } from 'vue-the-mask'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

import {
  getMaskToLibPhoneNumber,
  findFirstCountryByAlpha2,
  findFirstCountryByCode,
  isCanada,
} from '@/utils/country_telephone_data.js'

export default {
  name: 'BaseInputTel',
  components: { TheMask, ValidationProvider },
  props: {
    name: {
      type: String,
      default: undefined,
    },
    rules: {
      type: String,
      default: undefined,
    },
    value: {
      type: [String, Number],
      default: undefined,
    },
    size: {
      type: String,
      default: 'medium',
    },
    autoDetectCountry: {
      type: Boolean,
      default: false,
    },
    defaultCountry: {
      type: String,
      default: 'uz',
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'gray-5',
    },
  },
  data() {
    return {
      innerValue: this.value,
      countryCode: '',
      mask: '*############',
      defaultMask: '*############',
      country: '',
      isValid: false,
      plusTokens: {
        '#': {
          pattern: /\d/,
        },
        '*': {
          pattern: /\d|\+/,
        },
      },
    }
  },
  computed: {
    currentNumber() {
      const plus = /^\+/.test(this.innerValue) || !this.innerValue ? '' : '+'
      const filteredNumberArr = this.innerValue
        ? this.innerValue.match(/[\d+]/g)
        : null
      const filteredNumber = filteredNumberArr ? filteredNumberArr.join('') : ''

      return this.mask === this.defaultMask
        ? `${plus}${filteredNumber}`
        : filteredNumber
    },
  },
  watch: {
    currentNumber(value) {
      this.$emit('input', value)
      this.$emit('onValidate', {
        number: value,
        isValidByLibPhoneNumberJs: this.isValid,
        country: this.country,
      })
    },
  },
  beforeMount() {
    if (this.autoDetectCountry) {
      const visitorCountryInfo = visitorInfo()
      this.visitorCountry =
        visitorCountryInfo && visitorCountryInfo.country
          ? visitorCountryInfo.country.alpha2
          : ''
    }
    this.updateMaskData()
  },
  mounted() {
    this.$refs.phoneMask.$el.onblur = () => {
      this.$emit('onBlur')
    }
    this.$refs.phoneMask.$el.onfocus = () => {
      this.$emit('onFocus')
    }
  },
  methods: {
    onInput(value) {
      const filteredValue = value.match(/[\d+]/g)
      this.innerValue = filteredValue ? filteredValue.join('') : ''
      this.updateMaskData()

      this.$nextTick(function () {
        setTimeout(this.setFocusToEnd.bind(this), 0)
      })
    },

    setFocusToEnd() {
      const length = this.$refs.phoneMask.$el.value.length
      this.$refs.phoneMask.$el.focus()
      this.$refs.phoneMask.$el.setSelectionRange(length, length)
    },

    updateMaskData() {
      const {
        currentNumber,
        visitorCountry,
        innerValue,
        countryCode,
        defaultMask,
        defaultCountry,
      } = this

      let { autoDetectCountry } = this

      let phoneInfo = parsePhoneNumberFromString(currentNumber)

      if (!phoneInfo && !currentNumber) {
        const country = findFirstCountryByAlpha2(defaultCountry)
        if (country) {
          phoneInfo = { country: defaultCountry }
          autoDetectCountry = false
          this.innerValue = `+${country.code}`
        }
      }

      if (phoneInfo && !phoneInfo.country) {
        switch (phoneInfo.countryCallingCode) {
          case '44': {
            phoneInfo.country = 'GB'
            break
          }
          case '1': {
            if (currentNumber.length > 4)
              phoneInfo.country = isCanada(currentNumber) ? 'CA' : 'US'
            break
          }
        }
      } else if (autoDetectCountry && visitorCountry && !innerValue)
        phoneInfo = { country: visitorCountry }
      else if (!phoneInfo && currentNumber.length > 2)
        phoneInfo = { country: findFirstCountryByCode(currentNumber) }

      const computedMask = getMaskToLibPhoneNumber(phoneInfo)
      const computedCountry =
        phoneInfo && phoneInfo.country ? phoneInfo.country.toLowerCase() : ''

      if (autoDetectCountry && visitorCountry) {
        if (!innerValue) this.innerValue = computedMask.countryCode
        this.visitorCountry = null
      }

      if (computedMask && computedMask.mask) {
        this.mask = computedMask.mask
        this.country = computedCountry
        this.countryCode = computedMask.countryCode
        this.isValid = !!phoneInfo && !!phoneInfo.isValid && phoneInfo.isValid()
      } else if (countryCode.length > currentNumber.length) {
        this.mask = defaultMask
        this.country = ''
        this.countryCode = ''
        this.isValid = false
      }
    },
  },
}
</script>

<style scoped>
.phone-mask-wrapper-lib {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 40px;
}

.phone-input-lib {
  height: 20px;
}
</style>
