<template>
  <TemplateWorstCase v-slot="{ rowIndices }">
    <span
      v-for="nr in rowIndices"
      :key="nr"
      class="
        ml-1 mb-1 h-4 w-4 border-2 rounded-full border-white bg-white
        md:ml-2 md:mb-2 md:h-6 md:w-6 md:border-4 md:border-white md:bg-red-300
        lg:ml-3 lg:mb-3 lg:h-8 lg:w-8
      "
    />
  </TemplateWorstCase>
</template>
