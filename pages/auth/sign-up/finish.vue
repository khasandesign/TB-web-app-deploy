<template>
  <div>
    <h2 class="h4 text-center md:text-start text-label-primary-dark mb-3">
      {{ $t('signUp') }}
    </h2>
    <div class="text-center md:text-start mx-auto md:ml-0 max-w-[300px] mb-8">
      <p
        class="par-2 font-normal text-label-secondary-dark inline leading-[22px]"
      >
        {{ $t('register.finishText') }}
      </p>
    </div>
    <BaseForm @submit="handleSubmit">
      <BaseInput
        v-model="formData.name"
        v-focus
        name="name"
        rules="required"
        type="text"
        :placeholder="`${$t('validations.fields.name')}...`"
        class="mb-3"
      />
      <BasePasswordInput
        v-model="formData.password"
        name="password"
        rules="required"
        type="text"
        :placeholder="`${$t('validations.fields.password')}...`"
        class="mb-3"
      />
      <BasePasswordInput
        v-model="formData.passwordConfirm"
        name="passwordConfirm"
        rules="required|password:@password"
        type="text"
        :placeholder="`${$t('validations.fields.passwordConfirm')}...`"
        class="mb-3"
      />

      <BaseButton
        type="submit"
        size="large"
        :loading="loading"
        class="w-full flex justify-center mt-4 mb-6"
      >
        {{ $t('createAccount') }}
      </BaseButton>
    </BaseForm>
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { SIGNUP } from '@/api/auth'

export default {
  name: 'SignUpFinish',
  layout: 'authLayout',

  data() {
    return {
      loading: false,
      formData: {
        name: '',
        password: '',
        passwordConfirm: '',
      },
    }
  },
  head() {
    return {
      title: this.$t('signUp'),
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        await this.$axios[SIGNUP.method](
          SIGNUP.url,
          morphism(SIGNUP.schema, this.formData)
        )
        // TODO show success message
        this.$router.push('/auth/sign-in')
      } catch (err) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
