<script>
export default {
  name: 'BaseTab',
  props: {
    value: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      tabs: [],
      pointer: null,
      road: null,
      width: null,
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    if (this.value) {
      this.selectTab(this.value)
    } else if (this.tabs.length > 0) {
      this.selectTab(this.tabs.filter((tab) => !tab.disabled)[0].name)
    }
    if (this.tabs.length > 0) {
      if (100 / this.tabs.length >= 50) {
        this.width = `calc(${100 / this.tabs.length}% - 2px)`
      }
      if (100 / this.tabs.length < 50) {
        this.width = `calc(${100 / this.tabs.length}% - 1.5px)`
      }
      if (100 / this.tabs.length < 30) {
        this.width = `calc(${100 / this.tabs.length}% - 1px)`
      }
    }
  },
  methods: {
    selectTab(name) {
      this.tabs.forEach((tab) => {
        if (tab.name === name) {
          this.road = this.tabs.indexOf(tab) * 100 + '%'
        }
        tab.isActive = tab.name === name
      })
    },
    selectTab2(name) {
      this.tabs.forEach((tab) => {
        if (tab.name === name) {
          this.road = this.tabs.indexOf(tab) * 100 + '%'
        }
      })
    },
    selectTab3(name) {
      this.tabs.forEach((tab) => {
        if (tab.isActive) {
          this.road = this.tabs.indexOf(tab) * 100 + '%'
        }
      })
    },
  },
}
</script>

<template>
  <div v-bind="$attrs" v-on="$listeners">
    <nav
      class="nav relative p-0.5 h-12 rounded-[10px] bg-gray-1-dark box-border border border-solid border-gray-3-dark"
      @mouseleave="selectTab3"
    >
      <div
        id="js-pointer"
        class="nav__pointer absolute h-10 z-10 h-11 -translate-y-1/2 transition scale-x-[.81] duration-500 rounded-[9px]"
        :style="[
          { width: `${width}` },
          { transform: 'translate3d(' + road + ',0,0)' },
          { background: `#484848` },
        ]"
      ></div>
      <ul class="nav__list relative flex z-20 h-full">
        <li v-for="tab in tabs" :key="tab.name" class="w-full h-full">
          <button
            class="inline-flex items-center justify-center w-full h-full text-[18px] leading-6 font-medium rounded-[9px] dark:text-label-primary-dark dark:disabled:text-gray-7-light"
            :disabled="tab.disabled"
            :class="[tab.isActive ? 'bg-gray-1-dark ' : '']"
            @click="selectTab(tab.name)"
            @mouseover="selectTab2(tab.name)"
          >
            <span v-if="tab.icon" class="material-icons">{{ tab.icon }}</span>
            <span>{{ tab.title }}</span>
          </button>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
