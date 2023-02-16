<template>
  <div>
    <section class="space-y-3">
      <BaseInput
        v-for="locale in locales"
        :key="locale"
        name="name"
        rules="required"
        :suffix-icon="locales.length !== 1 ? 'remove' : undefined"
        :placeholder="placeholders[locale]"
        :value="value[locale]"
        @input="(val) => $emit('input', { ...value, [locale]: val })"
        @suffix-icon-click="handleLangRemove(locale)"
      >
        <template #prefix-icon>
          <span class="uppercase">{{ locale }}</span>
        </template>
      </BaseInput>
    </section>

    <BaseDropdown class="mt-4">
      <template #trigger>
        <button type="button" class="flex items-center btn-md">
          <span class="material-icons">add</span>
          {{ $t('certificate.addLanguage') }}
        </button>
      </template>
      <BaseDropdownItem
        v-for="locale in $i18n.locales"
        :key="locale.code"
        :disabled="locales.includes(locale.code)"
        @click="handleLangAdd(locale.code)"
      >
        {{ titles[locale.code] }}
      </BaseDropdownItem>
    </BaseDropdown>

    <p class="mt-4 caption text-label-secondary-dark text-left">
      {{ $t('certificate.langDescription') }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({ uz: '', en: undefined, ru: undefined }),
    },
  },
  data() {
    return {
      locales: ['uz'],
      placeholders: {
        ru: 'Ваше имя',
        uz: 'Ismingiz',
        en: 'Your name',
      },
      titles: {
        ru: 'Русский (RU)',
        en: 'English (EN)',
        uz: "O'zbek (UZ)",
      },
    }
  },
  methods: {
    handleLangAdd(code) {
      this.locales.push(code)
    },
    handleLangRemove(code) {
      this.locales = this.locales.filter((locale) => locale !== code)
    },
  },
}
</script>
