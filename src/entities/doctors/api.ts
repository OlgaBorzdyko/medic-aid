export const getDoctors = async () => {
  const res = await fetch('/doctors')
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}
