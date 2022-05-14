<template>
  <div>
    <menu-side>
      <template #aside>
        <span class="pb-2 pl-2 -mt-4 text-sm text-gray-600 align-middle">Click on an episode to apply filter</span>
        <div class="flex">
          <left-scroll>
            <div v-for="episode in episodes" :key="episode.id">
              <p class="flex flex-row-reverse pl-4 mb-2 space-x-2 cursor-pointer hover:underline" @click="setFilter(episode.id)">
                <span>{{ episode.name }}</span>
                <span v-if="episode.id === filter">
                  <column-filter />
                </span>
              </p>
            </div>
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
              <span v-for="filteredShop in filteredShops" :key="filteredShop.id">
                <span v-for="shop in filteredShop.shops" :key="shop.id">
                  <shop-marker :position="shop.position" :label="`${parseInt(shop.episode)}`">
                    <marker-window>
                      <marker-modal :shop="shop" />
                    </marker-window>
                  </shop-marker>
                  <span v-for="marker, i in shop.other_locations" :key="i">
                    <shop-marker :position="marker.position" :label="`${parseInt(shop.episode)}`">
                      <marker-window>
                        <marker-modal :shop="shop" />
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
import ColumnFilter from '~/components/icon/ColumnFilter.vue'

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
{
  id: 2,
  episode: '002',
  shops:[
    {
      id: 2,
      order: 1,
      episode: '002',
      name: 'Houndstooth coffee',
      address: '401 Congress Ave #100c, Austin, TX 78701',
      position: {
        lat: 30.266406511622108,
        lng: -97.74280121295327,
      },
      rating: {
        gus: '7.0',
        geoff: '7.0',
        average: '7.0',
      },
      other_locations: [
        {
          address: '4200 N Lamar Blvd STE 120, Austin, TX 78756',
          position: {
            lat: 30.310579974993825,
            lng: -97.74000446243984,
          },
        },
        {
          address: '2823 East MLK Blvd, Ste 101, Austin, TX 78702',
          position: {
            lat: 30.281461543184978,
            lng: -97.70958437124027,
          },
        },
        {
          address: '11501 Rock Rose Ave Ste 118, Austin, TX 78758',
          position: {
            lat: 30.400638707979816,
            lng: -97.7227962374137,
          },
        },
        {
          address: '2001 Ed Bluestein Blvd, Austin, TX 78721',
          position: {
            lat: 30.259750557102816,
            lng: -97.67402351821713,
          },
        },
      ],
    },
  ],
},
] as models.Shops

const filteredShops = computed((): models.Shops => {
  if (!filter.value)
    return shops
  return shops.filter(shop => shop.episode === filter.value.toString().padStart(3, '0'))
})

</script>
