<template>
  <div class="flex flex-col mx-auto min-h-screen overflow-x-hidden">
    <AppHeader />
    <main class="flex-1">
      <Nuxt />
    </main>
    <AppFooter :authorized="true" />
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
