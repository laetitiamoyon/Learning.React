export type Prestation = {
  reference: string
  title: string
  price: number
  duration: number
}

export type Category = {
  reference: string
  title: string
  prestations: Prestation[]
}

export type Universe = {
  categories: Category[]
}

export interface CartItem {
  prestation: Prestation
  quantity: number
}

export interface BookingResponse {
  appointment: string
  address: string
  prestations: string[]
}
