<template>
  <div>
    <AuthResetPasswordBreadcrumbs class="hidden lg:flex lg:mb-6" />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'ResetPasswordBase',
  layout: 'authLayout',
}
</script>
