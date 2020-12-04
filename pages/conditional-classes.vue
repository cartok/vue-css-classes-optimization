<template>
  <Page>
    <NuxtLink to="/unconditional-classes">
      Go to Unconditional Classes
    </NuxtLink>
    <ConditionalBestCase slot="best-case" />
    <ConditionalAverageCase slot="average-case" />
    <ConditionalWorstCase slot="worst-case" />
  </Page>
</template>
