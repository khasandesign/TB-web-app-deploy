<template>
  <ValidationObserver v-slot="{ handleSubmit, ...rest }" ref="observer" slim>
    <form v-bind="$attrs" @submit.prevent="handleSubmit(onSubmit)">
      <slot v-bind="{ ...rest, handleSubmit }" />
    </form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
export default {
  name: 'BaseForm',
  components: { ValidationObserver },
  methods: {
    onSubmit() {
      this.$emit('submit')
    },
  },
}
</script>
