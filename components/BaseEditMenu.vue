<template>
  <div
    v-if="show"
    class="text-label-primary-dark absolute bg-black h-max w-max rounded-10px flex items-center select-none"
    :style="changePosition"
  >
    <button
      :class="[defaultButtonClass, btnAfter]"
      class="rounded-l-10px"
      @click="copy"
    >
      Copy
    </button>
    <button :class="[defaultButtonClass, btnAfter]">Paste</button>
    <button :class="[defaultButtonClass, btnAfter]">Report</button>
    <button
      :class="[defaultButtonClass, btnAfter]"
      class="rounded-r-10px after:hidden"
    >
      <b>B</b>
      <span>/</span>
      <u>U</u>
    </button>
    <span
      class="absolute w-0 h-0 left-1/2 top-full -translate-x-1/2 border-t-[10px] border-l-[8px] border-r-[8px] border-x-transparent border-t-black"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'BaseEditMenu',
  data() {
    return {
      show: false,
      x: 0,
      y: 0,
      text: '',
    }
  },
  computed: {
    defaultButtonClass() {
      return 'py-2 px-3 font-medium text-sm hover:bg-gray-4-dark active:bg-gray-9-dark relative hover:after:bg-transparent'
    },
    btnAfter() {
      return "after:content-[''] after:w-px after:h-5 after:bg-gray-9-dark after:absolute after:right-0 after:rounded-[1px]"
    },
    changePosition() {
      return {
        left: this.x + 'px',
        top: this.y + 'px',
      }
    },
  },
  mounted() {
    document.addEventListener('mouseup', (evt) => {
      const selection = document.getSelection()
      const text = selection.toString()
      const range = selection.getRangeAt(0)

      if (text.length > 0) {
        const rect = range.getBoundingClientRect()
        this.text = text
        this.show = true
        this.x = (rect.left + rect.width) / 2 + 40
        this.y = rect.top - 38
      } else {
        this.show = false
      }
    })
  },
  methods: {
    copy() {
      this.show = false
      navigator.clipboard.writeText(this.text)
      document.getSelection().removeAllRanges()
    },
  },
}
</script>
