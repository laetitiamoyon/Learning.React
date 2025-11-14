export const BOOKING_STEPS = [
  'Sélectionnez une prestation',
  'Renseigner votre adresse',
  'Choisir un créneau',
  'Réservation confirmée',
] as const

export const TOTAL_STEPS = BOOKING_STEPS.length

export const STEPS_ROUTES = ['/', '/address', '/appointment', '/confirmation'] as const

export const LAST_STEP = STEPS_ROUTES.length
