import Vue from 'vue'

Vue.directive('focus', {
  inserted: (el) => {
    if (['input', 'textarea'].includes(el.tagName.toLowerCase())) {
      el.focus()
    }

    const inputEl = el.querySelector('input,textarea')

    if (inputEl) {
      inputEl.focus()
    }
  },
})

Vue.filter(
  'formatNumber',
  function (value, decimals = 2, thousandsSeparator = ' ') {
    let result = parseFloat(value).toFixed(decimals).toString()
    if (thousandsSeparator)
      result = result.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
    return result
  }
)
