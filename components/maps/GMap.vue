<template>
  <google-map
    :api-key="props.apiKey"
    style="width: 100%; height: 80vh"
    :center="props.center"
    :zoom="props.zoom"
    :fullscreen-control="props.fullscreenControl"
    v-bind="$attrs"
    :styles="theme"
  >
    <slot />
  </google-map>
</template>
<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import { GoogleMap } from 'vue3-google-map'
import useTheme from '~/composables/useTheme'

const props = defineProps({
  apiKey: {
    type: String as PropType<string>,
    required: true,
  },
  center: {
    type: Object as PropType<models.Coordinates>,
    required: true,
  },
  zoom: {
    type: Number as PropType<number>,
    required: false,
    default: 12,
  },
  fullscreenControl: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false,
  },
  theme: {
    type: String as PropType<'default'|'aubergine'|'dark'|'retro'>,
    required: false,
    default: 'default',
  },
})

const theme = ref(useTheme(props.theme))

</script>
