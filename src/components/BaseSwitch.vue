<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue'
  import { Switch } from '@headlessui/vue'

  const props = defineProps({
    defaultChecked: {
      type: Boolean,
      default: false,
    },
  })

  const enabled = ref(false)

  onMounted(() => (enabled.value = props.defaultChecked))

  const emit = defineEmits(['toggle'])
  watch(enabled, (newValue) => {
    emit('toggle', newValue)
  })
</script>
<template>
  <div class="py-2 relative">
    <Switch
      v-model="enabled"
      :default-checked="defaultChecked"
      class="relative inline-flex h-[21px] w-[41px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      :class="enabled ? 'bg-teal-900' : 'bg-teal-700'"
    >
      <slot name="bg-icon" />
      <span class="sr-only">Use setting</span
      ><span
        aria-hidden="true"
        :class="enabled ? 'translate-x-5' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[17px] w-[17px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
  </div>
</template>
