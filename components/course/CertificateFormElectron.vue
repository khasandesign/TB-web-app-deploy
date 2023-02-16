<template>
  <BaseForm @submit="handleSubmit">
    <CertificateNameInput v-model="formData.name" class="mt-3" />
    <div class="divider my-5"></div>
    <BaseInputTel
      v-model="formData.phoneNumber"
      size="large"
      name="phoneNumber"
      rules="required|tel"
    />
    <BaseInput
      v-model="formData.email"
      class="mt-3"
      :placeholder="$t('certificate.yourEmail')"
      name="email"
      rules="required|email"
    />
    <BaseButton
      type="submit"
      class="mt-5 w-full justify-center"
      size="large"
      :loading="loading"
    >
      {{ $t('send') }}
    </BaseButton>
  </BaseForm>
</template>

<script>
import CertificateNameInput from './CertificateNameInput.vue'
export default {
  name: 'CertificateFormElectron',
  components: { CertificateNameInput },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: {
        name: {},
        phoneNumber: '',
        email: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.formData)
    },
  },
}
</script>
