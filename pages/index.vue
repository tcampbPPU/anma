<template>
  <div>
    <menu-side>
      <template #aside>
        <span class="pb-2 pl-2 -mt-4 text-sm text-gray-200 align-middle dark:text-gray-600">Click on an episode to apply filter</span>
        <div class="flex">
          <left-scroll>
            <div v-for="episode in episodes" :key="episode.id">
              <p class="pl-4 mb-2 cursor-pointer" @click="setFilter(episode.id)">
                {{ episode.name }}
              </p>
            </div>
            <!-- <div v-for="i in 100" :key="i">
              <p class="pl-4 mb-2 cursor-pointer">
                {{ i }}
              </p>
            </div> -->
          </left-scroll>
        </div>
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
              <map-marker
                :markers="markers"
                :filter="filter"
              >
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
import LeftScroll from '~/components/layout/LeftScroll.vue'

const config = useRuntimeConfig()

// Coords of Austin, TX
const center = {
  lat: 30.267164441587564,
  lng: -97.74228103200021,
}

const episodes = [
  {
    id: 1,
    name: 'Episode 1',
  },
  {
    id: 2,
    name: 'Episode 2',
  },
]

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
    id: 1,
    name: 'Halcyon Coffee Bar',
    episode: 1,
    position: {
      lat: 30.266962926528826,
      lng: -97.7456913147418,
    },
    rating: 7,
  },
  {
    id: 2,
    name: 'Halcyon Coffee Bar',
    episode: 2,
    position: {
      lat: 31.29775802195116,
      lng: -97.70535262534085,
    },
    rating: 7,
  },
  {
    id: 3,
    name: 'Halcyon Coffee Bar',
    episode: 2,
    position: {
      lat: 29.29775802195116,
      lng: -97.70535262534085,
    },
    rating: 7,
  },
] as models.Markers

const themes = ['default', 'night', 'hazy', 'groovy', 'moonlight', 'minimal']
const theme = ref<'default'|'night'|'hazy'|'groovy'|'moonlight'|'minimal'>('hazy')
const filter = ref<number|undefined>(undefined)

const setFilter = (id: number) => {
  if (filter.value === id)
    filter.value = undefined
  else
    filter.value = id
}

</script>
