<template>
  <div>
    <div class="h-[1px] w-full bg-white/[.1] mb-6"></div>

    <div class="flex flex-col 2xl:flex-row gap-x-12 text-label-primary-dark">
      <div class="2xl:w-3/12">
        <h1 class="h3 w-[160px] md:w-[full] font-bold">
          {{ $t('faq.title') }}
        </h1>
      </div>
      <div class="2xl:w-8/12">
        <BaseAccordion
          v-if="faqs"
          default-first-active
          class="md:mt-3 mb-8 md:mb-12"
        >
          <BaseAccordionItem
            v-for="(item, index) in faqs"
            :key="index"
            :header="$t(`faq.${item}.que`)"
            :name="index + 1"
          >
            <p>{{ $t(`faq.${item}.ans`) }}</p>
          </BaseAccordionItem>
        </BaseAccordion>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQComponent',
  props: {
    faqs: {
      type: Array,
      required: true,
    },
  },
}
</script>
