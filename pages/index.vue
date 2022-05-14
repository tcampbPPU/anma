<template>
  <div>
    <menu-side>
      <template #aside>
        <span class="pb-2 pl-2 -mt-4 text-sm text-gray-600 align-middle">Click on an episode to apply filter</span>
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
                {{ ucFirst(t) }}
              </option>
            </select>
          </div>
          <client-only>
            <g-map
              :api-key="config.public.googleMapsApiKey"
              :center="center"
              :theme="theme"
            >
              <span v-for="shop in shops" :key="shop.id">
                <span v-for="marker in shop.shops" :key="marker.id">
                  <shop-marker :position="marker.position">
                    <marker-window>
                      <marker-modal :marker="marker" />
                    </marker-window>
                  </shop-marker>
                  <span v-for="other, i in marker.other_locations" :key="i">
                    <shop-marker :position="other.position">
                      <marker-window>
                        <marker-modal :marker="marker" />
                      </marker-window>
                    </shop-marker>
                  </span>
                </span>
              </span>
            </g-map>
          </client-only>
        </main>
      </template>
    </menu-side>
  </div>
</template>

<script lang="ts" setup>
import ucFirst from '~/composables/ucFirst'
import GMap from '~/components/map/GMap.vue'
import MarkerWindow from '~/components/map/MarkerWindow.vue'
import MenuSide from '~/components/layout/MenuSide.vue'
import LeftScroll from '~/components/layout/LeftScroll.vue'
import ShopMarker from '~/components/shop/ShopMarker.vue'
import MarkerModal from '~/components/shop/MarkerModal.vue'

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

const themes = ['default', 'night', 'hazy', 'groovy', 'moonlight', 'minimal']
const theme = ref<'default'|'night'|'hazy'|'groovy'|'moonlight'|'minimal'>('hazy')
const filter = ref<number|undefined>(undefined)

const setFilter = (id: number) => {
  if (filter.value === id)
    filter.value = undefined
  else
    filter.value = id
}

const shops = [
{
  id: 1,
  episode: '001',
  shops: [
    {
      id: 1,
      order: 1,
      episode: '001',
      name: 'Halcyon Coffee Bar',
      address: '1905 Aldrich Street, #110 Austin, TX 78723',
      position: {
        lat: 30.29775802195116,
        lng: -97.70535262534085,
      },
      rating: {
        gus: '7.0',
        geoff: '7.0',
        average: '7.0',
      },
      other_locations: [
        {
          address: '218 W 4th St Austin, TX 78701',
          position: {
            lat: 30.267050890151644,
            lng: -97.74563623008639,
          },
        },
      ],
    },
  ],
},
] as models.Shops

</script>
