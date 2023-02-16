<template>
  <div>
    <BaseButton
      class="flex justify-center mt-8 w-full bg-[#203E7A]"
      :to="
        localePath({
          name: 'courses-courseId-purchase',
          params: { courseId: $route.params.courseId },
          query: { payment: 'uzcard' },
        })
      "
    >
      <img src="../assets/icons/Uzcard.svg" alt="Uzcard" />
    </BaseButton>
    <BaseButton
      class="flex justify-center mt-3 w-full bg-[#2AB2B2]"
      :to="
        localePath({
          name: 'courses-courseId-purchase',
          params: { courseId: $route.params.courseId },
          query: { payment: 'payme' },
        })
      "
    >
      <img src="../assets/icons/Payme.svg" alt="Payme" />
    </BaseButton>
    <BaseButton class="flex justify-center mt-3 w-full bg-white">
      <img src="../assets/icons/Union.svg" alt="Union" />
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'PaymentPageCardList',
}
</script>
