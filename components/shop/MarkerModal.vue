<template>
  <div>
    <div class="py-8 space-y-6 text-base leading-7 text-gray-600">
      <p>
        {{ props.shop.name }}
      </p>
      <p>
        Episode: {{ props.shop.episode }}
      </p>
      <ul class="space-y-4">
        <li v-for="(value, name, index) in props.shop.rating" :key="index" class="flex items-center">
          <p>
            {{ ucFirst(name) }}: {{ value }}
          </p>
        </li>
      </ul>
      <p>
        {{ props.shop.address }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
import ucFirst from '~/composables/ucFirst'
const props = defineProps({
  shop: {
    type: Object as PropType<models.ShopItem>,
    required: true,
  },
})
</script>
