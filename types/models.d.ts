import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export {}
declare global {
  export namespace models {

    export interface Marker {
      id: number
      episode: number
      name: string
      rating?: float
      position: {
        lat: float
        lng: float
      }
      label?: string
      title?: string
    }
    export type Markers = Array<Marker>

    export interface Coordinates {
      lat: float
      lng: float
    }

    export interface Episode extends ParsedContent {
      id: number
      name: string
      title: string
      episode: string|number
      year: number
      date: Date
      description: string
    }
    export type Episodes = Array<Episode>

    export interface Shop extends ParsedContent {
      id: number
      episode: string
      shops: ShopItems
    }
    export type Shops = Array<Shop>

    export interface ShopItem {
      id: number
      order: number
      episode: string
      name: string
      address: string
      position: Coordinates
      rating?: {
        gus: float
        geoff: float
        average: float
      }
      other_locations: ShopLocations
    }
    export type ShopItems = Array<ShopItem>

    export interface ShopLocation {
      address: string
      position: Coordinates
    }
    export type ShopLocations = Array<ShopLocation>

  }
}
