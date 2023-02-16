<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :name="name" :rules="rules">
    <label
      class="text-label-primary-dark font-normal relative cursor-pointer inline-flex items-center space-x-2"
      :class="{ 'flex-row-reverse space-x-reverse': labelPosition === 'right' }"
    >
      <span class="select-none">{{ label }}</span>
      <input type="checkbox" v-bind="$attrs" v-on="$listeners" />
    </label>
    <span class="caption text-red-dark mt-0.5">{{ errors[0] }}</span>
  </ValidationProvider>
</template>
<script>
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'BaseCheckbox',
  components: { ValidationProvider },
  props: {
    name: {
      type: String,
      default: undefined,
    },
    rules: { type: String, default: undefined },
    label: {
      type: String,
      default: undefined,
    },
    labelPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return ['left', 'right'].includes(value)
      },
    },
  },
}
</script>
<style lang="scss" scoped>
input[type='checkbox'] {
  -webkit-appearance: none;
  appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
}

input[type='checkbox']::before {
  content: url('../assets/icons/Tick.svg');
  position: absolute;
  top: -1px;
  left: 2px;
  width: 14px;
  height: 14px;
  transform: scale(0);
  transition: all ease 120ms;
}

input[type='checkbox']:checked {
  border: 1px solid transparent;
  background-color: #f8a404;
}

input[type='checkbox']:checked::before {
  transform: scale(1);
}
</style>
