export {}
declare global {
  export namespace models {

    export interface Marker {
      id: number
      name: string
      rating: float
      position: {
        lat: float
        lng: float
      }
    }
    export type Markers = Array<Marker>

  }
}
