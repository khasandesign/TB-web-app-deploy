<template>
  <div>
    <AppHeader class="sticky top-0" />
    <main class="flex-1 pb-12 container">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppFooter },
}
</script>
