<template>
  <header class="bg-white dark:bg-gray-800">
    <nav class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" aria-label="Top">
      <div class="flex items-center justify-between w-full py-3 border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <div class="flex w-16 h-8">
            <router-link to="/" class="flex-shrink-0">
              <img src="/anma-large.png" alt="ANMA Logo" class="h-8">
            </router-link>
          </div>
        </div>
        <div class="flex items-center justify-center space-x-4">
          <header-dark-mode />
        </div>
      </div>
    </nav>
  </header>
</template>
<script lang="ts" setup>
import HeaderDarkMode from '~/components/header/HeaderDarkMode.vue'
</script>
