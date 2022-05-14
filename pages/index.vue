<template>
  <div>
    <menu-side>
      <template #aside>
        <!-- Aside -->
      </template>
      <template #main>
        <main class="container flex flex-col w-full p-2 mx-auto lg:p-8">
          <div class="flex flex-row-reverse pb-2">
            <select
              v-model="theme"
              class="z-20 w-full bg-white border divide-y divide-gray-100 rounded-md shadow-lg md:w-1/4 dark:border-gray-700 dark:bg-gray-900 dark:divide-gray-600"
            >
              <option
                v-for="t in themes"
                :key="t"
                :value="t"
              >
                {{ t }}
              </option>
            </select>
          </div>
          <client-only>
            <g-map
              :api-key="config.public.googleMapsApiKey"
              :center="center"
              :theme="theme"
            >
              <map-marker :markers="markers">
                <template #mark="{ mark }">
                  <marker-window>
                    <span class="text-2xl font-bold text-black">{{ mark.name }}</span>
                  </marker-window>
                </template>
              </map-marker>
            </g-map>
          </client-only>
        </main>
      </template>
    </menu-side>
  </div>
</template>

<script lang="ts" setup>
import GMap from '~/components/map/GMap.vue'
import MapMarker from '~/components/map/MapMarker.vue'
import MarkerWindow from '~/components/map/MarkerWindow.vue'
import MenuSide from '~/components/layout/MenuSide.vue'

const config = useRuntimeConfig()

// Coords of Austin, TX
const center = {
  lat: 30.267164441587564,
  lng: -97.74228103200021,
}

// Markers of Coffee Shops
const markers = [
  {
    id: 1,
    name: 'Halcyon Coffee Bar',
    episode: 1,
    position: {
      lat: 30.29775802195116,
      lng: -97.70535262534085,
    },
    rating: 7,
  },
  {
    id: 2,
    name: 'Halcyon Coffee Bar',
    episode: 1,
    position: {
      lat: 31.29775802195116,
      lng: -97.70535262534085,
    },
    rating: 7,
  },
  {
    id: 3,
    name: 'Halcyon Coffee Bar',
    episode: 1,
    position: {
      lat: 29.29775802195116,
      lng: -97.70535262534085,
    },
    rating: 7,
  },
] as models.Markers

const themes = ['default', 'aubergine', 'dark', 'retro', 'minimal']
const theme = ref<'default'|'aubergine'|'dark'|'retro'|'minimal'>('default')

</script>
