<template>
  <div class="flex flex-wrap items-center bg-orange-600 text-white p-2">
    Average Case Component {{ statics.primeFactors.join(', ') }}
    <slot :rowIndices="statics.rowIndices" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import pf from 'quick-primefactors'

import { createRowIndices } from '~/misc/helpers'

export default Vue.extend({
  name: 'AverageCase',
  data () {
    return {
      statics: Object.freeze({
        rowIndices: createRowIndices(this.$settings.thingsAmount),
        primeFactors: this.$settings.componentPrimeComputation
          ? pf(this.$settings.primeChallangeMedium)
          : [],
      }),
    }
  },
})
</script>
