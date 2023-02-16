<template>
  <BaseInput
    :type="inputType"
    :suffix-icon="inputType === 'text' ? 'visibility' : 'visibility_off'"
    :value="value"
    v-bind="$attrs"
    v-on="$listeners"
    @suffix-icon-click="changeType"
    @input="updateSelf"
  >
  </BaseInput>
</template>

<script>
export default {
  name: 'BasePasswordInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
  },
  data() {
    return {
      inputType: 'password',
    }
  },
  methods: {
    updateSelf(value) {
      this.$emit('input', value)
    },
    changeType() {
      this.inputType = this.inputType === 'password' ? 'text' : 'password'
    },
  },
}
</script>
