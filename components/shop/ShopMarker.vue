<template>
  <Marker :options="{ position: props.position, label: props.label }">
    <slot />
  </Marker>
</template>
<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { Marker } from 'vue3-google-map'
const props = defineProps({
  position: {
    type: Object as PropType<models.Coordinates>,
    required: true,
  },
  label:{
    type: String as PropType<string|undefined>,
    required: false,
    default: undefined,
  },
})
</script>
