<template>
  <transition-group name="list" tag="div" class="flex space-x-2">
    <BaseButton
      v-if="showPreviousBtn"
      key="previous"
      size="medium"
      color="bg-primary"
      class="inline-block"
      @click="handleClick(currentPage - 1)"
    >
      <span v-if="iconic" class="material-icons">chevron_left</span>
      <template v-else>Previous</template>
    </BaseButton>
    <BaseButton
      v-for="page in pages"
      :key="page"
      class="inline-block"
      size="medium"
      :color="page === currentPage ? 'primary' : 'bg-primary'"
      @click="handleClick(page)"
    >
      {{ page }}
    </BaseButton>
    <BaseButton
      v-if="showNextBtn"
      key="next"
      class="inline-block"
      size="medium"
      color="bg-primary"
      @click="handleClick(currentPage + 1)"
    >
      <span v-if="iconic" class="material-icons">chevron_right</span>
      <template v-else>Next</template>
    </BaseButton>
  </transition-group>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    totalItems: {
      type: Number,
      default: 0,
    },
    iconic: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    lastPage() {
      return Math.ceil(this.totalItems / this.pageSize)
    },
    showPreviousBtn() {
      return this.currentPage > 1
    },
    showNextBtn() {
      return this.currentPage !== this.lastPage
    },
    pages() {
      let end = Math.min(this.currentPage + 2, this.lastPage)
      let start = Math.max(this.currentPage - 2, 1)

      if (end - start < 4) {
        const diff = 4 - (end - start)
        start = Math.max(1, start - diff)
        end = Math.min(this.lastPage, end + diff)
      }

      const result = []
      for (let i = start; i <= end; i++) {
        result.push(i)
      }

      return result
    },
  },
  methods: {
    handleClick(page) {
      if (page < 1 || page > this.lastPage) {
        return
      }
      this.$emit('update:currentPage', page)
    },
  },
}
</script>

<style lang="scss">
.list-item {
  transition: all 0.5s;
  display: inline-block;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  position: absolute;
}

.list-move {
  transition: transform 0.5s;
}
</style>
