<template>
  <div class="mt-8 mb-5">
    <BaseInput
      prefix-icon="credit_card"
      mask="#### #### #### ####"
      placeholder="#### #### #### ####"
      class="mb-3"
    />
    <BaseInput mask="##/####" placeholder="MM/YYYY" class="mb-6" />
    <BaseButton size="large" class="flex justify-center w-full">
      Оплатить
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'PaymentPageCArdInput',
}
</script>
