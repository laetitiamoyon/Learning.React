import axios from 'axios'
import type { BookingResponse, Category } from '../types'

const API_BASE = '/api/techtest'

export async function fetchPrestation(): Promise<Category[]> {
  const res = await axios.get(`${API_BASE}/universe`, {
    headers: { Accept: 'application/json' },
  })
  return res.data.categories ?? res.data
}

export async function createBooking(payload: BookingResponse): Promise<BookingResponse> {
  const res = await axios.post(`${API_BASE}/booking`, payload, {
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  })
  return res.data
}
