<template>
  <div class="space-y-3">
    <BaseSelect
      v-model="region"
      :options="regions"
      label="name"
      :placeholder="$t('certificate.selectRegion')"
    >
    </BaseSelect>
    <BaseSelect
      v-model="district"
      :disabled="!region"
      :options="districts"
      label="name"
      :placeholder="$t('certificate.selectDistrict')"
    >
    </BaseSelect>
    <BaseInput
      name="street"
      rules="required"
      :placeholder="$t('validations.fields.street')"
    />
    <BaseInput
      name="postalCode"
      rules="required"
      :placeholder="$t('validations.fields.postalCode')"
    />
  </div>
</template>

<script>
import countryData from '@/regions'

export default {
  name: 'CertificateAddressInput',
  data() {
    return {
      region: '',
      regions: countryData.regions,
      district: null,
    }
  },
  computed: {
    districts() {
      if (!this.region) {
        return []
      }

      return countryData.districts.filter(
        (district) => district.region_id === this.region.id
      )
    },
  },
}
</script>
