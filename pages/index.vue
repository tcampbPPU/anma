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
                      <marker-modal :shop="shop" :address="shop.address" />
                    </marker-window>
                  </shop-marker>
                  <span v-for="marker, i in shop.other_locations" :key="i">
                    <shop-marker :position="marker.position" :label="`${parseInt(shop.episode)}`">
                      <marker-window>
                        <marker-modal :shop="shop" :address="marker.address" />
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
  {
    id: 3,
    name: 'Episode 3',
  },
  {
    id: 4,
    name: 'Episode 4',
  },
]

const themes = ['default', 'night', 'hazy', 'groovy', 'moonlight', 'minimal']
const theme = ref<'default'|'night'|'hazy'|'groovy'|'moonlight'|'minimal'>('default')
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
      name: `Hank's Austin`,
      address: '5811 Berkman Dr, Austin, TX 78723',
      position: {
        lat: 30.31242246361591,
        lng: -97.69295301259955,
      },
    },
  ],
},
{
  id: 3,
  episode: '003',
  shops:[
    {
      id: 3,
      order: 1,
      episode: '003',
      name: `Flightpath Coffeehouse`,
      address: '5011 Duval St, Austin, TX 78751',
      position: {
        lat: 30.31377602732789,
        lng: -97.71990647770498,
      },
    },
  ],
},
{
  id: 4,
  episode: '004',
  shops:[
    {
      id: 4,
      order: 1,
      episode: '004',
      name: 'Batch Craft Beer & Kolaches',
      address: '3220 Manor Road Austin, Texas 78723',
      position: {
        lat: 30.287164831367765,
        lng: -97.70313164613975,
      },
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
