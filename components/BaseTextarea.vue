<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :name="name" :rules="rules">
    <textarea
      v-model="input"
      :placeholder="placeholder"
      :cols="cols"
      :rows="rows"
      class="w-full bg-gray-5-dark text-label-primary-dark placeholder:text-label-tertiary-dark border border-solid border-white/[.04] text-lg rounded-[10px] leading-6 py-3 px-5 font-medium active:bg-gray-6-dark active:scale-y-[0.95] transition-all duration-200 focus:bg-gray-6-light dark:focus:bg-gray-6-dark focus-visible:bg-gray-6-dark hover:border-white/[.04] focus:border-white/[.04] focus:outline-0 focus-visible:outline-0"
    ></textarea>
    <span class="text-red-dark caption mt-0.5">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'BaseTextarea',
  components: { ValidationProvider },
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    name: {
      type: String,
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    cols: {
      type: String,
      default: undefined,
    },
    rows: {
      type: String,
      default: undefined,
    },
    rules: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      input: '',
    }
  },
  methods: {
    updateSelf(value) {
      if (value) {
        this.$emit('input', this.input)
      }
    },
  },
}
</script>
