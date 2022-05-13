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

  }
}
