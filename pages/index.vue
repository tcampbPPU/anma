<template>
  <div>
    <div class="container flex flex-col p-2 mx-auto lg:p-8">
      <client-only>
        <google-map
          :api-key="config.public.googleMapsApiKey"
          style="width: 100%; height: 80vh"
          :center="center"
          :zoom="15"
        >
          <Marker v-for="mark in markers" :key="mark.id" :options="{ position: mark.position }">
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
    position: {
      lat: 30.29775802195116,
      lng: -97.70535262534085,
    },
    rating: 7,
  },
  {
    id: 2,
    name: 'Halcyon Coffee Bar',
    position: {
      lat: 40.448373232292894,
      lng: -80.00001018811726,
    },
    rating: 10,
  },
] as models.Markers


</script>
