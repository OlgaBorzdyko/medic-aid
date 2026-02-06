import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('/doctors', () => {
    return HttpResponse.json({
      id: 1,
      name: 'John Doe'
    })
  }),
  http.get('/appointments', () => {
    return HttpResponse.json({})
  }),
  http.get('/patients', () => {
    return HttpResponse.json({})
  })
]
