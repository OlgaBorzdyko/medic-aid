export const getLogin = async (data: {
  username: string
  password: string
}) => {
  const res = await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
  return res.json()
}
