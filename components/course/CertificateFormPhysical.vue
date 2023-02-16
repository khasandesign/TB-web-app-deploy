<template>
  <BaseForm class="space-y-3" @submit="handleSubmit">
    <BaseInput
      v-model="formData.email"
      :placeholder="$t('certificate.yourEmail')"
      name="email"
      rules="required|email"
    />
    <BaseSelect
      v-model="formData.region"
      rules="required"
      name="region"
      :options="regions"
      label="name"
      :placeholder="$t('certificate.selectRegion')"
    >
    </BaseSelect>
    <BaseSelect
      v-model="formData.district"
      rules="required"
      name="district"
      :disabled="!formData.region"
      :options="districts"
      label="name"
      :placeholder="$t('certificate.selectDistrict')"
    >
    </BaseSelect>
    <BaseInput
      v-model="formData.street"
      name="street"
      rules="required"
      :disabled="!formData.district"
      :placeholder="$t('validations.fields.street')"
    />
    <BaseInput
      v-model="formData.postalCode"
      name="postalCode"
      rules="required"
      :disabled="!formData.street"
      :placeholder="$t('validations.fields.postalCode')"
    />
    <CertificateNameInput />
    <BaseInputTel
      v-model="formData.phoneNumber"
      size="large"
      name="phoneNumber"
      rules="required|tel"
    />
    <div class="divider my-6"></div>
    <BaseButton
      type="submit"
      class="w-full justify-center"
      size="large"
      :loading="loading"
    >
      {{ $t('send') }}
    </BaseButton>
  </BaseForm>
</template>

<script>
import CertificateNameInput from './CertificateNameInput.vue'
import countryData from '@/regions'

export default {
  name: 'CertificateFormPhysical',
  components: { CertificateNameInput },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      regions: countryData.regions,
      formData: {
        email: null,
        region: null,
        district: null,
        street: null,
        postalCode: null,
        phoneNumber: null,
      },
    }
  },
  computed: {
    districts() {
      if (!this.formData.region) {
        return []
      }
      return countryData.districts.filter(
        (district) => district.region_id === this.formData.region.id
      )
    },
  },
  watch: {
    'formData.region'() {
      this.formData.district = null
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.formData)
    },
  },
}
</script>
