<template>
  <div>
    <div class="py-8 space-y-6 text-base leading-7 text-gray-600">
      <p>
        {{ props.marker.name }}
      </p>
      <p>
        Episode: {{ props.marker.episode }}
      </p>
      <ul class="space-y-4">
        <li v-for="(value, name, index) in props.marker.rating" :key="index" class="flex items-center">
          <p>
            {{ name }}: {{ value }}
          </p>
        </li>
      </ul>
      <p>
        {{ props.marker.address }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
const props = defineProps({
  marker: {
    type: Object as PropType<models.ShopItem>,
    required: true,
  },
})
</script>
