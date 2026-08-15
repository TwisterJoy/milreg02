<template></template>

<script setup>
const props = defineProps({
  structure: {
    type: Object,
    required: true,
    default: () => ({ type: 'list', value: [] })
  },
  payload: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>
