<template>
  <TemplateAverageCase v-slot="{ rowIndices }">
    <span
      v-for="nr in rowIndices"
      :key="nr"
      class="rounded-full"
      :class="{
        'ml-1 mb-1 h-4 w-4 border-2 border-black bg-white': $settings.isMobile,
        'ml-2 mb-2 h-6 w-6 border-4 border-white bg-orange-300': $settings.isTablet || $settings.isDesktop,
      }"
    />
  </TemplateAverageCase>
</template>
