<template>
  <div class="bg-[#080808] min-h-screen text-label-primary-dark">
    <div class="container px-4 pb-8 md:pb-20">
      <h2 class="h3 mb-8 md:mb-12">{{ $t('faq.title') }}</h2>
      <p class="subheadline text-label-secondary-dark">
        {{ $t('faq.aboutPlatform') }}
      </p>
      <BaseAccordion active="none" class="md:mt-3 mb-8 md:mb-12">
        <BaseAccordionItem
          v-for="(item, id) in platform"
          :key="item.id"
          :header="$t(`faq.${item}.que`)"
          :name="id"
        >
          <p class="par-1">{{ $t(`faq.${item}.ans`) }}</p>
        </BaseAccordionItem>
      </BaseAccordion>

      <p class="subheadline text-label-secondary-dark">
        {{ $t('contact.buyCourse') }}
      </p>
      <BaseAccordion active="item5" class="md:mt-3 mb-8 md:mb-12">
        <BaseAccordionItem
          v-for="(item, idx) in purchase"
          :key="item.id"
          :header="$t(`faq.${item}.que`)"
          :name="idx"
        >
          <p class="par-1">{{ $t(`faq.${item}.ans`) }}</p>
        </BaseAccordionItem>
      </BaseAccordion>

      <p class="subheadline text-label-secondary-dark">
        {{ $t('faq.aboutCourse') }}
      </p>
      <BaseAccordion active="none" class="md:mt-3">
        <BaseAccordionItem
          v-for="(item, id) in about"
          :key="item.id"
          :header="$t(`faq.${item}.que`)"
          :name="id"
        >
          <p class="par-1">{{ $t(`faq.${item}.ans`) }}</p>
        </BaseAccordionItem>
      </BaseAccordion>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FaqPage',
  layout: 'infoLayout',
  data() {
    return {
      platform: ['what', 'howToShow', 'whereQue'],
      purchase: ['whatYouGet', 'pay', 'backMoney'],
      about: ['howToBook', 'teacherKind'],
    }
  },
  head() {
    return {
      title: 'TopBrains - FAQ',
    }
  },
}
</script>
