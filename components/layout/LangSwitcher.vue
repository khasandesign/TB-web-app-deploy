<template>
  <BaseDropdown placement="left">
    <template #trigger>
      <button
        class="flex items-center font-semibold text-label-primary-dark space-x-2"
      >
        <BaseIcon name="language" outlined />
        <span>
          {{ $t('language') }}
        </span>
      </button>
    </template>
    <BaseDropdownItem
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      <span
        class="material-icons"
        :class="{ invisible: locale.code !== $i18n.locale }"
      >
        done
      </span>
      {{ titles[locale.code] }}
    </BaseDropdownItem>
  </BaseDropdown>
</template>

<script>
export default {
  name: 'LangSwitcher',
  data() {
    return {
      titles: { uz: "O'zbek (UZ)", en: 'English (EN)', ru: 'Русский (RU)' },
    }
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler() {
        const localeMap = {
          uz: 'uz-latn',
          ru: 'ru',
          en: 'en',
        }

        this.$dayjs.locale(localeMap[this.$i18n.locale])
      },
    },
  },
  methods: {
    handleClick(code) {
      this.$router.push(this.switchLocalePath(code))
    },
  },
}
</script>
