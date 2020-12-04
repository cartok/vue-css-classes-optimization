<template>
  <TemplateWorstCase v-slot="{ rowIndices }">
    <span
      v-for="nr in rowIndices"
      :key="nr"
      class="rounded-full"
      :class="{
        'ml-1 mb-1 h-4 w-4 border-2 border-black bg-white': $settings.isMobile,
        'ml-2 mb-2 h-6 w-6 border-4 border-white bg-red-300': $settings.isTablet,
        'ml-3 mb-3 h-8 w-8 border-4 border-white bg-red-300': $settings.isDesktop,
      }"
    />
  </TemplateWorstCase>
</template>
