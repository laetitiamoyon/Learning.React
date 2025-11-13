
import axios from "axios";

const API_BASE = "/api/techtest";

export async function fetchUniverse() {
  const res = await axios.get(`${API_BASE}/universe`, {
    headers: { Accept: "application/json" },
  });
  return res.data.categories ?? res.data;
}

export async function createBooking(payload: {
  prestations: string[];
  appointment: string;
  address: string;
}) {
  const res = await axios.post(`${API_BASE}/booking`, payload, {
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  return res.data;
}
