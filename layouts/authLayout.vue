<template>
  <div class="relative w-full min-h-screen">
    <section
      class="relative z-20 h-[72px] md:h-20 pt-9 mb-10 flex justify-center"
    >
      <nuxt-link to="/">
        <img src="@/assets/img-signup/Logo.png" alt="logo" class="mx-auto" />
      </nuxt-link>
    </section>
    <section
      class="bg-bg-primary relative z-20 md:bg-[#131313] mx-auto p-4 md:p-10 md:rounded-10px w-full md:w-7/12 2xl:w-4/12 max-w-[464px]"
    >
      <Nuxt />
    </section>
    <BaseChat />
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
}
</script>
