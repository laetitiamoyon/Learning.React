import { useEffect, useState } from 'react'
import type { Category } from '../types'
import { fetchPrestation } from '../api'

interface UseFetchPrestationResult {
  data: Category[] | null
  loading: boolean
  error: string | null
}

export function useFetchPrestation(): UseFetchPrestationResult {
  const [data, setData] = useState<Category[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    fetchPrestation()
      .then((categories) => {
        if (mounted) setData(categories)
      })
      .catch((err) => {
        console.error(err)
        if (mounted) setError("Nous n'avons pas pu récupérer les prestations")
      })
      .finally(() => mounted && setLoading(false))
    return () => {
      mounted = false
    }
  }, [])

  return { data, loading, error }
}
