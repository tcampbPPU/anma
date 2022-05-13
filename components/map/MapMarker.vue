<template>
  <Marker v-for="mark in filteredMarkers" :key="mark.id" :options="{ position: mark.position }">
    <slot name="mark" :mark="mark" />
  </Marker>
</template>
<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { Marker } from 'vue3-google-map'

const props = defineProps({
  markers: {
    type: Array as PropType<models.Markers>,
    required: true,
  },
  filter: {
    type: Number as PropType<number|undefined>,
    required: false,
    default: undefined,
  },
})

const filteredMarkers = computed((): models.Markers => {
  if (!props.filter)
    return props.markers
  return props.markers.filter(mark => mark.episode === props.filter)
})
</script>
