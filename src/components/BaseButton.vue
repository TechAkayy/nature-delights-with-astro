<script setup lang="ts">
  defineProps({
    name: {
      type: String,
      default: 'BaseButton',
    },
    type: {
      type: String,
      default: 'primary',
    },
  })
</script>

<template>
  <button
    class="font-bold px-4 py-2 rounded text-gray-100"
    :class="`bg-${type}-500`"
  >
    <slot>Button</slot>
  </button>
</template>

<style scoped></style>
