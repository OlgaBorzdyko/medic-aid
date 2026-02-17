import { http, HttpResponse } from 'msw'

const MOCK_USER = {
  id: 1,
  login: 'admin',
  password: '123456',
  name: 'John Doe',
  avatar: '/doctor-example.png'
}

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
  }),
  http.post('/login', async ({ request }) => {
    const response = await request.json()
    const { login, password } = response as {
      login: string
      password: string
    }
    if (login === MOCK_USER.login && password === MOCK_USER.password) {
      return HttpResponse.json(
        {
          success: true,
          token: 'mock-example-token',
          user: {
            id: MOCK_USER.id,
            name: MOCK_USER.name,
            avatar: MOCK_USER.avatar
          }
        },
        { status: 200 }
      )
    }
    return HttpResponse.json(
      { message: 'Invalid login or password' },
      { status: 401 }
    )
  })
]
