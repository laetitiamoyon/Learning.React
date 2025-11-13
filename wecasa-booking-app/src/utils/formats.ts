export function formatPrice(cents: number) {
    const euros = cents / 100;
    return euros.toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
}

export function formatDuration(totalMinutes: number) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    if (hours === 0) return `${minutes}min`;
    if (minutes === 0) return `${hours}h`;
    return `${hours}h${minutes.toString().padStart(2, "0")}`;
}
  