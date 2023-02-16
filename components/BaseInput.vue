<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :name="name" :rules="rules">
    <div
      class="base_input relative"
      :class="size == 'small' ? 'h-10 text-base' : 'h-12 text-lg'"
    >
      <span
        v-if="hasPrefix"
        class="z-10 text-label-tertiary-dark absolute top-1/2 left-5 -translate-y-1/2 align-middle"
        :class="{ 'material-icons': prefixIcon }"
      >
        <slot name="prefix-icon">
          {{ prefixIcon }}
        </slot>
      </span>
      <input
        v-model="input"
        v-mask="mask"
        :type="type"
        class="absolute z-0 text-label-primary-dark placeholder:text-label-tertiary-dark border border-solid border-white/[.04] top-0 left-0 w-full text-lg rounded-[10px] leading-6 py-3 px-5 h-full font-medium active:bg-gray-6-dark active:scale-y-[0.95] transition-all duration-200 focus:bg-gray-6-light dark:focus:bg-gray-6-dark focus-visible:bg-gray-6-dark hover:border-white/[.04] focus:border-white/[.04] focus:outline-0 focus-visible:outline-0"
        :class="{
          'pl-[50px]': hasPrefix,
          'pr-[50px]': suffixIcon,
          'text-base': size == 'small',
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
        :placeholder="placeholder"
        :disabled="$attrs.disabled"
        @keyup="updateSelf($event.target.value)"
      />
      <span
        v-if="suffixIcon"
        class="material-icons z-10 text-label-tertiary-dark absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer"
        :class="{ 'text-red-dark': errors.length > 0 }"
        @click="$emit('suffix-icon-click')"
      >
        {{ suffixIcon }}
      </span>
    </div>
    <div
      v-if="errors.length > 0"
      class="flex items-center text-red-dark caption mt-1.5 space-x-1"
    >
      <span class="material-icons">info</span>
      <span>{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'BaseInput',
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
    prefixIcon: {
      type: String,
      default: undefined,
    },
    mask: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: undefined,
    },
    suffixIcon: {
      type: String,
      default: undefined,
    },
    color: {
      type: String,
      default: 'gray-5',
    },

    placeholder: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: 'text',
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
  computed: {
    hasPrefix() {
      return this.prefixIcon || this.$slots['prefix-icon']
    },
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
