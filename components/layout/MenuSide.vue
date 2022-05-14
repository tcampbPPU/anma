<template>
  <div class="flex bg-gray-100 dark:bg-gray-900">
    <div
      :class="closed ? 'hidden' : null"
      aria-modal="true"
      class="fixed inset-0 z-40 flex md:hidden"
      role="dialog"
    >
      <div
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        :class="closed ? 'hidden' : null"
        aria-hidden="true"
      />
      <div
        class="relative flex flex-col flex-1 w-full max-w-xs pt-0 pb-4 bg-gray-100 dark:bg-gray-900 sm:pt-0 md:pt-5 lg:pt-5 xl:pt-5"
        :class="closed ? 'hidden' : null"
      >
        <div class="flex flex-col flex-grow pt-5 pb-4 bg-gray-100 border-r border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <span class="flex justify-end pr-2 cursor-pointer" @click="toggle">
            <left-arrow v-if="!closed" />
            <right-arrow v-else />
          </span>
          <div class="flex flex-col flex-grow mt-5">
            <slot name="aside" />
          </div>
        </div>
      </div>
    </div>
    <div class="border-r border-gray-200 dark:border-gray-700 sm:flex sm:flex-shrink-0 md:flex md:flex-shrink-0">
      <div
        class="flex flex-col"
        :class="closed ? 'w-12' : 'w-60'"
      >
        <div class="flex flex-col flex-grow pt-5 pb-4 bg-gray-100 dark:border-gray-700 dark:bg-gray-900">
          <span class="flex justify-end mr-3" @click="toggle">
            <left-arrow v-if="!closed" />
            <right-arrow v-else />
          </span>
          <div
            class="flex flex-col flex-grow mt-5"
            :class="closed ? 'hidden' : null"
          >
            <slot name="aside" />
          </div>
        </div>
      </div>
    </div>
    <slot name="main" />
  </div>
</template>

<script lang="ts" setup>
import LeftArrow from '~/components/icon/LeftArrow.vue'
import RightArrow from '~/components/icon/RightArrow.vue'

const closed = ref(false)
const toggle = () => closed.value = !closed.value
</script>

