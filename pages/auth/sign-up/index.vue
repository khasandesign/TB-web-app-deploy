<template>
  <div>
    <h2 class="h4 text-center md:text-start text-label-primary-dark mb-3">
      {{ $t('signUp') }}
    </h2>
    <div class="text-center md:text-start mx-auto md:ml-0 max-w-[300px] mb-8">
      <p
        class="par-2 font-normal text-label-secondary-dark inline leading-[22px]"
      >
        {{ $t('register.firstText') }} {{ $t('or') }}
        <Nuxt-link to="/auth/sign-in" class="text-label-primary-dark">
          {{ $t('register.signIn') }}
        </Nuxt-link>
        {{ $t('register.secondText') }}
      </p>
    </div>
    <BaseForm @submit="handleSubmit">
      <BaseInputTel
        v-model="phoneNumber"
        v-focus
        name="phoneNumber"
        rules="required|tel"
        size="large"
        class="mb-3 w-full"
      />

      <BaseButton
        :loading="loading"
        type="submit"
        size="large"
        class="w-full flex justify-center mt-4 mb-6"
      >
        {{ $t('register.continue') }}
      </BaseButton>
    </BaseForm>

    <p
      class="par-2 text-center md:text-left font-normal text-label-tertiary-dark leading-[22px]"
    >
      {{ $t('register.allow') }}
      <NuxtLink :to="localePath('terms')" class="underline">
        {{ $t('footer.termsOfUsage') }}
      </NuxtLink>
      {{ $t('footer.and') }}
      <NuxtLink :to="localePath('privacy')" class="underline">
        {{ $t('footer.confiden') }}
      </NuxtLink>
    </p>
    <AuthSocialButtons class="mt-6" />
  </div>
</template>

<script>
import { morphism } from 'morphism'
import { SEND_CODE } from '@/api/auth'
import AuthSocialButtons from '~/components/auth/AuthSocialButtons.vue'
export default {
  name: 'SignUp',
  components: { AuthSocialButtons },
  layout: 'authLayout',
  data() {
    return {
      loading: false,
    }
  },
  head() {
    return {
      title: this.$t('signUp'),
    }
  },
  computed: {
    phoneNumber: {
      get() {
        return this.$store.state.signup.signupData.phoneNumber
      },
      set(value) {
        this.$store.commit('signup/SET_SIGNUP_DATA', {
          ...this.$store.state.auth.signupData,
          phoneNumber: value,
        })
      },
    },
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true
        await this.$axios[SEND_CODE.method](
          SEND_CODE.url,
          morphism(SEND_CODE.schema, { phoneNumber: this.phoneNumber })
        )
        this.$router.push(this.localePath({ name: 'auth-sign-up-verify' }))
      } catch (error) {
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
