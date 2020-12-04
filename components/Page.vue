<template>
  <div class="flex flex-col items-center justify-center my-0 mx-auto py-10 px-20">
    <slot />
    <div class="mb-10 w-full">
      <h3 class="text-lg uppercase">
        best case
      </h3>
      <div v-for="number in statics.bestCaseRows" :key="number">
        Row: {{ number }} / {{ statics.bestCaseRows.length }} / {{ statics.componentAmount }}
        <slot name="best-case" />
      </div>
    </div>
    <div class="mb-10 w-full">
      <h3 class="text-lg uppercase">
        average case
      </h3>
      <div v-for="number in statics.averageCaseRows" :key="number">
        Row: {{ number }} / {{ statics.averageCaseRows.length }} / {{ statics.componentAmount }}
        <slot name="average-case" />
      </div>
    </div>
    <div class="mb-10 w-full">
      <h3 class="text-lg uppercase">
        worst case
      </h3>
      <div v-for="number in statics.worstCaseRows" :key="number">
        Row: {{ number }} / {{ statics.worstCaseRows.length }} / {{ statics.componentAmount }}
        <slot name="worst-case" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

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
