<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div text-4xl>
      ConteWorld
    </div>
    <p>
      <em text-sm opacity-75>{{ t('intro.desc') }}</em>
    </p>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
