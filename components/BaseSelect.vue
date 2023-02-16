<template>
  <ValidationProvider v-slot="{ errors }" tag="div" :name="name" :rules="rules">
    <v-select v-bind="$attrs" v-on="$listeners">
      <slot />
    </v-select>
    <div
      v-if="errors.length > 0"
      class="flex items-center text-red-dark caption mt-1.5 space-x-1 text-left"
    >
      <span class="material-icons">info</span>
      <span>{{ errors[0] }}</span>
    </div>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

export default {
  name: 'BaseSelect',
  components: {
    'v-select': vSelect,
    ValidationProvider,
  },
  props: {
    name: {
      type: String,
      default: undefined,
    },
    rules: {
      type: String,
      default: undefined,
    },
  },
}
</script>

<style scoped lang="scss">
/* stylelint-disable */
::v-deep {
  .vs {
    &__dropdown-toggle {
      height: 48px;
      display: flex;
      align-items: center;
      padding: 12px 13px;
    }

    &__search:disabled {
      background: inherit;
    }
  }

  --vs-colors--lightest: rgba(24, 14, 14, 0.26);
  --vs-colors--light: rgba(60, 60, 60, 0.5);
  --vs-colors--dark: #333;
  --vs-colors--darkest: rgba(0, 0, 0, 0.15);

  /* Search Input */
  --vs-search-input-color: #fff;
  --vs-search-input-bg: #191919;
  --vs-search-input-placeholder-color: rgba(255, 255, 255, 0.3);

  /* Font */
  --vs-font-size: 18px;
  --vs-line-height: 24px;

  /* Disabled State */
  --vs-disabled-bg: rgba(255, 255, 255, 0.04);
  --vs-state-disabled-color: rgba(255, 255, 255, 0.04);
  --vs-state-disabled-controls-color: var(--vs-colors--light);
  --vs-state-disabled-cursor: not-allowed;

  /* Borders */
  --vs-border-color: rgba(255, 255, 255, 0.08);
  --vs-border-width: 1px;
  --vs-border-style: solid;
  --vs-border-radius: 10px;

  /* Actions: house the component controls */
  --vs-actions-padding: 4px 6px 0 3px;

  /* Component Controls: Clear, Open Indicator */
  --vs-controls-color: var(--vs-colors--light);
  --vs-controls-size: 1;
  --vs-controls--deselect-text-shadow: 0 1px 0 #fff;

  /* Selected */
  --vs-selected-bg: #f0f0f0;
  --vs-selected-color: #fff;
  --vs-selected-border-color: var(--vs-border-color);
  --vs-selected-border-style: var(--vs-border-style);
  --vs-selected-border-width: var(--vs-border-width);

  /* Dropdown */
  --vs-dropdown-bg: #191919;
  --vs-dropdown-color: inherit;
  --vs-dropdown-z-index: 1000;
  --vs-dropdown-min-width: 160px;
  --vs-dropdown-max-height: 350px;
  --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);

  /* Options */
  --vs-dropdown-option-bg: #000;
  --vs-dropdown-option-color: var(--vs-dropdown-color);
  --vs-dropdown-option-padding: 8px 16px;

  /* Active State */
  --vs-dropdown-option--active-bg: rgba(255, 255, 255, 0.08);
  --vs-dropdown-option--active-color: #fff;

  /* Deselect State */
  --vs-dropdown-option--deselect-bg: #fb5858;
  --vs-dropdown-option--deselect-color: #fff;

  /* Transitions */
  --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
  --vs-transition-duration: 150ms;
}
</style>
