<script setup lang="ts">
  defineProps({
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: '',
    },
  })
</script>
<template>
  <a :href="href" :target="target" class="text-primary-500"> <slot /> </a>
</template>
<style scoped></style>
