<template>
  <div>
    <div class="container flex flex-col p-2 mx-auto lg:p-8">
      <client-only>
        <google-map
          :api-key="config.public.googleMapsApiKey"
          style="width: 100%; height: 80vh"
          :center="center"
          :zoom="12"
          :fullscreen-control="false"
        >
          <Marker v-for="mark in filteredMarkers" :key="mark.id" :options="{ position: mark.position }">
            <info-window>
              <span class="text-2xl font-bold text-black">{{ mark.name }}</span>
            </info-window>
          </Marker>
        </google-map>
      </client-only>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref } from '@vue/runtime-core'
import { GoogleMap, InfoWindow, Marker } from 'vue3-google-map'

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
] as models.Markers


const filter = ref(undefined) as Ref<number | undefined>

const filteredMarkers = computed((): models.Markers => {
  if (!filter.value)
    return markers
  return markers.filter(mark => mark.episode === filter.value)
})

</script>
