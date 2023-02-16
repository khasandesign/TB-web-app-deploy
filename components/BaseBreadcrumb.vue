<template>
  <div class="flex items-center space-x-[15px]">
    <section
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center space-x-[15px]"
    >
      <BaseBreadcrumbItem :to="item.to" :href="item.href">
        {{ item.title }}
      </BaseBreadcrumbItem>
      <svg
        v-if="index !== items.length - 1"
        width="7"
        height="10"
        viewBox="0 0 7 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.94043 1.05951L4.88043 4.99951L0.94043 8.93951L2.00043 9.99951L7.00043 4.99951L2.00043 -0.000488281L0.94043 1.05951Z"
          fill="white"
          fill-opacity="0.3"
        />
      </svg>
    </section>
  </div>
</template>

<script>
export default {
  name: 'BaseBreadcrumb',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
