import type { Prestation } from '../types'

export type SelectedItem = {
  prestation: Prestation
  quantity: number
}

export type State = {
  items: SelectedItem[]
  address: string | null
  appointment: string | null
}

export type Action =
  | { type: 'ADD_PRESTATION'; prestation: Prestation }
  | { type: 'REMOVE_PRESTATION'; reference: string }
  | { type: 'REMOVE_ALL_PRESTATION'; reference: string }
  | { type: 'SET_ADDRESS'; address: string }
  | { type: 'SET_APPOINTMENT'; appointment: string }
  | { type: 'RESET' }
