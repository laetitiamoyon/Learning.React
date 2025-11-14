import { useState, type JSX } from 'react'
import type { Prestation } from '../types'

interface PrestationItemProps {
  title: string
  prestations: Prestation[]
  onAdd: (prestation: Prestation) => void
}

export function PrestationItem({ title, prestations, onAdd }: PrestationItemProps): JSX.Element {
  const [expanded, setExpanded] = useState(false)

  const visiblePrestations = expanded ? prestations : prestations.slice(0, 2)

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visiblePrestations.map((p) => (
          <div
            key={p.reference}
            className="p-4 border rounded-xl hover:shadow-md transition-all bg-white flex flex-col justify-between"
          >
            <div>
              <p className="font-medium text-gray-800">{p.title}</p>
              <p className="text-sm text-gray-500">{(p.price / 100).toFixed(2)} €</p>
              <p className="text-sm text-gray-400">{p.duration} min</p>
            </div>

            <button
              onClick={() => onAdd(p)}
              className="mt-3 bg-purple-600 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-purple-700 cursor-pointer"
            >
              Ajouter
            </button>
          </div>
        ))}
      </div>

      {prestations.length > 3 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-purple-600 hover:text-purple-700 font-medium text-sm cursor-pointer"
          >
            {expanded ? 'Voir moins ▲' : 'Voir plus ▼'}
          </button>
        </div>
      )}
    </div>
  )
}
