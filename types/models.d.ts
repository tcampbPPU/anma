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
    }
    export type Markers = Array<Marker>

  }
}
