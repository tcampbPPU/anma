<template>
  <div>
    <div class="container flex flex-col p-2 mx-auto lg:p-8">
      <client-only>
        <g-map
          :api-key="config.public.googleMapsApiKey"
          :center="center"
          theme="aubergine"
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import GMap from '~/components/maps/GMap.vue'
import MapMarker from '~/components/maps/MapMarker.vue'
import MarkerWindow from '~/components/maps/MarkerWindow.vue'

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

</script>
