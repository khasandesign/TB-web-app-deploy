<template>
  <BaseDropdown placement="left">
    <template #trigger>
      <button>
        <img
          class="block rounded-full object-cover overflow-hidden"
          :src="$auth.user.profile.avatar"
          width="48"
          height="48"
        />
      </button>
    </template>
    <BaseDropdownItem :to="localePath('profile')">
      {{ $t('user.profile') }}
    </BaseDropdownItem>
    <BaseDropdownItem @click="$auth.logout()">
      {{ $t('user.logout') }}
    </BaseDropdownItem>
  </BaseDropdown>
</template>

<script>
export default {
  name: 'UserDropdown',
}
</script>
