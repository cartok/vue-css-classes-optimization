<template>
  <TemplateBestCase v-slot="{ rowIndices }">
    <span
      v-for="nr in rowIndices"
      :key="nr"
      class="rounded-full ml-1 mb-1 h-4 w-4 border-2 border-black bg-white"
    />
  </TemplateBestCase>
</template>
