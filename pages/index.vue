<template>
  <div class="flex flex-col items-center justify-center my-0 mx-auto py-10 px-20">
    <NuxtLink to="/unconditional-classes">
      Unconditional Classes
    </NuxtLink>
    <NuxtLink to="/conditional-classes">
      Conditional Classes
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import '~/misc/scratchpad'
import '~/misc/settings'

import { createRowIndices } from '~/misc/helpers'

export default Vue.extend({
  data () {
    const {
      componentAmount,
      bestCasePercent,
      averageCasePercent,
      worstCasePercent,
    } = this.$settings

    return {
      statics: Object.freeze({
        componentAmount,
        bestCaseRows: createRowIndices(componentAmount * bestCasePercent),
        averageCaseRows: createRowIndices(componentAmount * averageCasePercent),
        worstCaseRows: createRowIndices(componentAmount * worstCasePercent),
      }),
    }
  },
})
</script>
