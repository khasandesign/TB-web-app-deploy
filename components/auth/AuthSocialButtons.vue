<template>
  <div>
    <section class="flex items-center justify-center">
      <span class="w-full h-px bg-white/[.08]"></span>
      <p class="text-xs leading-4 uppercase text-white/20 mx-2">
        {{ $t('or') }}
      </p>
      <span class="w-full h-px bg-white/[.08]"></span>
    </section>
    <section class="mt-6">
      <BaseButton
        size="large"
        class="bg-white text-black/80 w-full flex justify-center items-center mb-1.5"
      >
        <img src="@/assets/img-signup/google-icon.svg" alt="google" />
        {{ $t('signInGoogle') }}
      </BaseButton>
      <BaseButton
        size="large"
        class="bg-[#2E4F8B] w-full flex justify-center items-center mt-1.5"
      >
        <img src="@/assets/img-signup/facebook-icon.svg" alt="facebook" />
        {{ $t('signInFacebook') }}
      </BaseButton>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AuthSocialButtons',
}
</script>
