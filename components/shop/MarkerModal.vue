<template>
  <div>
    <div class="py-4 space-y-4 text-base leading-7 text-gray-600">
      <p>
        Episode: {{ parseInt(props.shop.episode) }}
      </p>
      <p>
        {{ props.shop.name }}
      </p>
      <p>
        {{ props.address }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { PropType } from '@vue/runtime-core'
const props = defineProps({
  shop: {
    type: Object as PropType<models.ShopItem>,
    required: true,
  },
  address: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>
